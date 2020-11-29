import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { union, frequencyMap } from '../constants';
import { Tag } from '../game/Skill';

const useStyles = makeStyles(theme => ({
    slider: {
        maxWidth: '250px'
    },
    hidden: {
        display: 'none'
    },
    table: {
        maxWidth: 'vmax'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    tag: {
        '&': {
            margin: '5px',
            marginLeft: 0,
            marginRight: '10px',
        },
        '&:first-child': {
            marginLeft: 0
        },
        '&:last-child': {
            marginRight: 0
        }
    },
    bold: {
        fontWeight: 'bold'
    },
    classIcon: {
        width: '1em',
        height: '1em',
        marginRight: '0.5em',
        verticalAlign: 'text-top'
    }
}));

const sliderLabels = [...Array(9).keys()]
    .map(i => i + 1)
    .map(i => ({'value': i, 'label': i}))

const collectTags = (build, skills) => build
    .map(skill => skills[skill])
    .flatMap(skill => union(skill.top.tags, skill.bottom.tags))
    .reduce(frequencyMap, {});

function ClassDetails(props) {
    const classes = useStyles();
    const clazz = props.clazz;
    const build = props.build;
    const skills = props.skills;
    const collectedTags = collectTags(build, skills);
    const sortedKeys = Object.keys(collectedTags).sort((a, b) => Object.values(Tag).indexOf(a) - Object.values(Tag).indexOf(b));
    const [level, setLevel] = React.useState(1);
    const onLevelChange = (e, value) => {
        setLevel(value);
        props.levelChanged(e, value);
    }

    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div>
            <Typography variant="h2">
                <img src={`${process.env.PUBLIC_URL}/game/${clazz.name.toLowerCase()}/icon.svg`} alt={`${clazz.name} icon`} className={classes.classIcon}/>
                {clazz.name}
            </Typography>
            <Typography paragraph>
                Maximum hand size: {clazz.maximumHandSize}
            </Typography>
            <Typography paragraph>
                Hitpoints: {clazz.hitpoints(level)}
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
                onChange={onLevelChange}
            />
            <div>
                <Button variant="contained" color="primary" onClick={() => setModalOpen(true)}>Build statistics</Button>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={modalOpen}>
                    <div className={classes.paper}>
                        <Typography variant="h4" gutterBottom>
                            Build statistics:
                        </Typography>
                        <Box>
                            <span className={classes.bold}>Lowest initiative: </span>
                            <span>{build.length === 0 ? 'N/A' : Math.min(...build.map(skill => skills[skill].initiative))}</span>
                        </Box>
                        <Box>
                            <span className={classes.bold}>Highest initiative: </span>
                            <span>{build.length === 0 ? 'N/A' : Math.max(...build.map(skill => skills[skill].initiative))}</span>
                        </Box>
                        <Box>
                            <span className={classes.bold}>Average initiative: </span>
                            <span>{build.length === 0 ? 'N/A' : Math.round(build.map(skill => skills[skill].initiative).reduce((s1, s2) => s1 + s2, 0) / build.length)}</span>
                        </Box>
                        <Divider className={sortedKeys.length === 0 ? 'hidden' : ''}/>
                        <Box 
                            display="flex"
                            flexDirection="row"
                            flexWrap="wrap"
                            >
                            {sortedKeys.map(tag => (
                                <div key={tag} className={classes.tag}>
                                    <Box fontWeight="fontWeightBold">{tag}</Box>
                                    <Box>{collectedTags[tag]}</Box>
                                </div>
                            ))}
                        </Box>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

export default ClassDetails;
