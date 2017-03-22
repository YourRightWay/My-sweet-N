import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


// =========================================
// actions
// =========================================
import * as apiAction from '../actions/api-action'
import * as routingAction from '../actions/routing-action'


// =========================================
// components
// =========================================
import Article from '../components/article-item-component/article-item-component'


class List extends Component {

    constructor() {
        super()
        this.state = {
            img: [
                'https://pp.userapi.com/c626919/v626919551/3eeec/u4PYNHVVzv0.jpg',
                'https://pp.userapi.com/c638525/v638525094/27c75/oEl5q67tDIQ.jpg',
                'https://pp.userapi.com/c543106/v543106747/4f880/VdKmvlQ5J2I.jpg',
                'https://pp.userapi.com/c543106/v543106747/4f862/MP_UbvHjBp8.jpg',
                'https://pp.userapi.com/c637316/v637316410/33846/hH_UdgR6bhw.jpg',
                'https://pp.userapi.com/c837533/v837533132/1ef37/LlRY-n0Btoo.jpg',
                'https://pp.userapi.com/c543106/v543106148/28d09/zGbAqudat-E.jpg',
                'https://pp.userapi.com/c626920/v626920534/39ca2/jZ75e1FUZAU.jpg',
                'https://pp.userapi.com/c637723/v637723324/2fc74/YM07izwZcsk.jpg',
                'https://pp.userapi.com/c836524/v836524468/20f72/wasKRzjOMPU.jpg'
            ]
        }
    }

    routeTo (url, e) {
        e.preventDefault();

        let { routeTo } = this.props.routingAction;
        routeTo(url)
    }

    render() {
        
        let { articlesList } = this.props.articlesList;
        let { img } = this.state;
        
        let createArticleList = articlesList.map((data, index) => (
            <Article key={data._id}
                     url={data._id}
                     imagePath={img[index]}
                     articleDate={data.dateCreated}
                     title={data.title}
                     text={data.body.hasOwnProperty('text') ? data.body.text : 'Description not found'}
                     routeTo={(e) => this.routeTo(`/article/${data._id}`, e)}/>
        ))
        
        return (
            <div>
                <div className="col-lg-10 col-md-10 col-sm-8 col-xs-10">
                    {createArticleList}
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-2">
                    <h1>hello list</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(List)
