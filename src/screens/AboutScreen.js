import React, {Component} from "react";
import bad_example from '../images/Example_bad.png';
import good_example from '../images/Example_good.png';
import {Col, Container, Row} from "react-bootstrap";

// this class in charge of explanation and information
class AboutScreen extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <br/>
                <h5 align={'left'}>FAQ's:</h5>
                <div style={{backgroundColor : 'lightgray', padding:'5px', border:'2px solid gray'}}>
                    <h6 align={'left'}>Question: the results aren't accurate, what should I do to increase the accuracy?</h6>
                    <h6 align={'left'}>Answer: Make sure that the subject in yhe frame entirely, and the red dot is on the subject's mass center</h6>
                </div>
                <br/>
                <div style={{backgroundColor : 'lightgray', padding:'5px', border:'2px solid gray'}}>
                    <h6 align={'left'}>Question: The program won't recognize the camera, how should I fix it?</h6>
                    <h6 align={'left'}>Answer: Make sure that the camera is connected via USB 3.0 and you have the SDK installed.
                        For the SDK installation, please visit<a href="https://www.linkedin.com/in/gadi-didi-216537188/" target="_blank" rel="noopener noreferrer" className="author"> RealSense Developer's center</a></h6>
                </div>
                <br/>
                <div style={{backgroundColor : 'lightgray', padding:'5px', border:'2px solid gray'}}>
                    <h6 align={'left'}>Question: How to turn the camera on?</h6>
                    <h6 align={'left'}>Answer: There's no need to turn the camera on as long as it is properly connected.
                    The program will turn the camera on when you start a scan and will turn it off when you're finished.</h6>
                </div>
                <br/>
                <div style={{backgroundColor : 'lightgray', padding:'5px', border:'2px solid gray'}}>
                    <h6 align={'left'}>Question: Can I scan female subjects?</h6>
                    <h6 align={'left'}>Answer: The product is currently supporting only male subjects, but in most cases it will also work for female subjects, so you can try.</h6>
                </div>
                <br/>
                <Container fluid style={{backgroundColor : 'lightgray', padding:'5px', border:'2px solid gray'}}>
                    <Row className='row'>
                        <Col className='col' xs={12}>
                            <h6 align={'left'}>Question: What counts as a good picture?</h6>
                            <h6 align={'left'}>Answer: The subject should fit entirely in the screen, the Red dot should be pointing at the subject, and you should see the subject in the same color (blue).
                                If there's some islands of red or pink color inside the subject's outlines, try to tell the subject to take a step forward.</h6>
                            <h6 align={'left'}>Example for a bad picture: </h6>
                            <br/>
                            <img align={'left'} src={bad_example} height='350' width='500' alt='' style={{border: "5px solid black"}}/>
                            <br/>
                        </Col>
                        <Col className='col' xs={12}>
                            <br/>
                            <h6 align={'left'}>Example for a good picture:</h6>
                            <img align={'left'} src={good_example} height='350' width='500' alt='' style={{border: "5px solid black"}}/>
                        </Col>
                    </Row>
                </Container>
                <br/>
                <div style={{backgroundColor : 'lightgray', padding:'5px', border:'2px solid gray'}}>
                    <h6 align={'left'}>Question: How can I improve the picture's quality?</h6>
                    <h6 align={'left'}>Answer: In the settings section, you can choose the rendering distance, increasing it will prevent
                        pink island inside the subject's outline, but increasing too much will cause the outline to be inaccurate.</h6>
                </div>
                <br/>
            </div>
        )
    }
}

export default AboutScreen;