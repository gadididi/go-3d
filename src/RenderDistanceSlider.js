import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";


const useStyles = makeStyles({
    root: {
        width: 200
    }
});

export default function RenderDistanceSlider() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0.1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const marks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 5,
            label: '0.5',
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

    return (
        <div className={classes.root} align={'center'}>
            <Typography id="continuous-slider" gutterBottom align={'middle'}>
            </Typography>
            <Grid container spacing={0.1} align={'middle'}>
                <Grid item xs align={'middle'}>
                    <Slider
                        value={value}
                        align={'middle'}
                        onChange={handleChange}
                        aria-labelledby="continuous-slider"
                        max="15"
                        step="1"
                        marks={marks}
                    />
                </Grid>
            </Grid>
        </div>
    );
}