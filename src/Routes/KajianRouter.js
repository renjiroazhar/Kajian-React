import React, { Component } from 'react';
import Home from '../Counter/Router/Home';
import List from '../Counter/Router/List';
import Detail from '../Counter/Router/Detail';
import { BrowserRouter, Route } from 'react-router-dom';

export default class KajianRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/home" Component={Home} />
          <Route exact path="/list" Component={List} />
          <Route path="/list/:nama" Component={Detail} />
        </div>
      </BrowserRouter>
    )
  }
}