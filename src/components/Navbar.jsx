
import { alpha, AppBar, InputBase, makeStyles, Toolbar, Typography, Badge, Avatar } from '@material-ui/core'
import { Cancel, Mail, Notifications, Search } from '@material-ui/icons';
import { useState } from 'react';

const useStyles = makeStyles(theme => ({ 
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => props.open ? 'flex' : 'none',
      width: '70%'
    },
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  },
  cancel: {
    [theme.breakpoints.up("md")]: {
      display: 'none'
    },
    marginLeft: 'auto'
  },
  input: {
    color: 'white',
    marginLeft: theme.spacing(1)
  },
  searchButton:{
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      display: 'none'
    }
  },
  icons: {
    display: 'flex',
    alignItems: "center", 
    display: (props) => (props.open ? 'none' : 'flex')
    
  },
  badge: {
    marginRight: theme.spacing(2)
  }
}))

function Navbar() {
  const [open, setOpen] = useState(false)
  const classes = useStyles({ open })
  return (
    <AppBar position='fixed'>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6' className={classes.logoLg}>
          Ikhlas BLOG
        </Typography>
        <Typography variant='h6' className={classes.logoSm}>
          BLOG
        </Typography>

        <div className={classes.search}>
          <Search />
          <InputBase placeholder='Search...' className={classes.input}/>
          <Cancel className={classes.cancel} onClick={() => setOpen(false)}/>
        </div>

        <div className={classes.icons}>
          <Search className={classes.searchButton} onClick={() => setOpen(!open)} />
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={9} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar alt="Ikhlas Aralbaev" src='https://wac-cdn.atlassian.com/ru/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=278' />
        </div>
        
        
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
