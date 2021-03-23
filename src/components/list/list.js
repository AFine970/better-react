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
        // 拿到组件实例的 props
        super(props)
        // state 创建组件自身的数据，类似于 Vue 组件里的 data
        this.state = {
            listData: [],
            count: 0
        }

        for (let i = 0; i < 10; i++) {
            this.state.listData.push({
                title: '尝试一下React',
                content: 'React真不错，真香！'
            })
        }
        // 构造要渲染的 JSX 实例数组
        this.lists = this.state.listData.map((item, index) => 
            <ListItem photoUrl="" title={item.title} content={item.content} key={index}></ListItem>
        )
        // 修改方法的指针，指向当前组件实例
        this.plus = this.plus.bind(this)
    }

    plus () {
        // 单向数据流，需要手动 setState 更新数据
        this.setState(state => ({
            count: state.count + 1
        }))
    }

    componentDidMount () {
        // 组件挂载后 开始跑计时器
        this.interval = setInterval(() => this.plus(), 1000)
    }

    componentWillUnmount () {
        clearInterval(this.interval)
    }

    render () {
        return (
            <div className='list'>
                <p>你在当前页面大概停留了{this.state.count}秒</p>
                {this.lists}
                <AddBtn></AddBtn>
            </div>
        )
    }
}

export default List