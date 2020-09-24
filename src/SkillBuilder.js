import React, { useState } from 'react';
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
        border: 'solid',
        borderRadius: '5px',
        borderColor: 'black'
    }
});

function SkillBuilder(props) {
    const classes = useStyles();
    const clazz = CLASSES[props.match.params.selectedClass];
    const skills = clazz.skills();
    const [build, setBuild] = useState([]);
    const [{isOver}, drop] = useDrop({
        accept: DraggableTypes.SkillCard,
        drop: (item, monitor) => console.log('Item dropped', item),
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
                className={classes.dropbox}
                bgcolor={isOver ? 'darkgrey' : 'background.paper'} 
                justifyContent="center" 
                p={1} 
                m={1} 
                ref={drop}>
                Drag and drop your skill here
            </Box>
            <Box className={classes.flexbox} display="flex" flexDirection="row" justifyContent="center" p={1} m={1}>
                {
                    Object.keys(skills).map(skill => (
                        <SkillCard key={skill} skill={skill} skills={skills} />
                    ))
                }
            </Box>
        </div>
    )
}

export default SkillBuilder;
