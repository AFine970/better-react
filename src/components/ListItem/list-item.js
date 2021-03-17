/*
 * @Author: cunhang_wei
 * @Date: 2021-03-16 19:17:31
 */

import React from 'react'
import './list-item.scss'

class ListItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        console.log('Is Me!')
    }

    render () {
        return (
            <div onClick={this.handleClick} className='list-item'>
                <p className='title'>{this.props.title}</p>
                <span className='content'>{this.props.content}</span>
            </div>
        )
    }
}

export default ListItem
