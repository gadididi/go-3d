import {Component} from "react";
import ReactSpeedometer from "react-d3-speedometer";

// bmi slider that shows the range of bmi
class BMISpeedBarSlider extends Component{
    constructor(props) {
        super(props);
        this.state = {
            bmi: props.bmi
        };
    }
    render() {
        return(
            <>
                <div>
                    <ReactSpeedometer
                        ringWidth={60}
                        needleHeightRatio={0.7}
                        currentValueText="BMI Level"
                        needleTransitionDuration={3333}
                        needleTransition="easeElastic"
                        value={this.state.bmi}
                        width={400}
                        height={400}
                        maxValue={35}
                        minValue={5}
                        needleColor="blue"
                        segments={9}
                        segmentColors={[
                            "#f8021a",
                            "#ff9f00",
                            "#f7ff00",
                            "#95ff50",
                            "#95ff50",
                            "#95ff50",
                            "#f7ff00",
                            "#ff9f00",
                            "#fd0000",
                        ]}
                    />
                </div>
            </>
        )
    }
}

export default BMISpeedBarSlider;