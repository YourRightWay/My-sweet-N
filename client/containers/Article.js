import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


// =========================================
// components
// =========================================
import ArticleContent from '../components/article-page-component/article-page-component'

// =========================================
// actions
// =========================================
import * as apiAction from '../actions/api-action'
import * as routingAction from '../actions/routing-action'

class Article extends Component {

    componentWillMount() {
        let { getArticlesId } = this.props.apiAction;
        getArticlesId()
    }

    routeTo (url, e) {
        e.preventDefault();

        let { routeTo } = this.props.routingAction;
        routeTo(url)
    }
    
    render() {

        let { STATE } = this.props.articlesList;
        
        return (
            <div>
                { STATE === "PAGE_LOAD_SUCCESS" ? <ArticleContent /> : '' }
                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-2 contact-block">
                    <a href="/contact" onClick={ (e) => this.routeTo('/contact', e) }>
                        <span>Contacts</span>
                    </a>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        articlesList: state.Articles
    }
}

function mapDispatchToProps(dispatch) {
    return {
        apiAction: bindActionCreators(apiAction, dispatch),
        routingAction: bindActionCreators(routingAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
