import React, { Component } from 'react';
import {connect} from 'dva'
import Showliststyle from './index.css'

class Showlist extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const {ShowList}=this.props.Content_monitoringAR
        return (
            <div className={Showliststyle.showlist}>
                <div className={Showliststyle.titles}>
                    <span className={Showliststyle.showtit}>列表展示</span> 
                    <p className={Showliststyle.num}>总数：<span>{ShowList && ShowList.length}</span></p>
                </div>
                <div className={Showliststyle.listbox}>
                    {
                        ShowList && ShowList.map((item,index)=>{
                            return <div className={`${Showliststyle.list} ${index%2===1?Showliststyle.bgcolor:null}`} key={item.id}>
                            <h2>{item.title}</h2>
                            <p className={Showliststyle.detail}>
                                <span className={Showliststyle.timer}>时间：<span>{item.timer}</span></span>
                                <span className={Showliststyle.targets}>
                                    来源：
                                    <span className={Showliststyle.tarname}>{item.from}</span>
                                    <span className={Showliststyle.source}>原</span>
                                </span>
                            </p>
                            <p className={Showliststyle.types}>
                                <span>{item.country}</span>
                                <span>{item.types}</span>
                            </p>
                        </div>
                        })
                    }
                </div>
            </div>
        );
    }
    componentDidMount(){
        this.props.dispatch({
            type:"Content_monitoringAR/getShowListData"
        })
    }
}

export default connect(state=>{
    return {...state}
})(Showlist);