import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'; // TODO replace by touch backend
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { CLASSES } from './gloomhaven-constants.js';
import SkillCard from './SkillCard';

const useStyles = makeStyles({
    flexbox: {
        flexWrap: 'wrap'
    }
});

function SkillBuilder(props) {
    const classes = useStyles();
    const clazz = CLASSES[props.match.params.selectedClass];
    const skills = clazz.skills();
    return(
        <div>
            <Typography variant="h2" gutterBottom>
                {clazz.name}
            </Typography>
            <Typography paragraph>
                Maximum hand size: {clazz.maximumHandSize}
            </Typography>
            <DndProvider backend={HTML5Backend}>
                <Box className={classes.flexbox} display="flex" flexDirection="row" justifyContent="center" p={1} m={1}>
                    {
                        Object.keys(skills).map(skill => (
                            <SkillCard key={skill} skill={skill} skills={skills} />
                        ))
                    }
                </Box>
            </DndProvider>
        </div>
    )
}

export default SkillBuilder;
