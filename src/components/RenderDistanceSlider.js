import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";


class RenderDistanceSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            distance: props.dis
        }
        this.marks = [
            {
                value: 0,
                label: '0',
            },
            {
                value: 3,
                label: '0.3',
            },
            {
                value: 5,
                label: '0.5',
            },
            {
                value: 8,
                label: '0.8',
            },
            {
                value: 10,
                label: '1',
            },
            {
                value: 15,
                label: '1.5',
            },
        ];
        this.handleChange = this.handleChange.bind(this);
        console.log(this.state)
    }

    handleChange(event, newValue) {
        console.log(newValue)
        this.setState({
            distance: newValue
        })
        this.props.onChange(newValue);
        this.sendDisToServer(newValue)
    }


    sendDisToServer(distance) {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title: 'React POST Request Example'})
        };
        let dis = distance.toString()
        fetch("http://localhost:5000//settings/render_distance/" + dis, requestOptions).then(response => response.json())
            .then((response) => {
                    console.log("the response", response)
                    if (response["render_distance"]) {
                        console.log("Success rendering distance")
                    } else {
                        throw new Error('Error: failed rendering distance');
                    }
                }
            ).catch((error) => {
            console.log(error)
        });
    }

    render() {
        return (
            <div align={'center'} style={{width: 450}}>
                <Typography id="continuous-slider" gutterBottom align={'middle'}>
                </Typography>
                <Grid container spacing={0.1} align={'middle'}>
                    <Grid item xs align={'middle'}>
                        <Slider
                            value={this.state.distance *10}
                            align={'middle'}
                            onChangeCommitted={this.handleChange}
                            aria-labelledby="continuous-slider"
                            max="15"
                            step="1"
                            marks={this.marks}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default RenderDistanceSlider;