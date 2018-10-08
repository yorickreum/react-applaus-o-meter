import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Admin from './Admin';
import registerServiceWorker from './registerServiceWorker';
import Fishmeter from "./Fishmeter";
import Frontend from "./Frontend";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact={true} path='/admin' render={() => (
                <div className="admin">
                    <Admin />
                </div>
            )}/>
            <Route exact={true} path='/view' render={() => (
                <div className="App">
                    <Frontend />
                </div>
            )}/>
            {/*<Route exact={true} path='/signup' render={() => (*/}
                {/*<div className="App">*/}
                    {/*<SignUp />*/}
                {/*</div>*/}
            {/*)}/>*/}
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();
