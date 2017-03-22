import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../components/header-component/header-component'

import * as apiAction from '../actions/api-action'

class Layout extends Component {
    
    componentDidMount() {
        let { getArticles } = this.props.apiAction;
        getArticles()
    }
    
    render() {
        return (
            <div>
                <Header />
                <div className="container container-offset ">
                    { this.props.children }
                </div>
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











