/*
 * @Author: cunhang_wei
 * @Date: 2021-03-13 12:38:01
 */
// import React from 'react'
import React from 'react'
import './list.scss'
import ListItem from '../ListItem/list-item'
import AddBtn from '../AddBtn/btn'

class List extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            listData: [{
                title: '我就尝试一下',
                content: '12313213123123213213213213123132'
            },{
                title: '尝试一下React',
                content: '0009089087080867868977897098'
            },{
                title: '我就尝试一下',
                content: '12313213123123213213213213123132'
            }, {
                title: '尝试一下React',
                content: '0009089087080867868977897098'
            },{
                title: '我就尝试一下',
                content: '12313213123123213213213213123132'
            }, {
                title: '尝试一下React',
                content: '0009089087080867868977897098'
            },{
                title: '我就尝试一下',
                content: '12313213123123213213213213123132'
            },{
                title: '尝试一下React',
                content: '0009089087080867868977897098'
            },{
                title: '我就尝试一下',
                content: '12313213123123213213213213123132'
            }, {
                title: '尝试一下React',
                content: '0009089087080867868977897098'
            },{
                title: '我就尝试一下',
                content: '12313213123123213213213213123132'
            }, {
                title: '尝试一下React',
                content: '0009089087080867868977897098'
            }]
        }

        this.lists = this.state.listData.map((item, index) => 
            <ListItem photoUrl="" title={item.title} content={item.content} key={index}></ListItem>
        )
        // this.plus = this.plus.bind(this)
    }

    // plus () {
    //     this.setState(state => ({
    //         nums: state.nums + 1
    //     }))
    // }

    componentDidMount () {
        // this.interval = setInterval(() => this.plus(), 1000)
    }

    componentWillUnmount () {
        // clearInterval(this.interval)
    }

    render () {
        return (
            <div className='list'>
                {this.lists}
                <AddBtn></AddBtn>
            </div>
        )
    }
}

export default List
