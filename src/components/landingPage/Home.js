import React, {Component} from 'react';
import { connect } from 'react-redux'

import { Link } from 'react-router-dom';
import styles from '../../styles/home.css';
import Header from '../Header';

class Home extends Component {

  render(){
    return(  
      <div>
          <Header/>
        <div className="container">
            <div className="leftColumn">
            <h1>
              I am on the left
            </h1>
            </div>
            <div className="rightColumn">
              <h1>
                I am on the right
              </h1>
            </div>
        </div>
      </div>
    )
}
}

export default Home