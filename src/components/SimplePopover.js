import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import {TextField} from "@material-ui/core";
// import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
}));

export default function SimplePopover(props) {
    const weight = props.weight_;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>

            <button type="button"  className={"btn btn-warning"} aria-describedby={id}  onClick={handleClick}>
               <h2>
                   Enter your weight
               </h2>
            </button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            >
                <Typography className={classes.typography}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Weight" variant="outlined" />
                        <button className="btn-primary btn-sm" onChange={this._handleTextFieldChange}>
                            submit
                        </button>
                    </form>
                </Typography>
            </Popover>
        </>
    );
}
