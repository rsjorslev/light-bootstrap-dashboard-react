import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

require('bootstrap/dist/css/bootstrap.css');
require('./styles/Roboto.css');
require('./styles/light-bootstrap-dashboard.scss');
require('pixeden-stroke-7-icon/pe-icon-7-stroke/dist/pe-icon-7-stroke.css');
require('font-awesome/css/font-awesome.css');

ReactDOM.render(<App />, document.getElementById('app'));
