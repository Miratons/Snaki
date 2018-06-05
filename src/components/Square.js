import React, { Component } from 'react'
import PropTypes from 'prop-types'

import 'components/Square.css'

class Square extends Component {
    constructor(props) {
        super(props);
        this.getClassName = this.getClassName.bind(this)
    }

    render() {
        
        return (
            <li className={this.getClassName()}></li>
       )
    }

    getClassName() {
        let className = "square "
        //if (this.props.snake) {
            let isSnaked = this.props.snake.find((pos) => pos.x === this.props.x && pos.y === this.props.y)
            className += isSnaked ? 'snaked' : ''
        //}
        return className;
    }
}

Square.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    snake: PropTypes.array.isRequired,
}

export default Square