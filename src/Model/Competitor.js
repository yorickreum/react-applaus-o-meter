import Volumemeter from "./Volumemeter";
import Competition from "./Competition";

class Competitor {
    /**
     *
     * @param {string} name
     * @param {double} rating
     */
    constructor(name, rating = 0.0) {
        this.reset();
        this.name = name;
        this.rating = rating;

        this.measure = this.measure.bind(this);
        // this.tick = this.tick.bind(this);
    }

    reset() {
        this.levels = [];
        this.rating = 0.0;
        this.startedRecording = null;
        this.stoppedRecording = null;
        this.levels = [];
        this.levelSum = 0;
        this.measureDuration = Competition.duration;
        this.timeLeft = this.measureDuration;
        if(Competition.stateCallback) {
            Competition.stateCallback();
        }
    }

    tick() {
        this.timeLeft = this.measureDuration - (Math.floor(Date.now()) - this.startedRecording);
        if ( this.timeLeft > 0 ) {
            let levels = this.levels;
            let vol = Volumemeter.getVolume();
            levels.push(vol);
            this.levelSum += vol;
            this.rating = this.levelSum / this.levels.length;
        }
        else {
            this.stoppedRecording = Math.floor(Date.now());
            clearInterval(this.interval);
            this.timeLeft = 0;
        }
        if(Competition.stateCallback) { Competition.stateCallback(); }
    }

    /**
     *
     * @param {double} duration Duration for measurement in ms
     */
    measure() {
        if( this.levels.length > 0 ){
            return;
        }
        console.log(this.name + ' starts measuring!');
        this.measureDuration = Competition.duration;
        console.log(' duration! ' + this.measureDuration );
        let timestamp = Math.floor(Date.now());
        this.startedRecording = parseInt( timestamp );
        this.interval = setInterval(() => this.tick(), 10);
    }
}

export default Competitor