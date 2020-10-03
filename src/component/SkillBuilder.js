import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import { CLASSES } from '../gloomhaven-constants.js';
import SkillCard from './SkillCard';
import { DraggableTypes } from '../constants';

const useStyles = makeStyles({
    flexbox: {
        flexWrap: 'wrap'
    },
    dropbox: {
        flexWrap: 'wrap',
        border: 'solid',
        borderRadius: '5px',
        borderColor: 'black'
    },
    scroller: {
        position: 'fixed',
        width: '100%',
        height: '20px',
        top: '5em'
    },
    slider: {
        maxWidth: '250px'
    }
});

const pickSkill = (build, skillName, clazz) => {
    if (build.some(element => element === skillName)) {
        return;
    }
    if (build.length >= clazz.maximumHandSize) {
        return;
    }
    build.push(skillName);
}

const scrollUp = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const sliderLabels = [...Array(9).keys()]
    .map(i => i + 1)
    .map(i => ({'value': i, 'label': i}))

function SkillBuilder(props) {
    const classes = useStyles();
    const clazz = CLASSES[props.match.params.selectedClass];
    const skills = clazz.skills;
    const removeSkill = (skillName) => {
        const index = build.indexOf(skillName);
        if (index > -1) {
            setBuild(build.filter(skill => skill !== skillName));
        }
    }
    const [build, setBuild] = useState([]);
    const [level, setLevel] = useState(1);
    const [{isOver}, drop] = useDrop({
        accept: DraggableTypes.SkillCard,
        drop: (item, monitor) => pickSkill(build, item.id, clazz),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    });
    // hack to scroll up while dragging
    const [{isOverScroller}, scroller] = useDrop({
        accept: DraggableTypes.SkillCard,
        hover: (item, monitor) => {
            if (isOverScroller) {
                return;
            }
            scrollUp();
        },
        collect: monitor => ({
            isOverScroller: !!monitor.isOver()
        })
    });
    const levelChanged = (e, value) => {
        setLevel(value);
        setBuild(build.filter(skill => skills[skill].level <= value));
    }
    return(
        <div>
            <div className={classes.scroller} ref={scroller} />
            <Typography variant="h2" gutterBottom>
                {clazz.name}
            </Typography>
            <div>
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
                    onChange={levelChanged}
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
            
            <Box 
                display="flex"
                flexDirection="row" 
                className={classes.dropbox}
                bgcolor={isOver ? 'darkgrey' : 'background.paper'} 
                justifyContent="center" 
                p={1} 
                m={1} 
                ref={drop}>
                {
                    build.length === 0 
                        ? 'Drag and drop your skills here' 
                        : Object.values(skills)
                            .filter(skill => skill.level <= level)
                            .filter(skill => build.includes(skill.name))
                            .map(skill => (
                                <SkillCard key={skill.name} skill={skill.name} skills={skills} clazz={clazz} removeSkill={removeSkill} />
                            ))
                }
            </Box>
            <Box 
                className={classes.flexbox} 
                display="flex" 
                flexDirection="row" 
                justifyContent="center" 
                p={1} 
                m={1}>
                {
                    Object.values(skills)
                        .filter(skill => skill.level <= level)
                        .filter(skill => !build.includes(skill.name))
                        .map(skill => (
                            <SkillCard key={skill.name} skill={skill.name} skills={skills} clazz={clazz} removeSkill={removeSkill} />
                        ))
                }
            </Box>
        </div>
    )
}

export default SkillBuilder;
