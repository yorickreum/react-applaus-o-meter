import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {PersistGate} from 'redux-persist/integration/react'
import {HashRouter, Link, Route, Switch} from 'react-router-dom';
import Admin from './screens/Admin';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css'
import View from "./screens/View";
import Heading from "./components/Heading";
import Footer from "./components/Footer"
import {Provider} from "react-redux";
import {persistor, store} from "./store";
import {Helmet} from "react-helmet";

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
        <PersistGate loading={null} persistor={persistor}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Applaus-O-Meter</title>
            </Helmet>
            <Heading/>
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Areas}/>
                    <Route path="/admin" component={Admin}/>
                    <Route path="/view" component={View}/>
                </Switch>
            </HashRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
