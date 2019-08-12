import React, { Component } from 'react';
import about from './index.css'
import ATopBar from '../../components/aTopBar/aTopBar'
import {Select,Input,Button} from 'antd';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected"; 
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);

const {Option} = Select;

class Correlation_analysis extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className={about.correlationWrap}>
                <h2>关联分析</h2>
                <ATopBar></ATopBar>
                <div className={about.contentWrap}>
                    <div className={about.searchBox}>
                        <Select mode="multiple" style={{ width: '200px',marginLeft:'30px'}} placeholder="请选择分类" optionLabelProp="label">
                            <Option value="账号" label="账号">账号</Option>
                            <Option value="群组" label="群组">群组</Option>
                            <Option value="邮箱" label="邮箱">邮箱</Option>
                        </Select>
                        <Input placeholder="请输入实体词" style={{marginLeft:'30px'}} />
                        <Button type="primary" style={{marginLeft:'30px'}}>搜索实体</Button>
                    </div>
                    <div className={about.drawWrap}>
                        <div id="chartdiv" style={{width:'100%',height:'500px'}}></div>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount(){
        let chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);
        let networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

        chart.data = [
        {
            name: "Core",
            children: [
            {
                name: "First",
                children: [
                { name: "A1", value: 100 },
                { name: "A2", value: 60 }
                ]
            },
            {
                name: "Second",
                children: [
                { name: "B1", value: 135 },
                { name: "B2", value: 98 }
                ]
            },
            {
                name: "Third",
                children: [
                {
                    name: "C1",
                    children: [
                    { name: "EE1", value: 130 },
                    { name: "EE2", value: 87 },
                    { name: "EE3", value: 55 }
                    ]
                },
                { name: "C2", value: 148 },
                {
                    name: "C3", children: [
                    { name: "CC1", value: 53 },
                    { name: "CC2", value: 30 }
                    ]
                },
                { name: "C4", value: 26 }
                ]
            },
            {
                name: "Fourth",
                children: [
                { name: "D1", value: 415 },
                { name: "D2", value: 148 },
                { name: "D3", value: 89 }
                ]
            },
            {
                name: "Fifth",
                children: [
                {
                    name: "E1",
                    children: [
                    { name: "EE1", value: 33 },
                    { name: "EE2", value: 40 },
                    { name: "EE3", value: 89 }
                    ]
                },
                {
                    name: "E2",
                    value: 148
                }
                ]
            }

            ]
        }
        ];

        networkSeries.dataFields.value = "value";
        networkSeries.dataFields.name = "name";
        networkSeries.dataFields.children = "children";
        networkSeries.nodes.template.tooltipText = "{name}:{value}";
        networkSeries.nodes.template.fillOpacity = 1;
        networkSeries.manyBodyStrength = -20;
        networkSeries.links.template.strength = 0.8;
        networkSeries.minRadius = am4core.percent(2);

        networkSeries.nodes.template.label.text = "{name}"
        networkSeries.fontSize = 10;
    }
}

export default Correlation_analysis;