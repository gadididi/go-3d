import React, {Component} from "react";
import Camera from "../Camera";
import {Container, Row, Col, Card, Form, Button, Nav} from "react-bootstrap";

class ScanScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openCamera: false
        }
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

    render() {
        return (
            <Container fluid>
                <Col xs={2}>
                    <button type="button" class="btn btn-success">
                        <h1> Open Video</h1>
                    </button>
                </Col>
                <Col xs={10} id="page-content-wrapper">
                    <Camera/>
                </Col>

            </Container>
        )
    }
}

export default ScanScreen;