import { Modal} from "react-bootstrap";
import {Component} from "react";


class FailedProcessModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
        this.closeModal = this.closeModal.bind(this);
        console.log(this.state)
    }
    closeModal(){
        this.setState({
            show : false
        })
    }

    render() {
        return (
            <>
                <Modal
                    show={this.state.show}
                    // onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton onClick={this.closeModal}>
                        <Modal.Title >Failed to measure your body, please try again
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    </Modal.Body>
                </Modal>
            </>
        );
    }

}

export default FailedProcessModal;