import React, { Component } from 'react'
import Clock from './Clock'
import Logo from './imgs/scd_logo.png';

class Welcome extends Component {
    render() {
      return (
        <div className="Welcome">
          <h1>Welcome to Source Code Diver</h1>
            <p>
                Coming soon! We're working hard to bring you an awesome new tool 
                for code analysis and visualization.
            </p>
            <img src={Logo} alt="Source Code Diver Logo" />
            <p>
                Follow our build blog at <a href="https://bsdillon.github.io/sourcecodediver/">our home page</a>.
            </p>
            <Clock />
        </div>
        )
    }
  }
  
  export default Welcome