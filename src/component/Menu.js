import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import SkillBuilder from './SkillBuilder';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import ListItemLink from './ListItemLink';
import { DndProvider } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import { CLASSES } from '../gloomhaven-constants.js';
import Homepage from './Homepage';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  themeToggle: {
    marginRight: 0,
    marginLeft: 'auto',
    marginTop: 'auto'
  }
}));

function Menu(props) {
    const { window } = props;
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [darkMode, setDarkMode] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
    const handleThemeToggle = (event) => {
      setDarkMode(event.target.checked);
    }
    const theme = React.useMemo(
      () =>
        createMuiTheme({
          palette: {
            type: darkMode ? 'dark' : 'light',
          },
        }),
      [darkMode],
    );
  
    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
            <ListItemLink to="/" primary="Home" icon={<HomeIcon />} />
            {Object.keys(CLASSES).map((clazz, index) => (
                <ListItemLink key={clazz} to={`/skill-builder/${clazz}`} primary={clazz} />
            ))}
        </List>
      </div>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;
  
    return (
      <ThemeProvider theme={theme}>
        <Router basename={process.env.PUBLIC_URL}>
          <DndProvider options={HTML5toTouch}>
            <div className={classes.root}>
              <CssBaseline />
              <AppBar position="fixed" className={classes.appBar}>
              <Toolbar>
                  <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  className={classes.menuButton}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" noWrap>Gloomhaven Helper</Typography>
                  <FormGroup row className={classes.themeToggle}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={darkMode}
                          onChange={handleThemeToggle}
                          name="darkModeSwitch"
                          inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                      }
                      label="Dark mode"
                      labelPlacement="top"
                    />
                  </FormGroup>
              </Toolbar>
              </AppBar>
              <nav className={classes.drawer} aria-label="mailbox folders">
              {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
              <Hidden smUp implementation="css">
                  <Drawer
                  container={container}
                  variant="temporary"
                  anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  classes={{
                      paper: classes.drawerPaper,
                  }}
                  ModalProps={{
                      keepMounted: true, // Better open performance on mobile.
                  }}
                  >
                  {drawer}
                  </Drawer>
              </Hidden>
              <Hidden xsDown implementation="css">
                  <Drawer
                  classes={{
                      paper: classes.drawerPaper,
                  }}
                  variant="permanent"
                  open
                  >
                  {drawer}
                  </Drawer>
              </Hidden>
              </nav>
              <main className={classes.content}>
                  <div className={classes.toolbar} />
                  <Route path="/" component={Homepage} exact />
                  <Route path="/skill-builder/:selectedClass" 
                      exact
                      render={(props) => <SkillBuilder {...props} key={props.match.params.selectedClass}/>}/>
                  <Route path="*" exact>
                    <Redirect to="/" />
                  </Route>
              </main>
            </div>
          </DndProvider>
        </Router>
      </ThemeProvider>
    );
}

export default Menu;
