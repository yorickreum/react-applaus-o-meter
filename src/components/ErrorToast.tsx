import React, {Component} from 'react';
import Toast from "react-bootstrap/Toast";
import {connect} from "react-redux";
import {dismissError} from "../actions";


class ErrorToast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
        }
    }

    setShow = (show: boolean)  => {
      this.setState({show});
    };

    dismiss = () => {
        this.props.dispatch(dismissError(this.props.errorKey));
        this.setShow(false);
    };

    render() {
        const date = this.props.time && new Date(this.props.time);
        return (
            <Toast onClose={() => this.dismiss()} show={this.state.show} autohide={false} className={"bg-danger"}>
                <Toast.Header>
                    <strong className="mr-auto">Error</strong>
                    <small>
                        {
                            date &&
                            date.toLocaleDateString('de-DE') + " " + date.toLocaleTimeString('de-DE')
                        }
                    </small>
                </Toast.Header>
                <Toast.Body>{this.props.text && this.props.text}</Toast.Body>
            </Toast>
        );
    }
}

export default connect()(ErrorToast)
