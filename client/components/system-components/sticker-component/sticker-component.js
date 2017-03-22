import React, { Component } from 'react';

// =========================================
// utils
// =========================================
import i from '../../../decorators/inject'

export default class Sticker extends Component {
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
