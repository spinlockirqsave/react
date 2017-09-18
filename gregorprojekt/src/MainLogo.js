import React, { Component } from 'react';
import logo from './logo.svg';
import './MainLogo.css';

import Fade from 'react-fade-opacity';

class MainLogo extends Component {
  render() {
    return (
      <Fade in="1" delay="2000">
          <div className="logo-text"><br/>gregorprojekt<br/></div>
      </Fade>
    );
  }
}

export default MainLogo;
