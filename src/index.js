import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import Admin from './View/Admin';
import registerServiceWorker from './registerServiceWorker';
import './View/styles/index.css'
import Frontend from "./View/Frontend";
import Heading from "./View/Heading";
import Footer from "./View/Footer"
import {Provider} from "react-redux";
import store from "./store";

class Areas extends Component {

    componentDidMount() {
        document.title = "Applaus-O-Meter";
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <div className="card h-100 text-white text-center bg-warning">
                                <div className="card-body py-5">
                                    <h2 className="card-title text-primary pb-3">Administration</h2>
                                    <div className="card-text">
                                        <ul className="text-left">
                                            <li>Teilnehmner anlegen und verwalten</li>
                                            <li>Abstimmungen starten</li>
                                        </ul>
                                        <Link to="/admin" className="btn btn-primary">Hier entlang &#8680;</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card h-100 text-white text-center bg-warning">
                                <div className="card-body py-5">
                                    <h2 className="card-title text-primary pb-3">Abstimmung</h2>
                                    <div className="card-text">
                                        <p>
                                            Zum Beispiel in neuem Fenster öffnen und auf Beamer zeigen.
                                        </p>
                                        <Link to="/view" className="btn btn-primary">Hier entlang &#8680;</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
    <Heading />
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Areas}/>
                <Route path="/admin" component={Admin}/>
                <Route path="/view" component={Frontend}/>
            </Switch>
        </HashRouter>
        <Footer />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
