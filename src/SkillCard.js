import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    root: {
      minWidth: 100,
      maxWidth: 300,
      borderRadius: '10px',
      margin: 10
    }
});

function SkillCard(props) {
    const classes = useStyles();
    const skills = props.skills;
    const skill = props.skill;
    return (
        <Card className={classes.root}>
            <CardMedia
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
    )
}

export default SkillCard;
