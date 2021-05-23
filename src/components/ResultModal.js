import {Button, Form, Modal} from "react-bootstrap";
import {Component} from "react";


class ResultModal extends Component {
    constructor(props) {
        super(props);
        const info = {
            "abdomen": 0.3674381518864113,
            "bmi_score": 5.616211635672553e-7,
            "body_height": 10336.033130589745,
            "left_shoulder_to_elbow": 0.24673010619453398,
            "left_thigh": 0.35054004107588704,
            "right_shoulder_to_elbow": 10103.854130038733,
            "right_thigh": 0.3881665734004151,
            "shoulders": 10103.890170835035,
            "weight": 60
        }
        this.state = {
            info: info,
            weight: props.weight,
        }
        console.log(this.state)
    }
    handleClose(){

    }
    handleShow() {
        this.setState({
            show: true,
            accept: false
        })
    }

    render() {
        return (
            <>
                <Modal
                    show={true}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header>
                        <Modal.Title >Your size
                            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>
                            BMI: {this.state.info["bmi_score"]}
                        </h5>
                        <h6>
                            height: {this.state.info["body_height"]}
                        </h6>
                        <h6>
                            left_shoulder_to_elbow: {this.state.info["left_shoulder_to_elbow"]}
                        </h6>
                        <h6>
                            right_shoulder_to_elbow: {this.state.info["right_shoulder_to_elbow"]}
                        </h6>
                        <h6>
                            left_thigh: {this.state.info["left_thigh"]}
                        </h6>
                        <h6>
                            right_thigh: {this.state.info["right_thigh"]}
                        </h6>
                        <h6>
                            shoulders: {this.state.info["shoulders"]}
                        </h6>
                    </Modal.Body>
                </Modal>
            </>
        );
    }

}

export default ResultModal;