import React, { Component } from 'react';
import DialogStyle from './index.css'
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render() {
        return (
            <div className={DialogStyle.wrap}>
                <div className={DialogStyle.dialog_container}>
                    <h2>添加</h2>
                    <div className={DialogStyle.content}>
                        <ul>
                            <li>
                                <span>用户</span>
                                <span>
                                    <input type="text" className={DialogStyle.inpt}/>
                                </span>
                            </li>
                            <li>
                                <span>用户密码</span>
                                <span>
                                    <input type="text" className={DialogStyle.inpt} />
                                </span>
                            </li>
                            <li>
                                <span>用户类型</span>
                                <span>
                                    <input type="text" className={DialogStyle.inpt}/>
                                </span>
                            </li>
                            <li>
                                <span>部门</span>
                                <span>
                                    <input type="text"  className={DialogStyle.inpt}/>
                                </span>
                            </li>
                            <li>
                                <span>角色</span>
                                <span>
                                    <input type="text"  className={DialogStyle.inpt}/>
                                </span>
                            </li>
                            <li>
                                <span>用户状态</span>
                                <span>
                                    <label><input type='radio' />可用</label>
                                    <label><input type='radio' />不可用</label>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className={DialogStyle.footer}>
                        <button className={DialogStyle.active}>保存</button>
                        <button onClick={()=>{this.props.cancelFlagClick()}}>取消</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default index;