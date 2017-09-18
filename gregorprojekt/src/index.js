import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainLogo from './MainLogo'
import MainSlider from './MainSlider'
import MainText from './MainText'
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<MainLogo />, document.getElementById('main-logo'));

ReactDOM.render(<MainSlider />, document.getElementById('main-slider'));
ReactDOM.render(<MainText />, document.getElementById('main-text'));

registerServiceWorker();
