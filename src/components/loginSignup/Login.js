import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router-dom'

import { setAuthentication } from '../../actions/authentication'

import request from '../../utilis/request'

import '../../styles/login.css'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      showErrorMessage: false
    }
  }

  handleSignIn = event => {
    console.log(typeof event)
    event.preventDefault()
    
    const { inputEmail, inputPassword } = event.target

    request('/auth/token','post', {
      username: inputEmail.value,
      password: inputPassword.value })
    .then(response => {
      this.setState({ showErrorMessage: false })
      
      localStorage.setItem('token', response.data.token)
      return request('/auth/token')
    })
    .then(response => {
      this.props.setAuthentication(response.data)
      this.props.history.push('/home')
    })
    .catch(error => {
      this.setState({showErrorMessage: true})
    })
  }

  render(){
    return (
      <div className="login">
        <form onSubmit={this.handleSignIn} className="login-form">
          <div className="text-center mb-4">
            <h1 className="h3 mb-3 font-weight-normal">Log in</h1>
          </div>

          <div className="form-label-group">
            <input type="text" name="inputEmail" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
          </div>

          <div className="form-label-group">
            <input type="password" name="inputPassword" id="inputPassword" className="form-control" placeholder="Password" required />
          </div>
          <div className={ !this.state.showErrorMessage ? 'login-auth-error login-hide-auth-error' : 'login-auth-error' }>
            Invalid Username or Password
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
        <Link to="/"><button></button></Link>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => 
  bindActionCreators({
    setAuthentication
  }, dispatch)

export default connect(null, mapDispatchToProps)(Login)