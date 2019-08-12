import React, { Component } from 'react';
import about from './index.css'
import ATopBar from '../../components/aTopBar/aTopBar'
import {Icon} from 'antd';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);

const IconFont = Icon.createFromIconfontCN({
    scriptUrl:'//at.alicdn.com/t/font_1299721_j47v96432jc.js'
})


class Account_behavior extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render() {
        return (
            <div className={about.accountBehaviorBox}>
                {/* 标题 */}
                <h3>群组特征</h3>

                {/* 顶部分类搜索栏 */}
                <ATopBar></ATopBar>

                {/* 图表信息栏 */}
                <div className={about.tableListBox}>
                    <div className={about.onlineContainer}>
                        <h4>
                            <IconFont type="icon-zhuzhuangtutubiao"></IconFont>
                             活跃度
                        </h4>
                        <div>
                            <div id="chartdiv_One" style={{ width: "auto", height: "400px" ,margin:'0 auto'}}></div>
                        </div>
                    </div>
                    <div className={about.speechSituation}>
                        <h4>
                            <IconFont type="icon-zhuzhuangtutubiao"></IconFont>
                             信息发布量
                        </h4>
                        <div>
                            <div id="chartdiv_Three" style={{ width: "auto", height: "400px" ,margin:'0 auto'}}></div>
                        </div>
                    </div>
                    <div className={about.contentPreference}>
                        <h4>
                            <IconFont type="icon-zhuzhuangtutubiao"></IconFont>
                             内容偏好
                        </h4>
                        <div className={about.pieOne}>
                            <div id="chartdiv" style={{ width: "auto", height: "200px" ,margin:'0 auto'}}></div>
                        </div>
                    </div>
                    <div className={about.emotionEnalyse}>
                        <h4>
                            <IconFont type="icon-zhuzhuangtutubiao"></IconFont>
                            群内人数
                        </h4>
                        <div className={about.pieTwo}>
                            <div id="chartdivTwo" style={{ width: "auto", height: "200px" ,margin:'0 auto'}}></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {

        /* 活跃度 */
        var chartOne = am4core.create("chartdiv_One", am4charts.XYChart3D);
        chartOne.paddingBottom = 30;
        chartOne.angle = 35;

        // Add data
        chartOne.data = [{
        "country": "USA",
        "visits": 4025
        }, {
        "country": "Netherlands",
        "visits": 665
        }, {
            "country": "UK",
            "visits": 2122
        }, {
        "country": "Brazil",
        "visits": 395
        }, {
        "country": "Taiwan",
        "visits": 338
        }];

        // Create axes
        let categoryAxis = chartOne.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "country";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 20;
        categoryAxis.renderer.inside = true;
        categoryAxis.renderer.grid.template.disabled = true;

        let labelTemplate = categoryAxis.renderer.labels.template;
        labelTemplate.rotation = -90;
        labelTemplate.horizontalCenter = "left";
        labelTemplate.verticalCenter = "middle";
        labelTemplate.dy = 10; // moves it a bit down;
        labelTemplate.inside = false; // this is done to avoid settings which are not suitable when label is rotated

        let valueAxis = chartOne.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.grid.template.disabled = true;

        // Create series
        let series_One = chartOne.series.push(new am4charts.ConeSeries());
        series_One.dataFields.valueY = "visits";
        series_One.dataFields.categoryX = "country";

        let columnTemplate = series_One.columns.template;
        columnTemplate.adapter.add("fill", function(fill, target) {
        return chartOne.colors.getIndex(target.dataItem.index);
        })

        columnTemplate.adapter.add("stroke", function(stroke, target) {
        return chartOne.colors.getIndex(target.dataItem.index);
        })


        /* 信息发布量 */
        var chartThree = am4core.create("chartdiv_Three", am4charts.XYChart3D);
        chartThree.paddingBottom = 30;
        chartThree.angle = 35;

        // Add data
        chartThree.data = [{
            "country": "Russia",
            "visits": 580
          }, {
            "country": "South Korea",
            "visits": 443
          }, {
            "country": "Canada",
            "visits": 441
          }, {
            "country": "Brazil",
            "visits": 395
          }, {
            "country": "Italy",
            "visits": 386
          }, {
            "country": "Taiwan",
            "visits": 338
          }];
          

        // Create axes
        let categoryAxis_Three = chartThree.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis_Three.dataFields.category = "country";
        categoryAxis_Three.renderer.grid.template.location = 0;
        categoryAxis_Three.renderer.minGridDistance = 20;
        categoryAxis_Three.renderer.inside = true;
        categoryAxis_Three.renderer.grid.template.disabled = true;

        let labelTemplate_Three = categoryAxis_Three.renderer.labels.template;
        labelTemplate_Three.rotation = -90;
        labelTemplate_Three.horizontalCenter = "left";
        labelTemplate_Three.verticalCenter = "middle";
        labelTemplate_Three.dy = 10; // moves it a bit down;
        labelTemplate_Three.inside = false; // this is done to avoid settings which are not suitable when label is rotated

        let valueAxis_Three = chartThree.yAxes.push(new am4charts.ValueAxis());
        valueAxis_Three.renderer.grid.template.disabled = true;

        // Create series
        let series_Three = chartThree.series.push(new am4charts.ConeSeries());
        series_Three.dataFields.valueY = "visits";
        series_Three.dataFields.categoryX = "country";

        let columnTemplate_Three = series_Three.columns.template;
        columnTemplate_Three.adapter.add("fill", function(fill, target) {
        return chartThree.colors.getIndex(target.dataItem.index);
        })

        columnTemplate_Three.adapter.add("stroke", function(stroke, target) {
        return chartThree.colors.getIndex(target.dataItem.index);
        })


        /* 内容偏好 */
        let chart = am4core.create("chartdiv", am4charts.PieChart);

        chart.paddingRight = 20;

        chart.data = [ {
            "country": "Lithuania",
            "litres": 501.9
          }, {
            "country": "Czechia",
            "litres": 301.9
          }, {
            "country": "Ireland",
            "litres": 201.1
          }, {
            "country": "Germany",
            "litres": 165.8
          }, {
            "country": "Australia",
            "litres": 139.9
          }, {
            "country": "Austria",
            "litres": 128.3
          }, {
            "country": "UK",
            "litres": 99
          }, {
            "country": "Belgium",
            "litres": 60
          }, {
            "country": "The Netherlands",
            "litres": 50
          } ];
          
        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "litres";
        pieSeries.dataFields.category = "country";
        this.chart = chart;

        /* 情感分析 */
        let chart_two = am4core.create("chartdivTwo", am4charts.PieChart3D);
        chart_two.hiddenState.properties.opacity = 0; // this creates initial fade-in

        chart_two.data = [
        {
            country: "Lithuania",
            litres: 501.9
        },
        {
            country: "Czech Republic",
            litres: 301.9
        },
        {
            country: "Ireland",
            litres: 201.1
        },
        {
            country: "Germany",
            litres: 165.8
        },
        {
            country: "Australia",
            litres: 139.9
        },
        {
            country: "Austria",
            litres: 128.3
        },
        {
            country: "UK",
            litres: 99
        },
        {
            country: "Belgium",
            litres: 60
        },
        {
            country: "The Netherlands",
            litres: 50
        }
        ];

        let series = chart_two.series.push(new am4charts.PieSeries3D());
        series.dataFields.value = "litres";
        series.dataFields.category = "country";
        this.chart_two=chart_two
    }
    
    componentWillUnmount() {
        if (this.chart) {
          this.chart.dispose();
          this.chart_two.dispose();
        }
    }
}

export default Account_behavior;