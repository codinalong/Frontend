import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/loginSignup/Login'
import Signup from './components/loginSignup/Signup'
class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/signup' component={Signup}/>
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
