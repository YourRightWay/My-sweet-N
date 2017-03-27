import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

// =========================================
// REDUX
// =========================================
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
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
const appStore = (function(initialState) {
    
    let middlewares = [PureActionMiddleware, thunk, ValidateMiddleware];
    
    if(__DEVELOPMENT__) {
        middlewares.push(createLogger(), DebuggerMiddleware)
    }
    
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware.apply(null, middlewares)
    )
})();

// =========================================
// REDUX SYNC ROUTER
// =========================================
const history = syncHistoryWithStore(browserHistory, appStore);

import Layout from './containers/layout'; 
import List from './containers/List'; 
import Article from './containers/Article';  
import Contact from './containers/Contacts'; 

ReactDOM.render( <Provider store={appStore}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
        <Route path='/' component={Layout}>
            <IndexRoute component={List}/>
            <Route path='/article/:articleId' component={Article} />
            <Route path='/contact' component={Contact} /> 
        </Route>
    </Router>
</Provider>, document.getElementById('root'));










