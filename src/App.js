import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Login from './components/loginSignup/Login'
import Home from './components/landingPage/Home'
import Chatroom from './components/chatroom/Chatroom.js'
import AuthenticatedRoute from './higherOrderComponents/AuthenticatedRoute'

import { setAuthentication } from './actions/authentication'
import request from './utilis/request';

class App extends Component {
  componentDidMount(){
    request('/auth/token')
    .then(response => this.props.setAuthentication(response.data))
    .catch(err => this.props.setAuthentication(null))
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Login} />
            <AuthenticatedRoute path='/home' component={Home} />
            <AuthenticatedRoute path='/chatroom' component={Chatroom}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    setAuthentication
  }, dispatch)

export default connect(null, mapDispatchToProps)(App)