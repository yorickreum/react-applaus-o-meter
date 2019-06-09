import Competitor from "./Competitor";

class CalibrationCompetitor extends Competitor {
    getMin() {
        return Math.min.apply(Math,this.levels);
    }
    getMax() {
        return Math.max.apply(Math,this.levels);
    }
    getAvg() {
        let levelSum =  this.levels.reduce((foo, bar) => foo+bar, 0);
        return (levelSum / this.levels.length);
    }
}

export default CalibrationCompetitor