import React from 'react';
import './App.css';
import Layout from './components/Layout';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import {useInputValue} from './components/UseInputValue';
import {useTodos} from './components/UseTodos';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const App = (props) => {

  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const { todos, addTodo, checkTodo, removeTodo } = useTodos();

  const clearInputAndAddTodo = _ => {
    clearInput();
    addTodo(inputValue);
  };

  const columnDefs = [
    {headerName: "Task", field: "text"},
    {headerName: "Completion Date", field: "completionDate"},
  ];

  const rowData= [
    {text: "Toyota", completionDate: "Celica"},
    {text: "Ford", completionDate: "Mondeo" },
    {text: "Porsche", completionDate: "Boxter"}
  ];

  return (
    <Layout>
      <AddTodo
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={event => keyInput(event, clearInputAndAddTodo)}
      />
      <TodoList
        items={todos}
        onItemCheck={idx => checkTodo(idx)}
        onItemRemove={idx => removeTodo(idx)}
      />
       <div className="ag-theme-balham" style={{ height: '200px', width: '600px' }}>
        <AgGridReact
            columnDefs={columnDefs}
            rowData={todos}>
        </AgGridReact>
      </div>
    </Layout>
  );
}

export default App;
