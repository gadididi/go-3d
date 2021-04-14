import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import logo from './camera_off.png';

class Camera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: logo,
            show: false

        };
        //console.log(this.state);
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.startScan = this.startScan.bind(this);
        this.stopVideo = this.stopVideo.bind(this);
        this.startVideo = this.startVideo.bind(this);
    }

    startVideo() {
        this.setState({
            show: true
        });
        this.interval = setInterval(() => this.handleClick(), 30);
    }
    startScan(){
        console.log("click start scan")
        fetch("http://localhost:5000/scan").then((response) =>
            {
                console.log(response)
                if (response['start'] === true) {
                    console.log("start scanning")
                }
            }
        )
    }
    handleClick() {
        console.log(this.state.show)
        if (this.state.show === false) {
            return
        }
        fetch("http://localhost:5000/scan/get_camera_stream")
            .then((response) => response.json())
            .then((jsonData) => {
                // jsonData is parsed json object received from url
                if (this.state.show === false) {
                    return
                }
                this.setState({
                    image: `data:image/png;base64,` + jsonData["image"].slice(2, jsonData["image"].length - 1),
                    show: true,
                });
                //console.log(this.state);
            })
            .catch((error) => {
                // handle your errors here
                console.error(error);
            });
    }

    stopVideo = () => {
        //console.log("stop");
        if (this.interval !== undefined) {
            clearInterval(this.interval);
            this.interval = undefined;
        }
        this.setState({
            image: logo,
            show: false
        })

    };

    render() {
        return (
            <div>
                <Button type="button" variant="contained" color="secondary" onClick={this.startScan}>
                    Start Scan
                </Button>
                <Button type="button" variant="contained" color="primary" onClick={this.startVideo}>
                    Open Video
                </Button>
                <br/>
                <Button type="button" variant="contained" color="secondary" onClick={this.stopVideo}>
                    Stop Video
                </Button>
                <img src={this.state.image}  alt={"Me"}/>
            </div>
        );
    }
}

export default Camera;