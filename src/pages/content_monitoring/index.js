import React, { Component } from 'react';
import Cmonitoring from './index.css'
import AtoBar from '../../components/aTopBar/aTopBar.js'
import Showlist from '../../components/showList/index.js'
class Content_monitoring extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className={Cmonitoring.content}>
                <AtoBar />
                <div className={Cmonitoring.tabtitle}>
                    <span className={Cmonitoring.active}>监测结果</span>
                    <span>监测分析</span>
                </div>
                <Showlist />
            </div>
        );
    }
}

export default Content_monitoring;