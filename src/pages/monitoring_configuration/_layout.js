import React, { Component } from 'react';
import about from './_layout.css';
import { Collapse,Select,DatePicker} from 'antd';

const { Panel } = Collapse;
const { Option } = Select;
const { MonthPicker} = DatePicker;

class Monitoring_configuration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spanactiveInd:0
        };
    }
    render() {
        return (
            <div className={about.monitoringContainer}>
                {/* 顶部搜索框 */}
                <div className={about.searchContainer}>
                    <Collapse style={{border:0}}>
                        <Panel style={{border:0}} header={
                            <div className={about.searchTopContent}>
                                <input type="text" placeholder="请输入关键词..." /><button className={about.searchBtn}>搜索</button>
                                <button className={about.watchManageBtn}>监测管理</button>
                            </div>
                        } key="1">
                            <div className={about.timeContainer}>
                                通道：<Select defaultValue="全部" style={{ width: 120,marginRight:'10px'}}>
                                        <Option value="全部">全部</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="Lily">Lily</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                      </Select>
                                开始时间：<MonthPicker placeholder="请选择开始日期" style={{marginRight:'10px'}}/>
                                结束时间：<MonthPicker placeholder="请选择结束日期" />
                            </div>
                            <div style={{marginTop:'20px'}}>
                                标签：<br/>
                                <Select style={{ width: '100%'}}>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="Lily">Lily</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            </div>
                        </Panel>
                    </Collapse>
                </div>

                {/* 底部内容框 */}
                <div className={about.messageContainer}>
                    <div className={about.navContainer}>
                        <span className={this.state.spanactiveInd===0?about.spanactive:null} onClick={()=>this.toggleClass(0,'/monitoring_configuration')}>信息</span>
                        <span className={this.state.spanactiveInd===1?about.spanactive:null} onClick={()=>this.toggleClass(1,'/monitoring_configuration/accountNumber')}>账号</span>
                        <span className={this.state.spanactiveInd===2?about.spanactive:null} onClick={()=>this.toggleClass(2,'/monitoring_configuration/groups')}>群组</span>
                    </div>
                    <div className={about.contentContainer}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
    toggleClass(ind,path){
        this.setState({spanactiveInd:ind})
        console.log(this.props.history)
        this.props.history.push(path)
    }
}

export default Monitoring_configuration;