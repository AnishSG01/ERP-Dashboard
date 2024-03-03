import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics-section',
  templateUrl: './statistics-section.component.html',
  styleUrl: './statistics-section.component.scss'
})
export class StatisticsSectionComponent {
  chartOptions = {
	  animationEnabled: true,
	//   title:{
	// 	text: "Project Cost Breakdown"
	//   },
	  data: [{
		type: "doughnut",
		yValueFormatString: "#,###.##'%'",
		indexLabel: "{name}",
		dataPoints: [
		  { y: 28, name: "Info 1" },
		  { y: 10, name: "Info 2" },
		  { y: 20, name: "Info 3" },
		  { y: 15, name: "Info 4" }
		]
	  }]
	}

  linechartOptions = {
		animationEnabled: true,
		theme: "light2",
		// title: {
		// 	text: "Company Sales - 2023"
		// },
		axisX: {
			valueFormatString: "MMM",
			intervalType: "month",
			interval: 1
		},
		axisY: {
			title: "Temperature",
		  suffix: "°F"
		},
		toolTip: {
			shared: true
		},
		legend: {
			cursor: "pointer",
			itemclick: function(e: any){
				if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
					e.dataSeries.visible = false;
				} else{
					e.dataSeries.visible = true;
				}
				e.chart.render();
			}
		},
		data: [{
			type:"line",
			name: "Minimum",
			showInLegend: true,
			yValueFormatString: "#,###°F",
			dataPoints: [		
				{ x: new Date(2021, 0, 1), y: 27 },
				{ x: new Date(2021, 1, 1), y: 28 },
				{ x: new Date(2021, 2, 1), y: 35 },
				{ x: new Date(2021, 3, 1), y: 45 },
				{ x: new Date(2021, 4, 1), y: 54 },
				{ x: new Date(2021, 5, 1), y: 64 },
				{ x: new Date(2021, 6, 1), y: 69 },
				{ x: new Date(2021, 7, 1), y: 68 },
				{ x: new Date(2021, 8, 1), y: 61 },
				{ x: new Date(2021, 9, 1), y: 50 },
				{ x: new Date(2021, 10, 1), y: 41 },
				{ x: new Date(2021, 11, 1), y: 33 }
			]
		},
		{
			type: "line",
			name: "Maximum",
			showInLegend: true,
			yValueFormatString: "#,###°F",
			dataPoints: [
				{ x: new Date(2021, 0, 1), y: 40 },
				{ x: new Date(2021, 1, 1), y: 42 },
				{ x: new Date(2021, 2, 1), y: 50 },
				{ x: new Date(2021, 3, 1), y: 62 },
				{ x: new Date(2021, 4, 1), y: 72 },
				{ x: new Date(2021, 5, 1), y: 80 },
				{ x: new Date(2021, 6, 1), y: 85 },
				{ x: new Date(2021, 7, 1), y: 84 },
				{ x: new Date(2021, 8, 1), y: 76 },
				{ x: new Date(2021, 9, 1), y: 64 },
				{ x: new Date(2021, 10, 1), y: 54 },
				{ x: new Date(2021, 11, 1), y: 44 }
			]
		}]
	}

	


//   columnchartOptions = {
//     title:{
//       text: "Company Sales Report"  
//     },
//     animationEnabled: true,
//     axisX: {
//       interval: 1
//     },
//     axisY: {
//       valueFormatString: "\u20B9#,##0,.L",
//       title: "Amount (in INR)"
//     },
//     data: [{        
//       type: "waterfall",
//       yValueFormatString: "\u20B9#,##0,.00L",
//       indexLabel: "{y}",
//       indexLabelPlacement: "inside",
//       risingColor: "#4CAF50",
//       fallingColor: "#F44336",
//       dataPoints: [
//         { label: "Jan", y: 8312 },
//         { label: "Feb", y: 5065 },
//         { label: "Mar", y: -2564 },
//         { label: "Apr", y: 7004},
//         { label: "May", y: 4324 },
//         { label: "Jun", y: -3543 },
//         { label: "July", y: 4008 },
//         { label: "Sep", y: -6997 },
//         { label: "Aug", y: 5673 },
//         { label: "Oct", y: 6654 },
//         { label: "Nov", y: -4943 },
//         { label: "Dec", y: 6324 },
//         { label: "Final", isCumulativeSum: true, indexLabel: "{y}", color: "#2196F3" }
//       ]
//     }]
//   }
}
