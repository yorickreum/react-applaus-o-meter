import React, {Component} from "react";
import Fishmeter from "./Fishmeter";

class Frontend extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onStorage = this.onStorage.bind(this);
    }

    onStorage(data) {
        let s = JSON.parse( localStorage.getItem('state') );
        this.setState(
            state => s
        )
    }

    componentDidMount(){
        if (window.addEventListener) {
            window.addEventListener("storage", this.onStorage, true);
        } else {
            window.attachEvent("onstorage", this.onStorage);
        }
    }

    render() {
        return (
            <div>
                <p>
                    Yoyoyo {this.state.volume}
                </p>
                <div class="text-center">
                    <Fishmeter rotate={ this.state.volume * 180 }/>
                </div>
            </div>
        );

    }
}

export default Frontend