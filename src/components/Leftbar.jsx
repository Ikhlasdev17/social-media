
import { Container, makeStyles, Typography } from '@material-ui/core'
import { Home, ExitToApp,   SupervisedUserCircle, Camera, PlayArrow, Phone, Settings, List, Storefront } from '@material-ui/icons';
 
const useStyles = makeStyles(theme => ({ 
  container: {
    height: '100vh',
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    position: 'sticky',
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: 'white',
      color: "#555",
      border: '1px solid #ece7e7'
    },
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: 'pointer',
      justifyContent: 'flex-start',
    }
  }, 
  icon: {
    [theme.breakpoints.up("sm")]: {
      fontSize: "18pxs"
    },
    marginRight: theme.spacing(1)
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: 'none'
    }
  }
}))

function Leftbar() {
  const classes = useStyles()
  return (
    <Container className={classes.container}>

      
      {/* Sidebar item start */}
      <div className={classes.item}>
        <Home className={classes.icon}/>
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      {/* Sidebar item end */}



      {/* Sidebar item start */}
      <div className={classes.item}>
        <SupervisedUserCircle className={classes.icon}/>
        <Typography className={classes.text}>Fiends</Typography>
      </div>
      {/* Sidebar item end */}



      {/* Sidebar item start */}
      <div className={classes.item}>
        <List className={classes.icon}/>
        <Typography className={classes.text}>Lists</Typography>
      </div>
      {/* Sidebar item end */}



      {/* Sidebar item start */}
      <div className={classes.item}>
        <Camera className={classes.icon}/>
        <Typography className={classes.text}>Camera</Typography>
      </div>
      {/* Sidebar item end */}




      {/* Sidebar item start */}
      <div className={classes.item}>
        <PlayArrow className={classes.icon}/>
        <Typography className={classes.text}>Videos</Typography>
      </div>
      {/* Sidebar item end */}




      {/* Sidebar item start */}
      <div className={classes.item}>
        <Phone className={classes.icon}/>
        <Typography className={classes.text}>Apps</Typography>
      </div>
      {/* Sidebar item end */}


      {/* Sidebar item start */}
      <div className={classes.item}>
        <Settings className={classes.icon}/>
        <Typography className={classes.text}>Settings</Typography>
      </div>
      {/* Sidebar item end */}


      {/* Sidebar item start */}
      <div className={classes.item}>
        <Storefront className={classes.icon}/>
        <Typography className={classes.text}>Market place</Typography>
      </div>
      {/* Sidebar item end */}

      {/* Sidebar item start */}
      <div className={classes.item}>
        <ExitToApp className={classes.icon}/>
        <Typography className={classes.text}>Market place</Typography>
      </div>
      {/* Sidebar item end */}



    </Container>
  );
}

export default Leftbar;
