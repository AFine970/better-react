/*
 * @Author: cunhang_wwei
 * @Date: 2021-03-16 20:04:36
 */

import React from 'react'
import './btn.scss'

class AddBtn extends React.Component {
    constructor (props) {
        super(props)
        
        this.handleClick  = this.handleClick.bind(this)
    }

    handleClick (event) {
        event.preventDefault()
        console.log('add')
    }

    render () {
        return (
            <button onClick={this.handleClick} className='good-btn'>添加</button>
        )
    }
}

export default AddBtn