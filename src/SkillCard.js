import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { useDrag } from 'react-dnd';
import { DraggableTypes } from './constants';

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
    const [{isDragging}, drag] = useDrag({  // hook
        item: {
            type: DraggableTypes.SkillCard,
            id: skill
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    });
    return (
        <Card 
            className={classes.root} 
            ref={drag}
            opacity={isDragging ? '0.5' : '1'}  // TODO fix
            >
            <CardMedia
                image={`${process.env.PUBLIC_URL}/game/brute/skills/${skills[skill].imageName()}.jpg`}
                title={skill.name}
                component="img"
                alt={skill.name}
            />
        </Card>
    )
}

export default SkillCard;
