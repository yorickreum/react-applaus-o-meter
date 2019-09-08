import React, {Component} from 'react';
import CompetitionTable from "../components/CompetitionTable";
import CalibrationTable from "../components/CalibrationTable";
import Competition from '../entities/Competition';
import CalibrationCompetitor from "../entities/CalibrationCompetitor";
import {connect} from "react-redux";
import {addCompetitor, setDuration, setMaxvol, updateAllRatings} from "../actions";
import {doesCompetitorNameAlreadyExists} from "../utils/competitionUtils";


class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addCompetitorInput: '',
            addCalibrationCompetitorInput: 'Calibration 1',
            durationInput: props.duration ? props.duration / 1000 : 10,
            maxVolInput: props.maxVol,
        };

        this.addCompetitor = this.addCompetitor.bind(this);
        this.addCalibrationCompetitor = this.addCalibrationCompetitor.bind(this);
//        this.changeSettings = this.changeSettings.bind(this);
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
        if (!(name === "") && !doesCompetitorNameAlreadyExists(name)) {
            this.props.dispatch(addCompetitor(name));
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

    // Deprecated
    // changeSettings(event) {
    //     event.preventDefault();
    //     let competition = this.state.competition;
    //     // competition.duration = this.state.durationInput * 1000;
    //     competition.maxVol = parseFloat((this.state.maxVolInput).toString().replace(',', '.'));
    //     this.setState({
    //         competition: competition
    //     });
    // }

    setDuration = () => {
        this.props.dispatch(
            setDuration(this.state.durationInput * 1000)
        );
    };

    setMaxvol = () => {
        this.props.dispatch(
            setMaxvol(
                parseFloat((this.state.maxVolInput).toString().replace(',', '.'))
            )
        );
        this.props.dispatch(updateAllRatings());
    };

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }


    render() {
        return (
            <div className="container-fluid p-5">

                <header>
                    <h2>Welcome to Applaus-O-Meter administration</h2>
                    <p>To get started, add some competitors.</p>
                </header>


                <div id="settings">
                    <h3>Settings</h3>
                    <form
                        className="form-group"
                        onSubmit={e => {
                            e.preventDefault()
                        }}
                    >
                        <div className="row">
                            <div className="col-2">
                                <label
                                    htmlFor="durationInput">Duration in
                                    seconds<br/>(currently {this.props.duration / 1000} s)</label>
                            </div>
                            <div className="col-8">
                                <input type="text" className="form-control w-100"
                                       name="durationInput" value={this.state.durationInput}
                                       placeholder="duration"
                                       onChange={this.handleChange}/>
                            </div>
                            <div className="col-2">
                                <input type="button" className="form-control btn btn-success"
                                       value="Set!" onClick={this.setDuration}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <label
                                    htmlFor="maxVolInput">Max volume for rating, in range
                                    [0;1]<br/>(currently: {this.props.maxVol})</label>
                            </div>
                            <div className="col-8">
                                <input type="text" className="form-control w-100"
                                       name="maxVolInput" value={this.state.maxVolInput}
                                       onChange={this.handleChange}/>
                            </div>
                            <div className="col-2">
                                <input type="button" className="form-control btn btn-success"
                                       value="Set!" onClick={this.setMaxvol}/>
                            </div>
                        </div>
                    </form>
                </div>


                <div id="competitors" className="border border-secondary p-2 bg-primary rounded">
                    <h3>Competitors</h3>
                    <form
                        className="row form-group"
                        onSubmit={e => {
                            e.preventDefault()
                        }}
                    >
                        <div className="col-10">
                            <input type="text" className="form-control w-100"
                                   name="addCompetitorInput" value={this.state.addCompetitorInput}
                                   placeholder="Competitor name"
                                   onChange={this.handleChange}/>
                        </div>
                        <div className="col-2">
                            <input type="button" className="form-control btn btn-success"
                                   value="Add!" onClick={this.addCompetitor}/>
                        </div>
                    </form>

                    <div>
                        <CompetitionTable competition={this.state.competition}/>
                    </div>
                </div>


                <div id="calibration" className="my-4">
                    <h3>Calibration</h3>
                    <form
                        className="row form-group"
                        onSubmit={e => {
                            e.preventDefault()
                        }}
                    >
                        <div className="col-10">
                            <input type="text" className="form-control w-100"
                                   name="addCalibrationCompetitorInput"
                                   value={this.state.addCalibrationCompetitorInput}
                                   placeholder="Competitor name"
                                   onChange={this.handleChange}/>
                        </div>
                        <div className="col-2">
                            <input type="submit" className="form-control btn btn-success"
                                   value="Add!"/>
                        </div>
                    </form>
                    <div>
                        <CalibrationTable competition={this.state.competition}/>
                    </div>
                </div>

                <div>
                    {/*<CompetitionJsonExportBtn competition={this.state.competition}/>*/}
                    {/*<CompetitionJsonImportBtn competition={this.state.competition}/>*/}
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    duration: state.administration.duration,
    maxVol: state.administration.maxVol
});

export default connect(mapStateToProps)(Admin)
