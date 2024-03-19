import { Component } from '@angular/core'
import { Chart } from 'angular-highcharts'

@Component({
  selector: 'app-statistics-section',
  templateUrl: './statistics-section.component.html',
  styleUrl: './statistics-section.component.scss'
})
export class StatisticsSectionComponent {
  //   chartOptions = {
  // 	  animationEnabled: true,
  // 	//   title:{
  // 	// 	text: "Project Cost Breakdown"
  // 	//   },
  // 	  data: [{
  // 		type: "doughnut",
  // 		yValueFormatString: "#,###.##'%'",
  // 		indexLabel: "{name}",
  // 		dataPoints: [
  // 		  { y: 28, name: "Info 1" },
  // 		  { y: 10, name: "Info 2" },
  // 		  { y: 20, name: "Info 3" },
  // 		  { y: 15, name: "Info 4" }
  // 		]
  // 	  }]
  // 	}

  //   linechartOptions = {
  // 		animationEnabled: true,
  // 		theme: "light2",
  // 		// title: {
  // 		// 	text: "Company Sales - 2023"
  // 		// },
  // 		axisX: {
  // 			valueFormatString: "MMM",
  // 			intervalType: "month",
  // 			interval: 1
  // 		},
  // 		axisY: {
  // 			title: "Temperature",
  // 		  suffix: "°F"
  // 		},
  // 		toolTip: {
  // 			shared: true
  // 		},
  // 		legend: {
  // 			cursor: "pointer",
  // 			itemclick: function(e: any){
  // 				if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
  // 					e.dataSeries.visible = false;
  // 				} else{
  // 					e.dataSeries.visible = true;
  // 				}
  // 				e.chart.render();
  // 			}
  // 		},
  // 		data: [{
  // 			type:"line",
  // 			name: "Minimum",
  // 			showInLegend: true,
  // 			yValueFormatString: "#,###°F",
  // 			dataPoints: [
  // 				{ x: new Date(2021, 0, 1), y: 27 },
  // 				{ x: new Date(2021, 1, 1), y: 28 },
  // 				{ x: new Date(2021, 2, 1), y: 35 },
  // 				{ x: new Date(2021, 3, 1), y: 45 },
  // 				{ x: new Date(2021, 4, 1), y: 54 },
  // 				{ x: new Date(2021, 5, 1), y: 64 },
  // 				{ x: new Date(2021, 6, 1), y: 69 },
  // 				{ x: new Date(2021, 7, 1), y: 68 },
  // 				{ x: new Date(2021, 8, 1), y: 61 },
  // 				{ x: new Date(2021, 9, 1), y: 50 },
  // 				{ x: new Date(2021, 10, 1), y: 41 },
  // 				{ x: new Date(2021, 11, 1), y: 33 }
  // 			]
  // 		},
  // 		{
  // 			type: "line",
  // 			name: "Maximum",
  // 			showInLegend: true,
  // 			yValueFormatString: "#,###°F",
  // 			dataPoints: [
  // 				{ x: new Date(2021, 0, 1), y: 40 },
  // 				{ x: new Date(2021, 1, 1), y: 42 },
  // 				{ x: new Date(2021, 2, 1), y: 50 },
  // 				{ x: new Date(2021, 3, 1), y: 62 },
  // 				{ x: new Date(2021, 4, 1), y: 72 },
  // 				{ x: new Date(2021, 5, 1), y: 80 },
  // 				{ x: new Date(2021, 6, 1), y: 85 },
  // 				{ x: new Date(2021, 7, 1), y: 84 },
  // 				{ x: new Date(2021, 8, 1), y: 76 },
  // 				{ x: new Date(2021, 9, 1), y: 64 },
  // 				{ x: new Date(2021, 10, 1), y: 54 },
  // 				{ x: new Date(2021, 11, 1), y: 44 }
  // 			]
  // 		}]
  // 	}

  title = 'angular-charts-youtube'

  lineChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Patients'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Patients admitted',
        data: [10, 2, 3, 6, 9, 17, 20, 10, 5, 2, 16]
      } as any
    ]
  })

  pieChart = new Chart({
    chart: {
      type: 'pie',
      plotShadow: false
    },

    credits: {
      enabled: false
    },

    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 10,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0
        }
      }
    },

    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Diseases'
    },

    legend: {
      enabled: false
    },

    series: [
      {
        type: 'pie',
        data: [
          { name: 'COVID 19', y: 1, color: '#eeeeee' },

          { name: 'HIV/AIDS', y: 2, color: '#393e46' },

          { name: 'EBOLA', y: 3, color: '#00adb5' },
          { name: 'DISPORA', y: 4, color: '#eeeeee' },
          { name: 'DIABETES', y: 5, color: '#506ef9' }
        ]
      }
    ]
  })
}
