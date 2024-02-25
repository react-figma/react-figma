import * as React from 'react';
import { App } from './App';

import * as ReactDOM from 'react-dom';

import 'react-figma/rpc';
import { render } from 'react-figma';
import { ClientApp } from './ClientApp';

import store from './app/store';
import { Provider } from 'react-redux';

render(
    <Provider store={store}>
        <App />
    </Provider>
);

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('react-page');
    ReactDOM.render(
        <Provider store={store}>
            <ClientApp />
        </Provider>,
        container
    );
});
