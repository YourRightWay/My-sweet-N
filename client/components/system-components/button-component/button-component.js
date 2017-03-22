import React from 'react';
import Ripple from '../../system-components/ripple/ripple'
import classNames from 'classnames'


export default class Btn extends React.Component {

    static defaultProps = {
        btnClass: "g-btn btn-ripple",
        spinner: true
    }

    render () {
        let { btnClick, btnText, fetchStatus, btnClass, btnStyle, spinner } = this.props;

        let activeBtnClass = classNames({
            [`${btnClass} ${btnStyle} btn-loading`] : fetchStatus === true,
            [`${btnClass} ${btnStyle}`] : fetchStatus === false
        })

        let disabled = fetchStatus ? 'disabled' : ''

        return (

            <div>
                <Ripple>
                    <button ref="button"
                            className={activeBtnClass}
                            disabled = {disabled}
                            onClick={ btnClick }>
                        { btnText }
                    </button>
                </Ripple>
            </div>

        )
    }
}
