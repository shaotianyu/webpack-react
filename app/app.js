import React from 'react';
import ReactDOM from 'react-dom';
import es6Promise from 'es6-promise';
import Index from './app';

// import { syncHistoryWithStore } from 'react-router-redux';
// import { createStore } from 'redux';
import { AppContainer } from 'react-hot-loader';
//import { Provider } from 'react-redux';

es6Promise.polyfill();
// const store = createStore(reducer);
// const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render(
    <AppContainer>
        <Index/>
    </AppContainer>
    ,
    document.getElementById('app')
);


if (module.hot) {
    module.hot.accept('./app', () => {
        const Index = require('./app').default;
        ReactDOM.render(
            <AppContainer>
                <Index/>
            </AppContainer>,
            document.getElementById('app')
        );
    });
}
