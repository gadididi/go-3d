import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
class BMISlider extends Component{
    constructor(props) {
        super(props);
        this.state = {
            bmi: props.bmi
        };
        this.marks = [
            {
                value: 18,
                label: '18',
            },
            {
                value: 25,
                label: '25',
            },
            {
                value: 30,
                label: '30',
            },
        ];
    }
    render() {
        return (
            <div align={'center'} style={{width: 450}}>
                <Typography id="continuous-slider" gutterBottom align={'middle'}>
                </Typography>
                <Grid container spacing={0.1} align={'middle'}>
                    <Grid item xs align={'middle'}>
                        <Slider
                            value={this.state.bmi}
                            align={'middle'}
                            aria-labelledby="continuous-slider"
                            min="10"
                            max="35"
                            step="0"
                            marks={this.marks}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default BMISlider;