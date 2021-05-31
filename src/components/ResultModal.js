import {Modal} from "react-bootstrap";
import {Component} from "react";
import BMISlider from "./BMISlider";
class ResultModal extends Component {
    constructor(props) {
        super(props);
        // const info = {
        //     "abdomen": 0.3,
        //     "bmi_score": 15.6,
        //     "body_height": 10336.0,
        //     "left_shoulder_to_elbow": 0.2,
        //     "left_thigh": 0.3,
        //     "right_shoulder_to_elbow": 10103.8,
        //     "right_thigh": 0.3,
        //     "shoulders": 10103.8,
        //     "weight": 60
        // }
        this.state = {
            info: props.info,
            weight: props.weight,
            bmi: props.bmi
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
                        <div className={'table'} style={{backgroundColor : 'lightgray', padding:'5px', border:'2px solid gray'}}>
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
                        </div>
                        <BMISlider bmi={this.state.bmi}/>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}
export default ResultModal;