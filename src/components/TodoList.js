import React, {memo, useState} from 'react';
import {List, Paper, Grid} from '@material-ui/core';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todoList, setTodoList] = useState([{id: 1, text:'Learn React Hooks', checked:false}]);

  const onItemRemove = (id) => {};
  const onItemCheck = (id) => {};

  return (
    <Paper style={{margin:16}}>
      <List style={{overflow:"scroll"}}>
      {todoList && todoList.map((todo) => (
        <TodoItem key={todo.id} 
        todo={todo}
        onCheckBoxToggle={() => onItemCheck(todo.id)}
        onButtonClick={() => onItemRemove(todo.id)}/>
      ))}
      </List>
    </Paper>
    
  )
}

export default TodoList;