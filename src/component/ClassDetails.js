import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    slider: {
        maxWidth: '250px'
    }
});

const sliderLabels = [...Array(9).keys()]
    .map(i => i + 1)
    .map(i => ({'value': i, 'label': i}))

function ClassDetails(props) {
    const classes = useStyles();
    const clazz = props.clazz;
    const build = props.build;
    const skills = props.skills;
    return (
        <div>
            <Typography variant="h2" gutterBottom>
                {clazz.name}
            </Typography>
            <Typography paragraph>
                Maximum hand size: {clazz.maximumHandSize}
            </Typography>
            <Typography id="level-label" gutterBottom>
                Level:
            </Typography>
            <Slider
                className={classes.slider}
                defaultValue={1}
                min={1}
                max={9}
                aria-labelledby="level-label"
                valueLabelDisplay="auto"
                marks={sliderLabels}
                onChange={props.levelChanged}
            />
            <Typography variant="h4" gutterBottom>
                Build statistics:
            </Typography>
            <Typography paragraph>
                {`Lowest initiative: ${build.length === 0 ? 'N/A' : Math.min(...build.map(skill => skills[skill].initiative))}`}
            </Typography>
            <Typography paragraph>
                {`Highest initiative: ${build.length === 0 ? 'N/A' : Math.max(...build.map(skill => skills[skill].initiative))}`}
            </Typography>
            <Typography paragraph>
                {`Average initiative: ${build.length === 0 ? 'N/A' : Math.round(build.map(skill => skills[skill].initiative).reduce((s1, s2) => s1 + s2, 0) / build.length)}`}
            </Typography>
        </div>
    );
}

export default ClassDetails;
