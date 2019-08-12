import React, { Component } from 'react';
import {connect} from 'dva'
import about from './index.css'
import ATopBar from '../../components/aTopBar/aTopBar'
import {Icon} from 'antd';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import RealtimeData from '../../components/realtimeData/index'


am4core.useTheme(am4themes_animated);

const IconFont = Icon.createFromIconfontCN({
    scriptUrl:'//at.alicdn.com/t/font_1299721_j47v96432jc.js'
})


class Account_behavior extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
      let {RealTimeData}=this.props.Overall_situationAR
        return (
            <div className={about.accountBehaviorBox}>
                {/* 标题 */}
                <h3>账号行为</h3>

                {/* 顶部分类搜索栏 */}
                <ATopBar></ATopBar>

                {/* 图表信息栏 */}
                <div className={about.tableListBox}>
                    <div className={about.onlineContainer}>
                        <h4>
                            <IconFont type="icon-zhuzhuangtutubiao"></IconFont>
                             上线情况
                        </h4>
                        <div>
                            <div id="chartdiv_One" style={{ width: "auto", height: "400px" ,margin:'0 auto'}}></div>
                        </div>
                    </div>
                    <div className={about.speechSituation}>
                        <div className="newsTip" style={{fontSize:'16px'}}>
                        {RealTimeData.length>0 && <RealtimeData RealTimeData={RealTimeData}/>}
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
                            情感分析
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
      this.props.dispatch({
        type:'Overall_situationAR/changeName'
      })

        /* 上线情况 */
        var chartOne = am4core.create("chartdiv_One", am4charts.XYChart);

        chartOne.data = generateChartData();

        var dateAxis = chartOne.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.minGridDistance = 50;

       chartOne.yAxes.push(new am4charts.ValueAxis());

        // Create series
        var series_One = chartOne.series.push(new am4charts.LineSeries());
        series_One.dataFields.valueY = "visits";
        series_One.dataFields.dateX = "date";
        series_One.strokeWidth = 2;
        series_One.minBulletDistance = 10;
        series_One.tooltipText = "{valueY}";
        series_One.tooltip.pointerOrientation = "vertical";
        series_One.tooltip.background.cornerRadius = 20;
        series_One.tooltip.background.fillOpacity = 0.5;
        series_One.tooltip.label.padding(12,12,12,12)

        // Add cursor
        chartOne.cursor = new am4charts.XYCursor();
        chartOne.cursor.xAxis = dateAxis;
        chartOne.cursor.snapToSeries = series_One;

        // Add scrollbar
        chartOne.scrollbarX = new am4charts.XYChartScrollbar();
        chartOne.scrollbarX.series.push(series_One);

        function generateChartData() {
            var chartData = [];
            var firstDate = new Date();
            firstDate.setDate(firstDate.getDate() - 1000);
            var visits = 1200;
            for (var i = 0; i < 500; i++) {
                // we create date objects here. In your data, you can have date strings
                // and then set format of your dates using chart.dataDateFormat property,
                // however when possible, use date objects, as this will speed up chart rendering.
                var newDate = new Date(firstDate);
                newDate.setDate(newDate.getDate() + i);
                
                visits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
        
                chartData.push({
                    date: newDate,
                    visits: visits
                });
            }
            return chartData;
        }
        


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

export default connect(state=>{
  return {...state}
})(Account_behavior);