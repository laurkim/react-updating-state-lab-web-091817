import React from 'react';
import ReactDOM from 'react-dom';

import DigitalClicker from './components/DigitalClicker';
import YouTubeDebugger from './components/YouTubeDebugger';

ReactDOM.render(
  <div>
    <label>World Record Clicker</label>
    <br />
    <DigitalClicker />
    <br />
    <br />
    <label>Youtube Clickers</label>
    <br />
    <YouTubeDebugger />
  </div>,
  document.getElementById('global')
);
