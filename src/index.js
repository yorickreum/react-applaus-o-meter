import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Admin from './View/Admin';
import registerServiceWorker from './registerServiceWorker';
import './View/styles/index.css'
import Frontend from "./View/Frontend";
import Heading from "./View/Heading";

function Areas(props) {
    return (
        <React.Fragment>
            <Heading/>
            <div class="container">
                <div className="row justify-content-center">
                    <div className="col-4">
                        <div className="card text-white text-center bg-warning">
                            <div className="card-body py-5">
                                <h2 className="card-title text-info pb-3">Administration</h2>
                                <div className="card-text">
                                    <p>
                                        <ul className="text-left">
                                            <li>Teilnehmner anlegen und verwalten</li>
                                            <li>Abstimmungen starten</li>
                                        </ul>
                                    </p>
                                    <a href="/admin" className="btn btn-info">Hier entlang &#8680;</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card text-white text-center bg-warning">
                            <div className="card-body py-5">
                                <h2 className="card-title text-info pb-3">Abstimmung</h2>
                                <div className="card-text">
                                    <p>
                                        Zum Beispiel in neuem Fenster öffnen und auf Beamer zeigen.
                                    </p>
                                    <a href="/view" className="btn btn-info">Hier entlang &#8680;</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact={true} path='/' render={() => (
                <div className="App">
                    <Areas/>
                </div>
            )}/>
            <Route exact={true} path='/admin' render={() => (
                <div className="admin">
                    <Admin/>
                </div>
            )}/>
            <Route exact={true} path='/view' render={() => (
                <div className="frontend">
                    <Frontend/>
                </div>
            )}/>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();
