import {Button, Modal} from "react-bootstrap";
import {Component} from "react";
import BMISlider from "./BMISlider";
import BMISpeedBarSlider from "./BMISpeedBarSlider";

class ResultModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            info: props.info,
            weight: props.weight,
            bmi: props.bmi,
            fromHis : props.fromHistory

        }
        this.showHis = true
        this.typeWieght = {
            'lean': 1,
            'thin': 2,
            'health': 3,
            'fat': 4,
            'obese': 5
        }
        this.kindOfPerson = null;
        this.handleExit = this.handleExit.bind(this);
        this.checkType = this.checkType.bind(this);
    }

    handleChangeExit(e) {
        this.props.onExit(e);
    }
    checkType() {
        switch (this.state.type) {
            case this.typeWieght['lean']:
                this.kindOfPerson = "blue"
                break;
            case this.typeWieght['thin']:
                this.kindOfPerson = "lightblue"
                break;
            case this.typeWieght['health']:
                this.kindOfPerson = "green"
                break;
            case this.typeWieght['fat']:
                this.kindOfPerson = "orange"
                break;
            case this.typeWieght['obese']:
                this.kindOfPerson = "red"
                break;
            default:
                throw "unknown type Wight"
        }
    }

    //close the result modal
    handleExit() {
        console.log("click finish modal")
        this.setState({
            show: false,

        })
        this.handleChangeExit(true)
    }

    // ask for bmi explanation for my results..
    componentDidMount() {
        fetch("http://localhost:5000/scan/get_bmi_explanation/" + this.state.bmi.toString())
            .then(response => response.json())
            .then((response) => {
                    console.log("the response", response)
                    if (response['bmi_explanation'] === false) {
                        throw new Error('Error: bmi_explanation response was not ok!');
                    } else {
                        console.log("bmi_explanation success");
                        this.setState({
                            message: response['explanation'],
                            type: response['type'],
                        })
                        this.checkType(response['type'])
                        this.setState({
                            message: response['explanation'],
                            type: response['type'],
                        })
                        console.log(this.kindOfPerson)
                    }
                }
            ).catch((error) => {
            console.log(error)
        });
    }

    handleShow() {
        this.setState({
            show: true,
            accept: false
        })
    }
    // showOrNot(){
    //     console.log("shoehis", this.showHis)
    //     if(this.state.fromHis){
    //         this.showHis = !this.showHis
    //         console.log(this.showHis)
    //         let res = this.showHis
    //         return !res
    //     }else {
    //         return this.state.show;
    //     }
    // }
    render() {
        return (
            <>
                <Modal
                    visible style={{zIndex: 9999}}
                    show={this.state.show}
                    // onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header>
                        <Modal.Title>Your sizes:
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className={'table'}
                             style={{backgroundColor: 'lightgray', padding: '5px', border: '2px solid gray'}}>
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
                        <BMISpeedBarSlider bmi={this.state.bmi}/>
                        <h6 style={{color: this.kindOfPerson}}>
                            {this.state.message}
                        </h6>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-warning" onClick={this.handleExit}>
                            Finish!
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default ResultModal;