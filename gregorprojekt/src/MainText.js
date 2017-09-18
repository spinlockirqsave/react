import React, { Component } from 'react';
import './MainText.css';

import Fade from 'react-fade-opacity';

export default class MainText extends Component {
  render() {
    return (
      <Fade in="1" delay="1000">
      <div>
        <div>
            <br/><br/>
        </div>
        <div className="main-text">
            <div className="main-text-left">
                <div className="main-text-left2">
                    <button className="button button1">Usługi</button>
                </div>
                <div className="main-text-right2">
                    <button className="button button2">O nas</button>
                </div>
            </div>
            <div className="main-text-right">
                <div className="main-text-left2">
                    <button className="button button3">Zrealizowane projekty</button>
                </div>
                <div className="main-text-right2">
                    <button className="button button4">Zapytaj</button>
                </div>
            </div>
        </div>
      </div>
      </Fade>
    );
  }
}
