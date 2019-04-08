import React, {memo} from 'react';
import {TextField, Paper, Button, Grid} from '@material-ui/core';

const AddTodo = memo(props => (
  <Paper style={{margin:16, padding:16}}>
    <Grid container>
      <Grid xs={7} md={8} item style={{paddingRight:16}}>
        <TextField placeholder="Add Tasks here..."
        value={props.inputValue}
        onChange={props.onInputChange}
        onKeyPress={props.onInputKeyPress}
        fullWidth/>
      </Grid>
      <Grid xs={3} md={3} item style={{paddingRight:16}}>
        <TextField placeholder="completion date..."
        value={props.inputDateValue}
        onChange={props.onDateChange}
        onKeyPress={props.onInputKeyPress}
        type="datetime-local"
        fullWidth/>
      </Grid>
      <Grid xs={2} md={1} item>
        <Button fullWidth
        color="secondary"
        variant="outlined"
        onClick={props.onButtonClick}>Add</Button>
      </Grid>
    </Grid>
  </Paper>
))

export default AddTodo;