import React, {Component} from "react";

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

            </div>
        )
    }
}

export default AboutScreen;