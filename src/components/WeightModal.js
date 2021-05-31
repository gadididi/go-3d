import {Button, Form, Modal} from "react-bootstrap";
import {Component} from "react";


class WeightModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            weight: false,
            accept: false,
            weightNum: props.weight,
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleLetsGo = this.handleLetsGo.bind(this);
        this.handleAccept = this.handleAccept.bind(this);
        this.handleExit = this.handleExit.bind(this);

    }

    handleChangeWeight(e) {
        // console.log(e)
        this.props.onChange(e);
    }

    handleExit() {
        this.setState({
            show: false,
            accept: false,
            weightNum: 0
        })
    }

    handleAccept() {
        let prev = this.state.accept;
        this.setState({
            accept: !prev
        })

    }

    handleLetsGo(event) {
        event.preventDefault();
        const weight = this.element.value;
        if (this.state.accept) {
            //alert("start analysis your bmi ,wait")
            this.setState({
                show: false
            })
            // console.log(weight);
            this.handleChangeWeight(weight);
        }
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
                    <Modal.Header>
                        <Modal.Title>Please enter your weight</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form noValidate onSubmit={this.handleLetsGo}>
                            <Form.Group controlId="formBasicWeight">
                                <Form.Control
                                    type="number"
                                    placeholder="Enter Weight"
                                    defaultValue=""
                                    ref={el => this.element = el}
                                />
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
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleExit}>
                                    exit
                                </Button>
                                <Button variant={this.showButton()} onClick={this.handleLetsGo}>
                                   Show Results!
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        );
    }

    showButton() {
        if (this.state.accept) {
            return "primary";
        }
        return "secondary";
    }
}

export default WeightModal;