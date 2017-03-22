import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


// =========================================
// actions
// =========================================
import * as apiAction from '../actions/api-action'
import * as routingAction from '../actions/routing-action'
import * as staticAction from '../actions/static-action'


// =========================================
// components
// =========================================
import Article from '../components/article-item-component/article-item-component'
import Button from '../components/system-components/button-component/button-component'

class List extends Component {
    routeTo (url, e) {
        e.preventDefault();

        let { routeTo } = this.props.routingAction;
        routeTo(url)
    }
    
    onloadArticles() {
        let { increaseCounter } = this.props.staticAction;
        increaseCounter();

        let { getArticles } = this.props.apiAction;
        getArticles()
    }

    render() {
        
        let { articlesList, quantityPages, currentPage } = this.props.articlesList;

        let createArticleList = Object.keys(articlesList).map((data, index) => (
                <Article key={articlesList[data]._id}
                         url={articlesList[data]._id}
                         imagePath={articlesList[data].image}
                         articleDate={articlesList[data].dateCreated}
                         title={articlesList[data].title}
                         text={articlesList[data].body.hasOwnProperty('text') ? articlesList[data].body.text : 'Description not found'}
                         routeTo={(e) => this.routeTo(`/article/${articlesList[data]._id}`, e)}/>
        ))
        
        return (
            <div>
                <div className="col-lg-10 col-md-10 col-sm-8 col-xs-10">
                    {createArticleList}
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-2 contact-block">
                    <a href="/contact" onClick={ (e) => this.routeTo('/contact', e) }>
                        <span>Contacts</span>
                    </a>
                </div>
                {
                    quantityPages === currentPage ?
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 onload-article">
                            <span className="onload-article__text">No more results</span>
                        </div> :  
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 onload-article">
                            <Button btnClick={ ::this.onloadArticles }
                                    btnText={ false ? 'Loading..' : 'load more' }
                                    btnStyle="btn-orange"
                                    fetchStatus={ false }/>
                        </div>
                }
               
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
        staticAction: bindActionCreators(staticAction, dispatch),
        routingAction: bindActionCreators(routingAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
