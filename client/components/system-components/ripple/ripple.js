import React from 'react';
import R from './ripple-effect'

export default class Ripple extends React.Component {
    constructor() {
        super();
        this.state = {
            cursorPos: {}
        }
    }

    handleClick (event) {

        let cursorPos = {
            top: event.clientY,
            left: event.clientX,
            time: Date.now()
        }

        this.setState({ cursorPos: cursorPos })
    }

    render () {
        return (
            <div ref="button" onMouseUp={ ::this.handleClick } className="ripple-parent">
                { this.props.children }
                <R cursorPos={ this.state.cursorPos }/>
            </div>
        )
    }
}
