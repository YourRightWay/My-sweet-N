import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as apiAction from '../actions/api-action'

class Article extends Component {
    render() {
        return (
            <div>
                <h1>hello article</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Article)
