import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import ConfigureStore from 'Store/configureStore';
import { Routes } from 'Config/routes';
import { GlobalStyle } from 'Config/globalStyle';

const store = ConfigureStore();

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyle></GlobalStyle>
        <Router>
            {renderRoutes(Routes)}
        </Router>
    </Provider>,
    document.getElementById('root')
)
