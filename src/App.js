import React, { Component } from 'react';
import Header from '../src/Components/Header';
import { KajianTodoList, KajianRouter } from '../src/Routes/index';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <KajianTodoList />
        <KajianRouter />
      </div>
    );
  }
}

export default App;
