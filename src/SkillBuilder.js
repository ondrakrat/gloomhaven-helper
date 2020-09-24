import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'; // TODO replace by touch backend
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { CLASSES } from './gloomhaven-constants.js';

const useStyles = makeStyles({
    root: {
      minWidth: 100,
      maxWidth: 300,
      borderRadius: '10px',
      margin: 10
    },
    flexbox: {
        flexWrap: 'wrap'
    },
    media: {
        // height: 0,
        // width: '24%',
        // paddingTop: '56.25%', // 16:9
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
                            <Card key={skill} className={classes.root}>
                                <CardMedia
                                    className={classes.media}
                                    image={`${process.env.PUBLIC_URL}/game/brute/skills/${skills[skill].imageName()}.jpg`}
                                    title={skill.name}
                                    component="img"
                                    alt={skill.name}
                                />
                                {/* <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {skill}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {`Required level: ${skills[skill].level}`}
                                    </Typography>
                                </CardContent> */}
                            </Card>
                        ))
                    }
                </Box>
                {/* <List>
                    {
                        Object.keys(clazz.skills()).map(skill => (
                            <ListItemText key={skill} primary={`${skill}, required level: ${clazz.skills()[skill].level}`} />
                        ))
                    }
                </List> */}
            </DndProvider>
        </div>
    )
}

export default SkillBuilder;
