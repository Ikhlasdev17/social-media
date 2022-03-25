
import { Button, Container, Fab, FormControlLabel, FormLabel, makeStyles, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField, Tooltip } from '@material-ui/core'
 import { Add as AddIcon } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import { useState } from 'react';


const useStyles = makeStyles(theme => ({  
    fab: {
        position: 'fixed',
        bottom: 20,
        right: 20
    },
    container: {
        width: 500,
        height: 550,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
            height: '100vh',
            width: '100%'
        }
     },
     form: {
         padding: theme.spacing(2)
     },
     item: {
         marginBottom: theme.spacing(2)

     }

}))
 

function Add() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)

  const handleClose = (event, reason) => {
      if (reason === 'clickaway'){
          return
      }

      setOpenAlert(false)
  }
  return (
    <>
    <Tooltip title="Add" aria-label='add' onClick={() => setOpen(!open)}>
        <Fab color="primary" className={classes.fab}>
            <AddIcon />
        </Fab>
    </Tooltip> 

    <Modal open={open}>
        <Container className={classes.container}>
            <form className={classes.form} autoComplete={'off'}>
                <div className={classes.item}>
                    <TextField id='standard-basic' label="Title" size='small' style={{width: "100%"}} />
                </div>
                <div className={classes.item}>
                    <TextField  multiline rows={4} variant="outlined" label="Tell your story..." size='small' style={{width: "100%"}} />
                </div>
                <div className={classes.item}>
                    <TextField select label="Visibility" value="Public">
                        <MenuItem value="Public">Public</MenuItem>
                        <MenuItem value="Private">Private</MenuItem>
                        <MenuItem value="Unlisted">Unlisted</MenuItem>
                    </TextField>
                </div>
                <div className={classes.item}>
                    <FormLabel component="legend"> Whe can Comment?</FormLabel>
                    <RadioGroup>
                        <FormControlLabel value="Everybody" control={<Radio size='small'/>} label="Everybody" />
                        <FormControlLabel value="Nobody" control={<Radio size='small'/>} label="Nobody" />
                        <FormControlLabel value="My Friends" control={<Radio size='small'/>} label="My Friends" />
                        <FormControlLabel value="Custom" control={<Radio size='small'/>} label="Custom (premium)" disabled />
                    </RadioGroup>
                </div>
                <div className={classes.item}>
                    <Button variant="outlined" color="primary" onClick={() => {setOpenAlert(true); setOpen(false)}}  style={{marginRight: '1rem'}}>Create</Button>
                    <Button variant="outlined" color="secondary" onClick={() => setOpen(false)}>Cancel</Button>
                </div>
            </form>
        </Container>
    </Modal>

    <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert severity='success'>
            Post was added successfully!
        </Alert>
    </Snackbar>
    </>
  );
}

export default Add;
