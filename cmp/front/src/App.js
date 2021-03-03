import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Users from './components/Users';
import About from './components/About';
import Home from './components/Home';
import styled from 'styled-components';
import Header from './components/Header';

class App extends Component {

  render() {
    return (
      <Router>
        <Container>
          <Header/>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;

const Headers = styled.div`
  display: flex;
  
`
const Container = styled.div`

`
