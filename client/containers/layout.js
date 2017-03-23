import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../components/header-component/header-component'
import ValidateComponent from '../components/system-components/validate-component/validate'

import * as apiAction from '../actions/api-action'

class Layout extends Component {
    
    componentDidMount() {
        let { getArticles } = this.props.apiAction;
        getArticles()
    }
    
    render() {
        let { validateText, validateNotify } = this.props.validate;

        return (
            <div>
                <Header />
                <ValidateComponent status={validateNotify} text={validateText}/>
                <div className="container">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        validate: state.Validate
    }
}

function mapDispatchToProps(dispatch) {
    return {
        apiAction: bindActionCreators(apiAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)











