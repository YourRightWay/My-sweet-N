import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// =========================================
// components
// =========================================
import ImageLoader from '../../components/system-components/image-loader/image-loader'
import Sticker from '../../components/system-components/sticker-component/sticker-component'
import Button from '../../components/system-components/button-component/button-component'

// =========================================
// utils
// =========================================
import i from '../../decorators/inject'


// =========================================
// action
// =========================================
import * as apiAction from '../../actions/api-action'



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

    sendPostForm(e) {
        e.preventDefault();
        
        var userName = this.refs.userName;
        var userNameValue = userName.value;
        
        var userEmail = this.refs.userEmail;
        var userEmailValue = userEmail.value;
        
        var userComment = this.refs.userComment;
        var userCommentValue = userComment.value;
        
        let { sendCommentForm } = this.props.apiAction;
        sendCommentForm(userNameValue, userEmailValue, userCommentValue)

    }

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
            <div className="article-list">
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
                
                <div className="article-content__comments-form">

                    <form action="">
                        <div className="form-group form-group--left">
                            <label htmlFor='userName' className='g-label'>Your name</label>
                            <input type='text' id='userName' ref="userName" className='g-inp' placeholder="Enter your name"/>
                        </div>

                        <div className="form-group form-group--right">
                            <label htmlFor='userEmail'  className='g-label'>Your email</label>
                            <input type='text' ref="userEmail" id='userEmail' className='g-inp' placeholder="Enter your email"/>
                        </div>

                        <div className="form-group form-group--comment">
                            <textarea name="" id="" cols="30" rows="10" ref="userComment" className='g-inp'>
                        
                            </textarea>
                        </div>

                        <Button btnClick={ ::this.sendPostForm }
                                btnText={ false ? 'Loading..' : 'SEND COMMENT' }
                                btnStyle="btn-orange"
                                type="submit"
                                fetchStatus={ false }/>
                    </form>
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
        apiAction: bindActionCreators(apiAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContent)
