// import Volumemeter from "../utils/volumemeterUtils";
// import Competition from "./Competition";
//
// class Competitor {
//     /**
//      *
//      * @param {string} name
//      * @param {double} rating
//      */
//     constructor(name = '') {
//         this.id = name + Date.now();
//         this.reset();
//         this.name = name;
//         this.interval = null;
//         this.reset = this.reset.bind(this);
//     }
//
//     reset() {
//         this.startedRecording = null;
//         this.stoppedRecording = null;
//         this.levels = [];
//         this.measureDuration = Competition.duration;
//         this.timeLeft = this.measureDuration;
//         this.isActive = false;
//         clearInterval(this.interval);
//         Competition.update();
//     }
//
//     tick() {
//         this.timeLeft = this.measureDuration - (Math.floor(Date.now()) - this.startedRecording);
//         if (this.timeLeft > 0) {
//             let levels = this.levels;
//             let vol = Volumemeter.getVolume();
//             levels.push(vol);
//         }
//         else {
//             this.stoppedRecording = Math.floor(Date.now());
//             clearInterval(this.interval);
//             this.isActive = false;
//             this.timeLeft = 0;
//         }
//         Competition.update();
//     }
//
//     get rating() {
//         if (this.levels.length === 0) {
//             return 0;
//         } else {
//             let levelSum =  this.levels.reduce((pv, cv) => pv+cv, 0);
//             return (levelSum / this.levels.length) / Competition.maxVol;
//         }
//     }
//
//     /**
//      * Revive from JSON Competition data
//      * @param data
//      * @returns {CompetitorUtils}
//      */
//     revive(data) {
//         if (this.name != null) {
//             this.name = data.name;
//             this.startedRecording = data.startedRecording;
//             this.stoppedRecording = data.stoppedRecording;
//             this.levels = data.levels;
//             this.measureDuration = data.measureDuration;
//             this.timeLeft = data.timeLeft;
//             this.isActive = data.isActive;
//         }
//         return this;
//     }
// }
//
// export default Competitor
