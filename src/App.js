import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import NavBar from './NavBar';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar color="primary" position="static">
          <Toolbar id="toolbar">
            <TypoGraphy variant="title"
              color="inherit"
            >
              <h1 class="nameHeader">Caillard Alexandre</h1>
              <h3 class="jobHeader">Développeur Web</h3>
            </TypoGraphy>
            <NavBar />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default App;
