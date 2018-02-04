import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/bootstrap-grid.css';
import App from './components/Home/App';
import registerServiceWorker from './components/registerServiceWorker';

import Router from './router';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
