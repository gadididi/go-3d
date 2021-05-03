import React, {Component} from "react";

class Camera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null
        };
        this.interval = null;
        this.stream = false;
    }


    componentWillUnmount() {
        clearInterval(this.interval);
        this.interval =null;
        this.stream = false;
        console.log("finished")
    }

    componentDidMount() {
        this.stream = true;
        this.interval = setInterval(() => this.startStream(), 30);
    }

    startStream() {
        if (this.stream === true){
            fetch("http://localhost:5000/scan/get_camera_stream")
                .then((response) => response.json())
                .then((jsonData) => {
                    // jsonData is parsed json object received from url

                    this.setState({
                        image: `data:image/png;base64,` + jsonData["image"].slice(2, jsonData["image"].length - 1)
                    });
                })
                .catch((error) => {
                    // handle your errors here
                    console.error(error);
                });
        }
    }


    render() {
        return (
            <div>
                <img src={this.state.image} alt={"Me"}/>
            </div>
        );
    }
}

export default Camera;