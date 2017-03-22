import React, { Component } from 'react';
import { connect } from 'react-redux'

// =========================================
// components
// =========================================
import ImageLoader from '../../components/system-components/image-loader/image-loader'
import Sticker from '../../components/system-components/sticker-component/sticker-component'


// =========================================
// utils
// =========================================
import i from '../../decorators/inject'


// =========================================
// comment
// =========================================
class CommentItem extends Component {
    @i
    render({ author, text, date, childrenRender }) {
        return (
            <div className="comment-item">
                <span className="comment-item__author">{author}</span>
                <span className="comment-item__text">{text}</span>
                <span className="comment-item__date">{date}</span>
                { childrenRender ? this.props.children : '' }
            </div>
        ) 
    }
}


class ArticleContent extends Component {
    render() {

        let { articlesList, id } = this.props.articlesList;
        
        let createCommentList = articlesList[id].comments.map((data, index) => (
            <CommentItem key={data._id} 
                         author={data.authorName} 
                         text={data.text} 
                         date={data.created}
                         childrenRender={data.replies.length ? true : false}>
                
                <div className="children-comment">
                    {
                        data.replies.map((subData, subIndex) => (
                            <CommentItem key={subData._id}
                                         author={subData.authorName}
                                         text={subData.text}
                                         date={subData.created}>
                            </CommentItem>
                        ))
                    }
                </div>
                
            </CommentItem>
        ))
        
        return (
            <div className="col-lg-10 col-md-10 col-sm-8 col-xs-10 article-content">
                <Sticker day={articlesList[id].dateCreated.number}
                         month={articlesList[id].dateCreated.month}
                         year={articlesList[id].dateCreated.year}/>
                <ImageLoader
                    src={articlesList[id].image}
                    wrapper={React.DOM.div}
                    preloader={() => { <span></span> }}>
                </ImageLoader>
                
                <div className="article-content__title">
                    <span>{articlesList[id].title}</span>
                </div>

                <div className="article-content__description">
                    <span>{articlesList[id].body.text}</span>
                </div>
                
                <div className="article-content__comments">
                    <span className="comments-quantity">{articlesList[id].comments.length} comments</span>
                    <div className="comment-tree__block">
                        {createCommentList}
                    </div>
                   
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
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContent)
