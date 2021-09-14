import { useState } from 'react';
// import './Message.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '50%',
        marginInline: 'auto',
    },
    input: {
      width: '100%',
      marginBottom: theme.spacing(3)
    }
  }));

const Message = ({changeList}) => {
    const [ text, setText ] = useState('');
    const [ name, setName ] = useState('')

    const classes = useStyles();

    const handleChangeText = evt => {
        setText(evt.target.value);
    }    

    const handleChangeName = evt => {
        setName(evt.target.value)
    }

    const handleChangeMessage = (evt) => {
        evt.preventDefault();  
        changeList(text, name);
        setText('');
        setName('');
    }

    return (
        <FormControl fullWidth>
            <Grid className={classes.root} container direction="column" alignItems="center">
                <TextField 
                autoFocus
                className={classes.input}
                id="standard-basic" 
                label="Message"
                onChange={handleChangeText}
                value={text} />

                <TextField 
                className={classes.input}
                id="standard-basic" 
                label="UserName"
                onChange={handleChangeName}
                value={name} />

                <Button onClick={handleChangeMessage} variant="contained" color="primary">
                    submit
                </Button>
            </Grid>
        </FormControl>
    )
        
    
}

export default Message;