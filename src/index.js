import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './components/registerServiceWorker';
import Router from './router';
import './css/index.css';
import './css/bootstrap-grid.css';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
