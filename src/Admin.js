import React, {Component} from 'react';
import logo from './logo.svg';
import Volumemeter from './Volumemeter';
import Fishmeter from './Fishmeter.js';
import './Admin.css';
import './styles/index.css'


class Admin extends Component {
    constructor(props) {
        super(props);
        this.vm = new Volumemeter();
        this.state = {
            volume: this.vm.getVolume()
        };
        this.keyboardFunction = this.keyboardFunction.bind(this);

    }
    keyboardFunction(event){
        if(event.keyCode === 71) {
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

    componentDidMount(){
        document.addEventListener("keydown", this.keyboardFunction, false);
        this.interval = setInterval(() => this.tick(), 100);
    }
    componentWillUnmount(){
        document.removeEventListener("keydown", this.keyboardFunction, false);
    }
    componentDidUpdate(prevProps, prevState) {
        localStorage.state = JSON.stringify(this.state);
    }
    render() {
        return (
            <div className="Admin">
                <header className="Admin-header">
                    <img src={logo} className="Admin-logo" alt="logo"/>
                    <h1 className="Admin-title">Welcome to React</h1>
                </header>
                <p className="Admin-intro">
                    To get started, edit <code>src/Admin.js</code> and save to reload.
                    {this.state.record}
                </p>
                <Fishmeter rotate={ this.state.volume * 180 }/>
            </div>
        );
    }

    submit( event ) {
        // do something, or not, with the keydown event, maybe event.preventDefault()
        this.setState({
            record: false
        })
    }

}

export default Admin;