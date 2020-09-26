import React, { useState, useEffect, useRef } from 'react';
import { useDrop } from 'react-dnd';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { CLASSES } from './gloomhaven-constants.js';
import SkillCard from './SkillCard';
import { DraggableTypes } from './constants';

const useStyles = makeStyles({
    flexbox: {
        flexWrap: 'wrap'
    },
    dropbox: {
        flexWrap: 'wrap',
        border: 'solid',
        borderRadius: '5px',
        borderColor: 'black'
    }
});

const pickSkill = (build, skillName) => {
    if (build.some(element => element === skillName)) {
        return;
    }
    build.push(skillName);
}

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
    const prevLocation = useRef();
    useEffect(() => {
        // console.log('pathname', props.location.pathname, 'prevLocation', prevLocation);
        if (props.location.pathname !== prevLocation.current) {
            // console.log("Route changed", props.location.pathname);
            setBuild([]);
        }
        prevLocation.current = props.location.pathname;
    }, [props.location.pathname]);
    const [{isOver}, drop] = useDrop({
        accept: DraggableTypes.SkillCard,
        drop: (item, monitor) => pickSkill(build, item.id),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    });
    return(
        <div>
            <Typography variant="h2" gutterBottom>
                {clazz.name}
            </Typography>
            <Typography paragraph>
                Maximum hand size: {clazz.maximumHandSize}
            </Typography>
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
                        : Object.keys(skills)
                            .filter(skill => build.includes(skill))
                            .map(skill => (
                                <SkillCard key={skill} skill={skill} skills={skills} clazz={clazz} removeSkill={removeSkill} />
                            ))
                }
            </Box>
            <Box className={classes.flexbox} display="flex" flexDirection="row" justifyContent="center" p={1} m={1}>
                {
                    Object.keys(skills)
                        .filter(skill => !build.includes(skill))
                        .map(skill => (
                            <SkillCard key={skill} skill={skill} skills={skills} clazz={clazz} removeSkill={removeSkill} />
                        ))
                }
            </Box>
        </div>
    )
}

export default SkillBuilder;
