import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../components/header-component/header-component'

import * as apiAction from '../actions/api-action'

class Layout extends Component {
    
    getArticles() {
        let { getArticles } = this.props.apiAction;
        getArticles()
    }

    getArticlesId() {
        let { getArticlesId } = this.props.apiAction;
        getArticlesId('58b00c9e7a9e1f010e90b787')
    }
    
    render() {
        return (
            <div>
                <Header />
                <h1>Hello app!</h1>
                <button onClick={::this.getArticles}>получить статьи</button>
                <button onClick={::this.getArticlesId}>получить статью!</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
       
    }
}

function mapDispatchToProps(dispatch) {
    return {
        apiAction: bindActionCreators(apiAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)











