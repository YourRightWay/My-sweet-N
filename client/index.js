import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

// =========================================
// REDUX
// =========================================
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import rootReducer from './reducers/app-reducer'

// =========================================
// ROUTER
// =========================================
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

// =========================================
// MIDDLEWARE
// =========================================
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import PureActionMiddleware from './middleware/pure-action-middleware'
import DebuggerMiddleware from './middleware/debug-middleware'
import ValidateMiddleware from './middleware/validate-middleware'


// =========================================
// CREATE STORE
// =========================================
const mainStore = (function configureMainStore(initialState) {

    const logger = createLogger();

    const store = createStore(
        rootReducer,
        initialState,
        compose(
            __DEVELOPMENT__ ? applyMiddleware(
                thunk,
                logger,
                PureActionMiddleware,
                DebuggerMiddleware,
                ValidateMiddleware
            ): applyMiddleware(thunk, PureActionMiddleware, ValidateMiddleware)
        )
    );

    return store

})();

// =========================================
// REDUX SYNC ROUTER
// =========================================
const history = syncHistoryWithStore(browserHistory, mainStore);

import Layout from './containers/layout'; 
import List from './containers/List'; 
import Article from './containers/Article';  
import Contact from './containers/Contacts'; 

ReactDOM.render( <Provider store={mainStore}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
        <Route path='/' component={Layout}>
            <IndexRoute component={List}/>
            <Route path='/article/:articleId' component={Article} />
            <Route path='/contact' component={Contact} /> 
        </Route>
    </Router>
</Provider>, document.getElementById('root'));










