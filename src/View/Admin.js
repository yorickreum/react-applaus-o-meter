import React, {Component} from 'react';
import CompetitionTable from "./CompetitionTable";
import CalibrationTable from "./CalibrationTable";
import Competition from '../Model/Competition';
import Competitor from '../Model/Competitor';
import Heading from "./Heading";
import CompetitionJsonExportBtn from "./CompetitionJsonExportBtn"
import CalibrationCompetitor from "../Model/CalibrationCompetitor";


class Admin extends Component {
    constructor(props) {
        super(props);

        let compParsed = JSON.parse(localStorage.getItem('competition'));
        if (compParsed != null) {
            Competition.revive(compParsed);
        }

        this.state = {
            addCompetitorInput: '',
            addCalibrationCompetitorInput: 'Calibration 1',
            durationInput: Competition.duration / 1000,
            maxVolInput: Competition.maxVol,
            competition: Competition,
        };

        this.state.competition.stateCallbacks.push(
            () => {
                console.log('stateCallback');
                this.forceUpdate();
            }
        );

        this.addCompetitor = this.addCompetitor.bind(this);
        this.addCalibrationCompetitor = this.addCalibrationCompetitor.bind(this);
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

    componentDidMount() {
        document.title = "Admin | Applaus-O-Meter";
    }

    componentDidUpdate(prevProps, prevState) {
        Competition.dumpToLocalStorage();
    }

    addCompetitor(event) {
        event.preventDefault();
        let name = this.state.addCompetitorInput;
        if (!this.state.competition.isCompetitorNameAlreadyExists(name) && !(name === "")) {
            let competition = this.state.competition;
            competition.addCompetitor(new Competitor(name));
            this.setState({
                competition: competition
            });
        }
    }

    addCalibrationCompetitor(event) {
        event.preventDefault();
        let name = this.state.addCalibrationCompetitorInput;
        if (!this.state.competition.isCalibrationCompetitorNameAlreadyExists(name) && !(name === "")) {
            let competition = this.state.competition;
            competition.addCalibrationCompetitor(new CalibrationCompetitor(name));
            this.setState({
                competition: competition
            });
        }
    }

    changeSettings(event) {
        event.preventDefault();
        let competition = this.state.competition;
        competition.duration = this.state.durationInput * 1000;
        competition.maxVol = parseFloat( this.state.maxVolInput.replace(',','.') );
        this.setState({
            competition: competition
        });
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }


    render() {
        return (
            <React.Fragment>
                <Heading/>
                <div className="container">

                    <header>
                        <h2>Welcome to Applaus-O-Meter administration</h2>
                        <p>To get started, add some competitors.</p>
                    </header>


                    <div id="settings">
                        <h3>Settings</h3>
                        <form onSubmit={this.changeSettings} className="form-group">
                            <div className="row">
                                <div className="col-2">
                                    <label
                                        htmlFor="durationInput">Duration in
                                        seconds<br/>(currently {this.state.competition.duration / 1000} s)</label>
                                </div>
                                <div className="col-8">
                                    <input type="text" className="form-control w-100"
                                           name="durationInput" value={this.state.durationInput} placeholder="duration"
                                           onChange={this.handleChange}/>
                                </div>
                                <div className="col-2">
                                    <input type="submit" className="form-control btn btn-success" value="Set!"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <label
                                        htmlFor="maxVolInput">Max volume for rating, in [0;1]<br/>(currently: {this.state.competition.maxVol})</label>
                                </div>
                                <div className="col-8">
                                    <input type="text" className="form-control w-100"
                                           name="maxVolInput" value={this.state.maxVolInput}
                                           onChange={this.handleChange}/>
                                </div>
                                <div className="col-2">
                                    <input type="submit" className="form-control btn btn-success" value="Set!"/>
                                </div>
                            </div>
                        </form>
                    </div>


                    <div id="calibration">
                        <h3>Calibration</h3>
                        <form onSubmit={this.addCalibrationCompetitor} className="row form-group">
                            <div className="col-10">
                                <input type="text" className="form-control w-100"
                                       name="addCalibrationCompetitorInput"
                                       value={this.state.addCalibrationCompetitorInput}
                                       placeholder="Competitor name"
                                       onChange={this.handleChange}/>
                            </div>
                            <div className="col-2">
                                <input type="submit" className="form-control btn btn-success" value="Add!"/>
                            </div>
                        </form>
                        <div>
                            <CalibrationTable competition={this.state.competition}/>
                        </div>
                    </div>

                    <div id="competitors">
                        <h3>Competitors</h3>
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
                            <CompetitionTable competition={this.state.competition}/>
                        </div>
                    </div>

                    <div>
                        <CompetitionJsonExportBtn competition={this.state.competition}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Admin