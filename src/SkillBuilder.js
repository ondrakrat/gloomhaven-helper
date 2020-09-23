import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { CLASSES } from './gloomhaven-constants.js';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
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
            {
                Object.keys(skills).map(skill => (
                    <img
                        key={skill}
                        src={`${process.env.PUBLIC_URL}/game/brute/skills/${skills[skill].imageName()}.jpg`}
                        title={skill.name}
                        alt={skill.name}
                        width="15%" // TODO responsive
                    />
                    // <Card key={skill} className={classes.root}>
                    //     <CardMedia
                    //         className={classes.media}
                    //         image={`${process.env.PUBLIC_URL}/game/brute/skills/${skills[skill].imageName()}.jpg`}
                    //         title={skill.name}
                    //         component="img"
                    //         alt={skill.name}
                    //         height="140"
                    //     />
                    // </Card>
                ))
            }
            {/* <List>
                {
                    Object.keys(clazz.skills()).map(skill => (
                        <ListItemText key={skill} primary={`${skill}, required level: ${clazz.skills()[skill].level}`} />
                    ))
                }
            </List> */}
        </div>
    )
}

export default SkillBuilder;
