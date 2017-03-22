import React, { Component } from 'react';


// =========================================
// components
// =========================================
import ImageLoader from '../system-components/image-loader/image-loader'


// =========================================
// utils
// =========================================
import i from '../../decorators/inject'


class Sticker extends Component {
    @i
    render({ day, month, year}) {
        return (
            <div className="article-item__sticker">
                <span className="sticker-date">{ day }</span>

                <span className="sticker-other">
                     <span className="sticker-month">{ month }</span>
                     <span className="sticker-day">{ year }</span>
                </span>
            </div>
        )
    }
}


export default class ArticleItem extends Component {
    @i
    render({imagePath, title, url, routeTo, text, articleDate}) {
        return (
            <div className="article-item">
                <Sticker day={articleDate.number} month={articleDate.month} year={articleDate.year}/>
                <a href={'/article/' + url} onClick={ routeTo }>
                    <div className="article-item__img">
                        <ImageLoader
                            src={imagePath}
                            wrapper={React.DOM.div}
                            preloader={() => { <span></span> }}>
                        </ImageLoader>
                    </div>
                    <div className="article-item__description">
                        <span className="article-item__title">{title}</span>
                        <span className="article-item__text">{ text }</span>
                    </div>
                    <span className="article-item__read">
                        read more
                    </span>
                </a>
            </div>
        );
    }
}
