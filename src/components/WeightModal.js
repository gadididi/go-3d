import {Button, Form, Modal} from "react-bootstrap";
import {Component} from "react";


class WeightModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            weight: false,
            accept: false
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleLetsGo = this.handleLetsGo.bind(this);
        this.handleAccept = this.handleAccept.bind(this);
        this.handleExit = this.handleExit.bind(this);
        this.checkWeight = this.checkWeight.bind(this);

    }

    checkWeight() {
        console.log("hhhh")
    }

    handleExit() {
        this.setState({
            show: false,
            accept: false,
            weight: false,
            weightNum: 0
        })
    }

    handleAccept() {
        let prev = this.state.accept;
        this.setState({
            accept: !prev
        })

    }

    handleLetsGo() {
        if (this.state.weight && this.state.accept) {
            alert("start analysis your bmi ,wait")
            this.setState({
                show: false
            })
        }
    }

    handleShow() {
        this.setState({
            show: true
        })
    }

    render() {
        return (
            <>
                <Button variant="primary" onClick={this.handleShow}>
                    <h2>
                        Your weight
                    </h2>
                </Button>

                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Please enter your weight</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onInput={() => this.checkWeight()} >
                            <Form.Group controlId="formBasicWeight">
                                <Form.Label>Weight</Form.Label>
                                <Form.Control type="text" pattern="[0-9]*" placeholder="Enter Weight"
                                              value={this.state.weightNum}/>
                                <Form.Text className="text-muted">
                                    We'll never share your weight with anyone else :)
                                </Form.Text>
                            </Form.Group>
                            <h6>
                                We will not share your personal details.
                                <br/>
                                I agree that this application save my pictures for analysis, statistics
                                and can use them any time.
                            </h6>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="switch" label="accept the condition" onClick={this.handleAccept}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleExit}>
                            exit
                        </Button>
                        <Button variant="primary" onClick={this.handleLetsGo}>
                            Let's Go!
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default WeightModal;