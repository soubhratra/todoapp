import React from 'react';
import './App.css';
import Layout from './components/Layout';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import {useInputValue} from './components/UseInputValue';
import {useTodos} from './components/UseTodos';
import { AgGridReact } from 'ag-grid-react';
import {Paper} from '@material-ui/core';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

const App = (props) => {

  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const { todos, addTodo, checkTodo, removeTodo } = useTodos();

  const clearInputAndAddTodo = _ => {
    clearInput();
    addTodo(inputValue);
  };

  const columnDefs = [
    {headerName: "Task", field: "text", checkboxSelection:true},
    {headerName: "Completion Date", field: "completionDate"},
  ];

  return (
    <Layout>
      <AddTodo
        inputValue={inputValue}
        rowSelection='single' 
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={event => keyInput(event, clearInputAndAddTodo)}
      />
      <TodoList
        items={todos}
        onItemCheck={idx => checkTodo(idx)}
        onItemRemove={idx => removeTodo(idx)}
      />
      {todos.length > 0 && (
      <Paper style={{ margin: 16 }}>
       <div className="ag-theme-material" style={{ width: "600px", height: "100px" }}>
        <AgGridReact
            reactNext={true}
            columnDefs={columnDefs}
            rowData={todos}>
        </AgGridReact>
      </div>
      </Paper>)}
    </Layout>
  );
}

export default App;
