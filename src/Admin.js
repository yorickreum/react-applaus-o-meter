import React, {Component} from 'react';
import Volumemeter from './Volumemeter';
import './Admin.css';
import './styles/index.css'
import CompetitorsTable from "./CompetitorsTable";
import Competitor from './Competitor'


class Admin extends Component {
    constructor(props) {
        super(props);
        this.vm = new Volumemeter();
        if (localStorage.state === null) {
            this.clearAll();
        } else {
            this.state = JSON.parse(localStorage.state);
        }
        this.keyboardFunction = this.keyboardFunction.bind(this);
        this.addCompetitor = this.addCompetitor.bind(this);
        this.isCompetitorNameAlreadyExists = this.isCompetitorNameAlreadyExists.bind(this);
        this.removeCompetitor = this.removeCompetitor.bind(this);
        this.changeSettings = this.changeSettings.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.startCompetitor = this.startCompetitor.bind(this);
        this.clearAll = this.clearAll.bind(this);
    }

    keyboardFunction(event) {
        if (event.keyCode === 71) {
            this.setState(
                {
                    record: 'def'
                }
            )
        }
    }

    tick() {
        this.setState(state => ({
            volume: this.vm.getVolume()
        }));
    }

    componentDidMount() {
        document.addEventListener("keydown", this.keyboardFunction, false);
        this.interval = setInterval(() => this.tick(), 10);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyboardFunction, false);
    }

    componentDidUpdate(prevProps, prevState) {
        localStorage.state = JSON.stringify(this.state);
    }

    addCompetitor(event) {
        event.preventDefault();
        let name = this.state.addCompetitorInput;
        if (!this.isCompetitorNameAlreadyExists(name) && !(name === "")) {
            let c = new Competitor(name);
            this.state.competitors.push(c);
        }
    }

    changeSettings(event) {
        event.preventDefault();
        let settings = this.state.settings;
        settings.duration = this.state.durationInput;
        this.setState({
            settings: settings
        });
    }

    isCompetitorNameAlreadyExists(name) {
        let exists = false;
        this.state.competitors.forEach(function (competitor) {
            if (name === competitor.props.name) {
                exists = true;
            }
        });
        return exists;
    }

    removeCompetitor(competitor) {
        this.state.competitors.forEach(function (comp, index, comps) {
            if (competitor === comp) {
                comps.splice(index, 1);
            }
        });
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    clearAll() {
        this.setState( {
            volume: this.vm.getVolume(),
            addCompetitorInput: '',
            durationInput: 15,
            competitors: [],
            settings: {},
        } );
    }

    render() {
        return (
            <div className="Admin container">

                <header className="Admin-header">
                    <h1 className="Admin-title">Welcome to React</h1>
                </header>

                <p className="Admin-intro">
                    To get started, edit <code>src/Admin.js</code> and save to reload.
                    {this.state.record}
                </p>

                <div id="settings">
                    <form onSubmit={this.changeSettings} className="row form-group">
                        <div className="col-10">
                            <input type="text" className="form-control w-100"
                                   name="durationInput" value={this.state.durationInput} placeholder="duration"
                                   onChange={this.handleChange}/>
                        </div>
                        <div className="col-2">
                            <input type="submit" className="form-control btn btn-success" value="Add!"/>
                        </div>
                    </form>
                </div>

                <div id="competitors">
                    <form onSubmit={this.addCompetitor} className="row form-group">
                        <div className="col-10">
                            <input type="text" className="form-control w-100"
                                   name="addCompetitorInput" value={this.state.addCompetitorInput}
                                   placeholder="Competitor name"
                                   onChange={this.handleChange}/>
                        </div>
                        <div className="col-2">
                            <input type="submit" className="form-control btn btn-success" value="Add!"/>
                        </div>
                    </form>

                    <div>
                        <CompetitorsTable competitors={this.state.competitors} startCallback={this.startCompetitor} setCallback={this.setCompetitor} removeCallback={this.removeCompetitor}/>
                    </div>
                </div>
            </div>
        );
    }

    submit(event) {
        // do something, or not, with the keydown event, maybe event.preventDefault()
        this.setState({
            record: false
        })
    }

}

export default Admin