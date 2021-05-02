import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import logo from './camera_off.png';

class Camera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: logo
        };
        this.startStream = this.startStream.bind(this);
        this.stopVideo = this.stopVideo.bind(this);
        this.startVideo = this.startVideo.bind(this);
    }

    startVideo() {
        this.show = true
    }

    componentWillUnmount() {
        this.show = false;
        console.log("finished")
    }

    componentDidMount() {
       // this.interval = setInterval(() => this.startStream(), 30);
    }

    startStream() {
        if (this.show === false) {
            return
        }
        fetch("http://localhost:5000/scan/get_camera_stream")
            .then((response) => response.json())
            .then((jsonData) => {
                // jsonData is parsed json object received from url
                if (this.show === false) {
                    console.log("fetch although false!!!")
                    return
                }
                this.setState({
                    image: `data:image/png;base64,` + jsonData["image"].slice(2, jsonData["image"].length - 1)
                });
            })
            .catch((error) => {
                // handle your errors here
                console.error(error);
            });
    }

    stopVideo = () => {
        console.log("stop")
        if (this.interval !== undefined) {
            clearInterval(this.interval);
            this.interval = undefined;
        }
        this.setState({
            image: logo
        })
        this.show = false;
    };

    render() {
        return (
            <div>
                <Button type="button" variant="contained" color="primary" onClick={this.startVideo}>
                    Open Video
                </Button>
                <br/>
                <Button type="button" variant="contained" color="secondary" onClick={this.stopVideo}>
                    Stop Video
                </Button>
                <img src={this.state.image} alt={"Me"}/>
            </div>
        );
    }
}

export default Camera;