import React, {Component} from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import l515 from '../lidar515L.jfif';
import bmi from '../bmi.jpg';
import human from '../human.jpg';

class MainScreen extends Component {
    constructor(props) {
        super(props);
    }

    onChange(value) {
        this.setState({ value });
    }

    render() {
        return (
            <div className="container" style={{backgroundColor:  'white', width: '70%'}}>
                <div className="row">
                    <div className="col">
                        <MyCarousel/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainScreen;

class MyCarousel extends React.Component {
    constructor() {
        super()
        this.state = { value: 0 };
        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        this.setState({ value });
    }

    render() {
        return (
            <div>
                <Carousel
                    value={this.state.value}
                    onChange={this.onChange}
                    slides={[
                        (<div>
                            <br/>
                            <img src={human} height='300' width='300' style={{border: "2px solid gray"}}/>
                            <br/>
                            <h3>Measure your body parts</h3>
                            <div>From shoulders to tights, GO-3D will measure the subject's body parts in order to
                            help keep track of their body. These measurements are also useful for online retail.</div>
                            <br/>
                            <div> </div>
                        </div>),
                        (<div>
                            <br/>
                            <img src={l515} height='300' width='300' style={{border: "2px solid gray"}}/>
                            <br/>
                            <h3>RealSense L515 camera</h3>
                            <div>In order to get the perfect measurements, The scan will be done by a L515 Lidar camera.</div>
                            This is a state-of-the-art technology, which enables us to take clear 3D images.
                            <br/>
                            <div> </div>
                        </div>),
                        (<div>
                            <br/>
                            <img src={bmi} height='300' width='300' style={{border: "2px solid gray"}}/>
                            <br/>
                            <h3>Measure your BMI score</h3>
                            <div>Body mass index (BMI) is a value derived from the mass (weight) and height of a person.
                                The BMI is defined as the body mass divided by the square of the body height,
                                and is expressed in units of kg/m2, resulting from mass in kilograms and height in metres.</div>
                            <br/>
                            <div> </div>
                        </div>),
                    ]}
                    plugins={[
                        'arrows',
                    ]}
                />
                <div align={'left'}>
                    <br/>
                    <br/>
                    <h3>Getting started:</h3>
                    <text>1. Make sure that the RealSense L515 camera is properly connected by USB 3.0.</text><br/>
                    <text>2. Click on the 'Start scan' button in order to scan the subject </text><br/>
                    <text>3. Click on the 'Start video' and guide the subject to a filming position. </text><br/>
                    <text>4. Make sure the red dot is on the center of the subject's body </text><br/>
                    <text>5. When you're ready, take the frame and start the body measurements analysis </text><br/>
                </div>
            </div>
        );
    }
}