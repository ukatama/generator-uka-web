import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import injectTouchTap from 'react-tap-event-plugin';
import App from './components/App';
import store from './store';

injectTouchTap();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'),
);
