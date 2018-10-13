import Volumemeter from "./Volumemeter";
import Competition from "./Competition";

class Competitor {
    /**
     *
     * @param {string} name
     * @param {double} rating
     */
    constructor(name = '', rating = 0.0) {
        this.reset();
        this.name = name;
        this.rating = rating;

        this.measure = this.measure.bind(this);
        this.reset = this.reset.bind(this);
    }

    reset() {
        this.rating = 0.0;
        this.startedRecording = null;
        this.stoppedRecording = null;
        this.levels = [];
        this.levelSum = 0;
        this.measureDuration = Competition.duration;
        this.timeLeft = this.measureDuration;
        this.isActive = false;
        clearInterval(this.interval);
        Competition.update();
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
            this.isActive = false;
            this.timeLeft = 0;
        }
        Competition.update();
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
        this.isActive = true;
        this.startedRecording = parseInt( timestamp, 10 );
        this.interval = setInterval(() => this.tick(), 10); // measure every 10th ms
    }

    /**
     * Revive from JSON Competition data
     * @param data
     * @returns {Competitor}
     */
    revive(data) {
        if( this.name != null ) {
            this.name = data.name;
            this.rating = data.rating;
            this.startedRecording = data.startedRecording;
            this.stoppedRecording = data.stoppedRecording;
            this.levels = data.levels;
            this.levelSum = data.levelSum;
            this.measureDuration = data.measureDuration;
            this.timeLeft = data.timeLeft;
            this.isActive = data.isActive;
        }
        return this;
    }
}

export default Competitor