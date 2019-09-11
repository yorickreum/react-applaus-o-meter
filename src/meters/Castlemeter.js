import React, {Component} from "react";
import {SvgLoader, SvgProxy} from 'react-svgmt';
import castle from '../assets/castle-gradient.svg';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import VolumemeterUtils from "../utils/volumemeterUtils";
import {getRatingFromVolume} from "../utils/competitionUtils";
import {connect} from "react-redux";


type State = {
    interval: number,
    rating: number,
};

class CastlemeterComponent extends Component<{}, State> {

    constructor(props: P, context: any) {
        super(props, context);
        this.volumemeter = new VolumemeterUtils();
        this.state = {
            interval: null,
            rating: 0,
        };
        this.checkRating();
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
        this.checkRating();
    }

    checkRating = () => {
        const isActive = this.props.isActive;
        if (!isActive) {
            if (this.state.interval === null) {
                const interval = setInterval(
                    () => {
                        let volume = this.volumemeter.getVolume();
                        this.setState({
                            rating: getRatingFromVolume(volume),
                        });
                    },
                    50 // ms, normally 10
                );
                this.setState({
                    interval,
                });
            }
        } else {
            if (this.state.interval) {
                clearInterval(this.state.interval);
            }
            if (this.state.interval !== null && this.props.rating !== this.state.rating) {
                this.setState({
                    interval: null,
                    rating: this.props.rating
                });
            }
        }
    };

    render() {
        const isActive = this.props.isActive;
        let rotation = -parseFloat(this.props.rating) * 90 - 45;

        const shift = this.state.rating > 0 ? (-this.state.rating) * 786 : 0;

        return (
            <div className="d-flex flex-column-reverse p-4">
                {/*https://www.npmjs.com/package/react-confetti*/}
                <Confetti
                    // run={isActive}
                    numberOfPieces={isActive ? undefined : 5}
                    width={this.props.width}
                    height={this.props.height}
                    gravity={isActive ? this.state.rating : 0.01}
                    wind={isActive ? this.state.rating * 0.5 : 0}
                    recycle={true}
                    canvasRef={undefined}
                />
                <SvgLoader path={castle} height={400} width={2000}>
                    {/*<SvgProxy selector="#rotmeter"*/}
                    {/*          transform={"rotate(" + rotation + " 565.9 124)"}/>*/}
                    <SvgProxy
                        selector="#clip-rect"
                        transform={"translate(0 " + shift + ")"}
                    />
                </SvgLoader>
            </div>
        );
    }
}

function Castlemeter(props) {
    const {width, height} = useWindowSize();
    return <CastlemeterComponent width={width} height={height} {...props} />;
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Castlemeter);
