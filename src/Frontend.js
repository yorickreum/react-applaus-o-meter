import React, {Component} from "react";

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
            window.addEventListener("storage", this.onStorage, false);
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
            </div>
        );

    }
}

export default Frontend