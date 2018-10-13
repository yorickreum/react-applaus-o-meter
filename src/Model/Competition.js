import Competitor from './Competitor';

class _Competition {
    constructor() {
        if (!_Competition.instance) {

            this.competitors = [];
            this._duration = 1500;
            this.stateCallback = null;

            _Competition.instance = this;
        }
        return _Competition.instance;
    }

    /**
     *
     * @param {Competitor} competitor
     */
    addCompetitor(competitor) {
        this.competitors.push( competitor );
    }

    get duration() {
        return this._duration;
    }
    set duration(value) {
        this._duration = parseInt(value);
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
        if(this.stateCallback) { this.stateCallback() }
    }

}

const Competition = new _Competition();

export default Competition