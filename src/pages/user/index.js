import React, { Component } from 'react';
import about from './index.css'
import Dialog from '../../components/dialog/index'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cancelFlag:false
        };
    }
    render() {
        const {cancelFlag} = this.state
        return (
            <div className={about.userWrap}>
                <div className={about.checkTips}>
                    <span>用户类型</span>
                    <select name="" className={about.selectBox}>
                        <option value="请选择分类">请选择分类</option>
                    </select>
                </div>
                <div className={about.addBox} style={{width:'100%'}}>
                    <button style={{float:'right',border:0,padding:'0 5px'}} onClick={()=>this.setState({cancelFlag:true})}>
                        <b style={{fontSize:'24px',lineHeight:'18px'}}>＋</b>新增
                    </button>
                </div>
                {cancelFlag && <Dialog cancelFlagClick={()=>this.cancelFlagClick()}/>}
            </div>
        );
    }
    cancelFlagClick(){
        this.setState({
            cancelFlag:false
        })
    }
}

export default User;