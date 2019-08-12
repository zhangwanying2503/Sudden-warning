import React, { Component } from 'react'
import about from './accountNumber.css'
import { Row, Col, Button } from 'antd';

class AccountNumber extends Component {
    constructor(props){
        super(props)
        this.state={
            watchingFlag:true
        }
    }
    render() {
        return (
            <div className={about.accountWrap}>
                <Row className={about.titleBox}>
                    <Col span={10}>账号名称</Col>
                    <Col span={10}>相关描述</Col>
                    <Col span={4}></Col>
                </Row>
                <Row className={about.contentBox}>
                    <Col span={10} className={about.colTitle}>Metronic Admin Reborn</Col>
                    <Col span={10} className={about.colContent}><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy sead euismod dolore tincidunt ut laoreet dolore dolor sit amet</p></Col>
                    <Col span={4} className={about.colBtn}>
                        <Button type="primary" icon={this.state.watchingFlag?'eye':'eye-invisible'} onClick={()=>this.handleWatchFlag()}>{this.state.watchingFlag?'已关注':'未关注'}</Button>
                        <Button type="primary" icon="pie-chart">分析</Button>
                        <Button type="primary" icon="pie-chart">关联</Button>
                    </Col>
                </Row>
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
export default AccountNumber