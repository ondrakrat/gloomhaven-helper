import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { CLASSES } from '../gloomhaven-constants.js';
import SkillCard from './SkillCard';
import { DraggableTypes } from '../constants';
import ClassDetails from './ClassDetails';

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
            <ClassDetails 
                    clazz={clazz} 
                    build={build}
                    skills={skills}
                    levelChanged={levelChanged}/>
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
