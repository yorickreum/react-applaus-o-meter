import Competitor from './Competitor';
import CalibrationCompetitor from "./CalibrationCompetitor";

class _Competition {
    constructor() {
        if (!_Competition.instance) {

            this.reset();

            _Competition.instance = this;
        }
        return _Competition.instance;
    }

    reset() {
        this.competitors = [];
        this._duration = 10000;
        this.calibrationCompetitors = [];
        this.maxVol = 1;
        this.stateCallbacks = [];
    }

    /**
     *
     * @param {Competitor} competitor
     */
    addCompetitor(competitor) {
        this.competitors.push(competitor);
    }

    /**
     *
     * @param {CalibrationCompetitor} competitor
     */
    addCalibrationCompetitor(competitor) {
        this.calibrationCompetitors.push(competitor);
    }

    get duration() {
        return this._duration;
    }

    set duration(value) {
        this._duration = parseInt(value, 10);
    }

    update() {
        this.stateCallbacks.forEach(function (cb) {
            if (cb) {
                cb();
            }
        })
    }

    /**
     *
     * @param {string} name
     * @returns {boolean}
     */
    isCompetitorNameAlreadyExists(name) {
        let exists = false;
        this.competitors.forEach(function (comp) {
            if (name === comp.name) {
                exists = true;
            }
        });
        return exists;
    }

    /**
     *
     * @param name
     * @returns {boolean}
     */
    isCalibrationCompetitorNameAlreadyExists(name) {
        let exists = false;
        this.calibrationCompetitors.forEach(function (comp) {
            if (name === comp.name) {
                exists = true;
            }
        });
        return exists;
    }

    removeCompetitor(competitor) {
        this.competitors.forEach(function (comp, index, comps) {
            if (competitor === comp) {
                comps.splice(index, 1);
            }
        });
        this.update();
    }

    removeCalibrationCompetitor(competitor) {
        this.calibrationCompetitors.forEach(function (comp, index, comps) {
            if (competitor === comp) {
                comps.splice(index, 1);
            }
        });
        this.update();
    }


    /**
     *
     * @returns {Competitor}
     */
    getActiveCompetitor() {
        let activeCompetitor = null;
        this.competitors.forEach(function (comp) {
            if (comp.isActive) {
                activeCompetitor = comp;
            }
        });
        return activeCompetitor;
    }

    getActiveCalibrationCompetitor() {
        let activeCompetitor = null;
        this.calibrationCompetitors.forEach(function (comp) {
            if (comp.isActive) {
                activeCompetitor = comp;
            }
        });
        return activeCompetitor;
    }

    getLeader() {
        let leadingCompetitor = null;
        if (this.competitors[0]) {
            leadingCompetitor = this.competitors[0];
            this.competitors.forEach(function (comp, index, comps) {
                if (comp.rating >= leadingCompetitor.rating) {
                    leadingCompetitor = comp;
                }
            });
        }
        if (leadingCompetitor && leadingCompetitor.rating !== 0) {
            return leadingCompetitor;
        }
        else {
            return null;
        }
    }

    isCalibrating() {
        let calibrating = false;
        this.calibrationCompetitors.forEach(function (comp) {
            if (comp.isActive) {
                calibrating = true;
            }
        });
        return calibrating;
    }

    dumpToLocalStorage() {
        localStorage.setItem('competition', JSON.stringify(this));
    }

    getJsonDateUri() {
        let str = JSON.stringify(this, null, '\t');
        return 'data:application/json;charset=utf-8,' + encodeURIComponent(str);
    }

    /**
     *
     * @param selectorFiles FileList
     */
    reviveFromFileList(selectorFiles) {
        let file = selectorFiles[0];
        let reader = new FileReader();
        reader.onload = function (e) {
            let comp = JSON.parse(e.target.result);
            if (comp != null) {
                let callbacks = this.stateCallbacks;
                this.revive( comp );
                this.dumpToLocalStorage();
                this.stateCallbacks = callbacks;
                this.update();
            }
        }.bind(this);
        reader.readAsText(file);
    }

    /**
     *
     * @param data
     * @returns {_Competition}
     */
    revive(data) {
        this.reset();
        this._duration = data._duration;
        this.maxVol = data.maxVol;
        data.competitors.forEach((comp) => {
            let newComp = new Competitor();
            newComp.revive(comp);
            this.addCompetitor(newComp);
        });
        data.calibrationCompetitors.forEach((comp) => {
            let newComp = new CalibrationCompetitor();
            newComp.revive(comp);
            this.addCalibrationCompetitor(newComp);
        });
        this.update();
    }

}

const Competition = new _Competition();

export default Competition
