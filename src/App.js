import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <AddTodo/>
          <TodoList/>
        </Layout>

      </div>
    );
  }
}

export default App;
