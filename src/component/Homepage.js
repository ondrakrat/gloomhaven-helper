import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      margin: 'auto'
    }
  }));

function Homepage(props) {
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h2" gutterBottom>Gloomhaven Helper</Typography>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Useful links
                    </ListSubheader>
                }
                className={classes.root}
                >
                <ListItem button component="a" href="https://online.flippingbook.com/view/598058" target="_blank">
                    <ListItemText primary="Rule Book" />
                </ListItem>
                <ListItem button component="a" href="https://online.flippingbook.com/view/145446" target="_blank">
                    <ListItemText primary="Scenario Book" />
                </ListItem>
            </List>
        </div>
    );
}

export default Homepage;
