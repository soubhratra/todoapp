import React, {memo} from 'react';
//import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import {ListItem, Checkbox, IconButton, ListItemText, ListItemSecondaryAction} from '@material-ui/core';


const TodoItem = memo(props =>
  (<ListItem divider={props.divider}>
    <Checkbox 
    onClick={props.onCheckboxToggle}
    checked={props.todo.checked}
    disableRipple />
    <ListItemText primary={props.todo.text}/>
    <ListItemSecondaryAction>
      <IconButton area-lebel="Delete Todo" onClick={props.onButtonClick}>
        x
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>)
)

export default TodoItem;