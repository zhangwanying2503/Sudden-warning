import React, { Component } from 'react';
import realtimeStyle from './index.css'
import Icon from 'antd/es/icon';
class RealtimeData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ind: 0,
            filterRealTimeData: []
        };
    }
    render() {
        let { ind, filterRealTimeData } = this.state
        return (
            <div className={realtimeStyle.content}>
                <p>
                    实时数据
                    <span className={realtimeStyle.tabtit}>
                        <span className={ind === 0 ? realtimeStyle.active : null} onClick={() => { this.clickFilterRealTimeData(0) }}>突发事件</span>
                        <span className={ind === 1 ? realtimeStyle.active : null} onClick={() => { this.clickFilterRealTimeData(1) }}>热点事件</span>
                    </span>
                </p>
                <div className={realtimeStyle.tabcon}>
                    <ul>
                        {
                            filterRealTimeData.map(item =>
                                <li key={item.id}>
                                    <p>
                                        <i><Icon style={{ background: item.bg }} type={item.icon} /></i>
                                        <span>{item.title}</span>
                                    </p>

                                    <span>{item.time}</span>
                                </li>
                            )
                        }
                    </ul>

                </div>
            </div>
        );
    }
    clickFilterRealTimeData(index) {
        let { RealTimeData } = this.props
        const filterRealTimeData = RealTimeData.filter(item => item.type === index)
        this.setState({
            ind: index,
            filterRealTimeData: filterRealTimeData
        })

    }
    componentDidMount() {
        let { RealTimeData } = this.props
        const InitRealTimeData =RealTimeData.filter(item => item.type === this.state.ind)
        this.setState({
            filterRealTimeData: InitRealTimeData
        })

    }
}

export default RealtimeData;