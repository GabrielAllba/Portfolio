import { TextField } from '@mui/material'
import classes from './Search.module.css'

function Search(props){
    
    const inputHandler = (e) => {
        let lowercase = e.target.value.toLowerCase()
        props.handler(lowercase)
    }
    return (
      <div className={classes.search}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          className={classes.textfield}
          onChange={inputHandler}
        />
      </div>
    );
}

export default Search