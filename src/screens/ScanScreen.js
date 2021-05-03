import React, {Component} from "react";
import Camera from "../Camera";
import {Container, Row, Col, Card, Form, Button, Nav} from "react-bootstrap";
import logo from '../images/camera_off.png';

class ScanScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openCamera: false
        }
        this.openOrCloseCamera = this.openOrCloseCamera.bind(this);

    }

    openOrCloseCamera() {
        let prev = this.state.openCamera;
        this.setState({
            openCamera: !prev
        })
    }

    componentDidMount() {
        fetch("http://localhost:5000/scan")
            .then(response => response.json())
            .then((response) => {
                    console.log("the response", response)
                    if (response['connected'] === false) {
                        throw new Error('Network response was not ok');
                    } else {
                        console.log("connected success");
                    }
                }
            ).catch((error) => {
            console.log(error)
        });
    }

    componentWillUnmount() {
        this.setState(
            {openCamera: false}
        )
        fetch("http://localhost:5000/scan/cancel_scan")
            .then(response => response.json())
            .then((response) => {
                    console.log("the response", response)
                    if (response['cancel_scan'] === false) {
                        throw new Error('Network response was not ok');
                    } else {
                        console.log("disconnected success");
                    }
                }
            ).catch((error) => {
            console.log(error)
        });
    }

    cameraIsOpen() {
        if (this.state.openCamera) {
            return <Camera/>
        }
        return <img src={logo} alt={"Me"}/>
    }
    takePic(){
        fetch("http://localhost:5000/scan/take_snapshot")
            .then(response => response.json())
            .then((response) => {
                    console.log("the response", response)
                    if (response['snapshot'] === false) {
                        throw new Error('Failed to take a Picture');
                    } else {
                        console.log("take a Picture");
                        let img = `data:image/png;base64,` + response["image"].slice(2, response["image"].length - 1);
                    }
                }
            ).catch((error) => {
            console.log(error)
        });
    }
    renderOpenCloseButton() {
        if (this.state.openCamera === false) {
            return <button type="button"
                           className={"btn btn-success"}
                           onClick={this.openOrCloseCamera}>
                <h1> Open Video</h1>
            </button>
        } else {
            return (
                <>
                    <button type="button"
                            className={"btn btn-danger"}
                            onClick={this.openOrCloseCamera}>
                        <h2> Close Video</h2>
                    </button>
                    <button type="button" className="btn btn-info" onClick={this.takePic}>
                        <h2> Take a Pic</h2>
                    </button>
                </>
            )

        }
    }

    render() {
        return (
            <Container fluid>
                <Row >
                    {this.cameraIsOpen()}
                </Row>
                <Row xs={2}>
                    {this.renderOpenCloseButton()}
                </Row>

            </Container>
        )
    }
}

export default ScanScreen;

