import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
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
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
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

    const [modalOpen, setModalOpen] = useState(false);
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
                        <Typography paragraph>
                            {`Lowest initiative: ${build.length === 0 ? 'N/A' : Math.min(...build.map(skill => skills[skill].initiative))}`}
                        </Typography>
                        <Typography paragraph>
                            {`Highest initiative: ${build.length === 0 ? 'N/A' : Math.max(...build.map(skill => skills[skill].initiative))}`}
                        </Typography>
                        <Typography paragraph>
                            {`Average initiative: ${build.length === 0 ? 'N/A' : Math.round(build.map(skill => skills[skill].initiative).reduce((s1, s2) => s1 + s2, 0) / build.length)}`}
                        </Typography>
                        <TableContainer component={Paper} className={build.length === 0 ? classes.hidden : 'mobile-hide'}>
                            <Table className={classes.table} aria-label="caption table">
                                <caption>Number of cards with given tag (equal tags on both top and bottom half count as a single card)</caption>
                                <TableHead>
                                    <TableRow>
                                        {sortedKeys.map(tag => (
                                            <TableCell key={tag}>{tag}</TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        {sortedKeys.map((tag, i) => (
                                            <TableCell key={`freq-${i}`}>{collectedTags[tag]}</TableCell>
                                        ))}
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

export default ClassDetails;
