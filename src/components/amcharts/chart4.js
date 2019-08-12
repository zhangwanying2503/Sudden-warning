import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated"
class chart4 extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div id="chart4" style={{ height: 404 }}></div>
        );
    }
    componentDidMount(){
        const {getChartData}=this.props
        am4core.useTheme(am4themes_animated);
    let chart4 = am4core.create("chart4", am4charts.XYChart);

    // Add data
    chart4.data =getChartData;

    // Create axes

    let categoryAxis = chart4.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    // categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
    //   if (target.dataItem && target.dataItem.index & 2 == 2) {
    //     return dy + 25;
    //   }
    //   return dy;
    // });

    chart4.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart4.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.name = "Visits";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = .8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
    }
}

export default chart4;