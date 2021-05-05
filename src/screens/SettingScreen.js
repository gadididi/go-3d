import React, {Component} from "react";
import RenderDistanceSlider from "../components/RenderDistanceSlider";

class SettingScreen extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <h3 align={'left'}>Render Distance:</h3>
                <div style={{backgroundColor : 'lightgray', padding:'5px', border:'2px solid gray'}}>
                    <h6 align={'left'}>Render distance determines the distance the camera will be able to capture behind the subject.
                        As higher distance may improve the scan quality, if it's too high, it might actually decrease the quality of the scan
                        by breaking the subjects outline and shape. Thus, the recommended value is between 0.3 to 0.8</h6>
                    <RenderDistanceSlider/>
                </div>
            </div>

        )
    }
}

export default SettingScreen;