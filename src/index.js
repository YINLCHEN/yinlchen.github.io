import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './components/registerServiceWorker';
import Router from './router';

import reducer from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import './css/index.css';

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
