import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/home.css';
import Header from '../Header';

class Home extends Component {

  render(){
    return(  
      <div>
          <Header/>
        <div className="container">
            <div className="leftColumn">

            </div>
            <div className="rightColumn">

            </div>
        </div>
      </div>
    )
}
}

export default Home