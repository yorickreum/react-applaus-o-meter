import React, {Component} from 'react';
import './Admin.css';
import './styles/index.css'
import CompetitionTable from "./CompetitionTable";
import Competition from '../Model/Competition';
import Competitor from '../Model/Competitor';


class Admin extends Component {
    constructor(props) {
        super(props);
        if (localStorage.state == null) {
            this.state = {
                addCompetitorInput: '',
                durationInput: Competition.duration,
                competition: Competition,
            };
        } else {
            // this.state = JSON.parse(localStorage.state);
            this.state = {
                addCompetitorInput: '',
                durationInput: Competition.duration,
                competition: Competition,
            };
        }
        this.keyboardFunction = this.keyboardFunction.bind(this);
        this.addCompetitor = this.addCompetitor.bind(this);
        this.changeSettings = this.changeSettings.bind(this);
        this.handleChange = this.handleChange.bind(this);
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

    componentWillMount() {
        Competition.stateCallback = () => {
            console.log('stateCallback');
            this.forceUpdate();
        };
    }

    componentDidMount() {
        document.addEventListener("keydown", this.keyboardFunction, false);
        // console.log('did mount');
        // console.log(this.state);
        // console.log(JSON.stringify(this.state.competition));
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
        if (!this.state.competition.isCompetitorNameAlreadyExists(name) && !(name === "")) {
            let competition = this.state.competition;
            competition.addCompetitor(new Competitor(name))
            this.setState( {
                competition: competition
            });
            console.log(this.state);
            // let c = <CompetitorTableRow name={name} duration={this.state.settings.duration}/>
            // let competitors = this.state.competitors;
            // competitors.push(c);
            // this.setState( {
            //    competitors: competitors,
            // });
        }
    }

    changeSettings(event) {
        event.preventDefault();
        let competition = this.state.competition;
        competition.duration = this.state.durationInput;
        this.setState( {
            competition: competition
        });
        console.log( this.state.competition );
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
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
                            <input type="submit" className="form-control btn btn-success" value="Set!"/>
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
                        <CompetitionTable competition={this.state.competition} startCallback={this.startCompetitor} setCallback={this.setCompetitor} removeCallback={this.removeCompetitor}/>
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