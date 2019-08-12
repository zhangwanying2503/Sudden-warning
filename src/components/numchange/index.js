import React, { Component } from 'react';
import numstyle from './index.css'
import CountUp from 'react-countup';
class Numchange extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        let {values,suffix,timer} =this.props
        return (
            <div className={numstyle.topcon}>
                <div className={numstyle.numcon}>
                    <CountUp
                    className={numstyle.accountbalance}
                    start={0}
                    end={values}
                    duration={timer}
                    useEasing={true}
                    useGrouping={true}
                    separator=" "
                    decimal=""
                    prefix=" "
                />
                <h2 className={numstyle.numtit}>{suffix}</h2>
                </div>
                
                <h6>全部数据量</h6>
                <p><span>今日数据量</span><span className={numstyle.todaynum}>300</span></p>
            </div>
        );
    }
    componentWillMount() {

    }
    componentDidMount() {
    }
}

export default Numchange;


