import React, { Component } from 'react'
import Slider from '../node_modules/react-slick/lib/slider.js'
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

import './MainSlider.css';

import Fade from 'react-fade-opacity';

export default class MainSlider extends Component {
    constructor(props) {
      super(props)
      this.next = this.next.bind(this)
      this.previous = this.previous.bind(this)
    }


    next() {
      this.slider.slickNext()
    }
    previous() {
      this.slider.slickPrev()
    }


    tick() {
        this.slider.slickNext()
    }

    componentDidMount() {
      this.timerID = setInterval(
                      () => this.tick(), 5000);
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

  render() {
    const settings = {
      dots: true,
      arrows: false,
      centerMode: false,
      fade: true,
      infinite: true,
      speed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };

    return (
    <Fade in="1" delay="0">
    <div className="sliderdiv">
      <div>
        <h2></h2>
        <Slider ref={c => this.slider = c } {...settings}>
            <div><img className="fullscreen" src={'images/home1.jpg'} alt='ok' /></div>
            <div><img className="fullscreen" src={'images/home2.jpg'} alt='ok' /></div>
            <div><img className="fullscreen" src={'images/home3.jpg'} alt='ok' /></div>
            <div><img className="fullscreen" src={'images/home4.jpg'} alt='ok' /></div>
            <div><img className="fullscreen" src={'images/home5.jpg'} alt='ok' /></div>
            <div><img className="fullscreen" src={'images/home6.jpg'} alt='ok' /></div>
            <div><img className="fullscreen" src={'images/home7.jpg'} alt='ok' /></div>
            <div><img className="fullscreen" src={'images/home8.jpg'} alt='ok' /></div>
            <div><img className="fullscreen" src={'images/home9.jpg'} alt='ok' /></div>
            <div><img className="fullscreen" src={'images/home10.jpg'} alt='ok' /></div>
            <div><img className="fullscreen" src={'images/home11.jpg'} alt='ok' /></div>
            <div><img className="fullscreen" src={'images/home12.jpg'} alt='ok' /></div>
        </Slider>
      </div>
    </div>
    </Fade>
    );
  }
}

//            <br/><br/>
//            <div style={{textAlign: 'center'}}>
//                  <button className='button' onClick={this.previous}>Previous</button>
//                  <button className='button' onClick={this.next}>Next</button>
//            </div>
