import React, { Component } from 'react';
import about from './index.css'
import { Row, Col } from 'antd';

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ind:0
        };
    }
    render() {
        return (
            <div className={about.accountWrap}>
                <ul>
                    <li className={this.state.ind===0?about.liactive:null} onClick={()=>this.handleLi(0)}>WhatApp监控账户信息</li>
                    <li className={this.state.ind===1?about.liactive:null} onClick={()=>this.handleLi(1)}>用户信息</li>
                </ul>
                <div className={`${about.contentContainer} ${this.state.ind===0?about.showView:null}`}>
                    <Row className={about.titleContainer}>
                        <Col span={3} className={about}>账户</Col>
                        <Col span={7}>最近登陆时间</Col>
                        <Col span={7}>登录状态</Col>
                        <Col span={7}>群组列表</Col>
                    </Row>
                </div>
                <div className={`${about.contentWrapper} ${this.state.ind===1?about.showView:null}`}>
                    <Row className={about.titleContainer}>
                            <Col span={6} className={about}>群组内用户</Col>
                            <Col span={3}>头像</Col>
                            <Col span={7}>最近发言时间</Col>
                            <Col span={8}>用户加入的群组</Col>
                    </Row>
                </div>
            </div>
        );
    }
    handleLi(ind){
        this.setState({
            ind:ind
        })
    }
}

export default Account;