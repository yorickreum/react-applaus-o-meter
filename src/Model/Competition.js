import Competitor from './Competitor';

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
        this._duration = 15000;
        this.stateCallbacks = [];
    }

    /**
     *
     * @param {Competitor} competitor
     */
    addCompetitor(competitor) {
        this.competitors.push(competitor);
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

    removeCompetitor(competitor) {
        this.competitors.forEach(function (comp, index, comps) {
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
        this.competitors.forEach(function (comp, index, comps) {
            if (comp.isActive) {
                activeCompetitor = comp;
            }
        });
        return activeCompetitor;
    }


    dumpToLocalStorage(){
        localStorage.setItem( 'competition', JSON.stringify(this) );
    }

    getJsonDateUri() {
        let str = JSON.stringify(this, null, '\t');
        return 'data:application/json;charset=utf-8,'+ encodeURIComponent(str);
    }

    /**
     *
     * @param data
     * @returns {_Competition}
     */
    revive(data) {
        this.reset();
        data.competitors.forEach((comp) => {
            let newComp = new Competitor();
            newComp.revive(comp);
            this.addCompetitor(newComp);
        });
    }

}

const Competition = new _Competition();

export default Competition