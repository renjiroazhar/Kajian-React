import React, { Component } from 'react';
import TodoList from '../Counter/Todo List/todoList';
import { BrowserRouter, Route } from 'react-router-dom';

export default class KajianTodoList extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/todo-list" Component={TodoList} />
        </div>
      </BrowserRouter>
    )
  }
}