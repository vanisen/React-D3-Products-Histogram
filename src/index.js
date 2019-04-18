import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Dashboard from './component/Dashboard';
import store from './store/store';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Dashboard />
    </Provider>, document.querySelector('#root'));