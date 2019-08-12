import React, { Component } from 'react'
import about from './index.css'
import {Button} from 'antd'
import ShowList from '../../components/showList/index'

class Information extends Component {
    constructor(props){
        super(props)
        this.state={
            watchingFlag:true
        }
    }
    render() {
        return (
            <div className={about.informationWrap}>
                <div className={about.topNewsTip}>
                    <span>埃塞俄比亚坠机 </span>
                    <Button type="primary" ghost icon={this.state.watchingFlag?'eye':'eye-invisible'} onClick={()=>this.handleWatchFlag()}>{this.state.watchingFlag?'已关注':'未关注'}</Button>
                    <Button type="primary" icon="pie-chart">分析</Button>
                    <Button type="primary" icon="pie-chart">关联</Button>
                </div>
                <div>
                    <ShowList></ShowList>
                </div>
            </div>
        )
    }
    handleWatchFlag(){
        console.log(111)
        this.setState({
            watchingFlag:!this.state.watchingFlag
        })
    }
}
export default Information