$(function () {
	var totalRevenue = 4712,
			totalVisitors = 392;
	

	// data for drilldown charts
	var dataMonthlyRevenueByCategory = {
		"Espresso": {
			color: "#393f63",
			markerSize: 0,
			name: "Espresso",
			type: "column",
			yValueFormatString: "€##,###.00",
			dataPoints: [
				{ x: new Date("27 Oct 2020"), y: 47.50 },
				{ x: new Date("28 Oct 2020"), y: 86.00 },
				{ x: new Date("29 Oct 2020"), y: 82.00 },
				{ x: new Date("30 Oct 2020"), y: 94.00 },
				{ x: new Date("31 Oct 2020"), y: 94.00 },
				{ x: new Date("1 Nov 2020"), y: 82.00 },
				{ x: new Date("2 Nov 2020"), y: 111.00 },
				{ x: new Date("3 Nov 2020"), y: 79.00 },
				{ x: new Date("4 Nov 2020"), y: 95.00 },
				{ x: new Date("5 Nov 2020"), y: 103.00 },
				{ x: new Date("6 Nov 2020"), y: 90.00 },
				{ x: new Date("7 Nov 2020"), y: 101.00 }
			]
		},
		"Ice Coffee": {
			color: "#e5d8b0",
			markerSize: 0,
			name: "Ice Coffee",
			type: "column",
			yValueFormatString: "€##,###.00",
			dataPoints: [
				{ x: new Date("27 Oct 2020"), y: 60.50 },
				{ x: new Date("28 Oct 2020"), y: 85.00 },
				{ x: new Date("29 Oct 2020"), y: 93.00 },
				{ x: new Date("30 Oct 2020"), y: 79.00 },
				{ x: new Date("31 Oct 2020"), y: 81.00 },
				{ x: new Date("1 Nov 2020"), y: 92.00 },
				{ x: new Date("2 Nov 2020"), y: 105.00 },
				{ x: new Date("3 Nov 2020"), y: 42.00 },
				{ x: new Date("4 Nov 2020"), y: 89.00 },
				{ x: new Date("5 Nov 2020"), y: 71.00 },
				{ x: new Date("6 Nov 2020"), y: 49.00 },
				{ x: new Date("7 Nov 2020"), y: 48.00 }
			]
		},
		"Latte": {
			color: "#ffb367",
			markerSize: 0,
			name: "Latte",
			type: "column",
			yValueFormatString: "€##,###.00",
			dataPoints: [
				{ x: new Date("27 Oct 2020"), y: 27.50 },
				{ x: new Date("28 Oct 2020"), y: 96.00 },
				{ x: new Date("29 Oct 2020"), y: 90.00 },
				{ x: new Date("30 Oct 2020"), y: 133.00 },
				{ x: new Date("31 Oct 2020"), y: 127.00 },
				{ x: new Date("1 Nov 2020"), y: 132.00 },
				{ x: new Date("2 Nov 2020"), y: 141.00 },
				{ x: new Date("3 Nov 2020"), y: 102.00 },
				{ x: new Date("4 Nov 2020"), y: 129.00 },
				{ x: new Date("5 Nov 2020"), y: 113.00 },
				{ x: new Date("6 Nov 2020"), y: 130.00 },
				{ x: new Date("7 Nov 2020"), y: 138.00 }
			]
		},
		"Latte macchiato": {
			color: "#f98461",
			markerSize: 0,
			name: "Latte macchiato",
			type: "column",
			yValueFormatString: "€##,###.00",
			dataPoints: [
				{ x: new Date("27 Oct 2020"), y: 39.00 },
				{ x: new Date("28 Oct 2020"), y: 90.00 },
				{ x: new Date("29 Oct 2020"), y: 88.00 },
				{ x: new Date("30 Oct 2020"), y: 122.00 },
				{ x: new Date("31 Oct 2020"), y: 125.00 },
				{ x: new Date("1 Nov 2020"), y: 118.00 },
				{ x: new Date("2 Nov 2020"), y: 98.00 },
				{ x: new Date("3 Nov 2020"), y: 116.00 },
				{ x: new Date("4 Nov 2020"), y: 126.00 },
				{ x: new Date("5 Nov 2020"), y: 108.00 },
				{ x: new Date("6 Nov 2020"), y: 122.00 },
				{ x: new Date("7 Nov 2020"), y: 123.00 }
			]
		},
		"Others": {
			color: "#d9695f",
			markerSize: 0,
			name: "Others",
			type: "column",
			yValueFormatString: "€##,###.00",
			dataPoints: [
				{ x: new Date("27 Oct 2020"), y: 87.50 },
				{ x: new Date("28 Oct 2020"), y: 106.00 },
				{ x: new Date("29 Oct 2020"), y: 60.00 },
				{ x: new Date("30 Oct 2020"), y: 53.00 },
				{ x: new Date("31 Oct 2020"), y: 67.00 },
				{ x: new Date("1 Nov 2020"), y: 42.00 },
				{ x: new Date("2 Nov 2020"), y: 61.00 },
				{ x: new Date("3 Nov 2020"), y: 52.00 },
				{ x: new Date("4 Nov 2020"), y: 59.00 },
				{ x: new Date("5 Nov 2020"), y: 63.00 },
				{ x: new Date("6 Nov 2020"), y: 80.00 },
				{ x: new Date("7 Nov 2020"), y: 43.00 }
			]
		}
	};
	
	// data for drilldown charts
	var dataVisitors = {
		"New vs Regular Customers": [
			{
				click: visitorsChartDrilldownHandler,
				cursor: "pointer",
				explodeOnClick: false,
				innerRadius: "75%",
				legendMarkerType: "square",
				name: "New vs Regular Customers",
				radius: "100%",
				showInLegend: true,
				startAngle: 90,
				type: "doughnut",
				dataPoints: [
					{ y: 169, name: "New Customers", color: "#393f63" },
					{ y: 223, name: "Regular Customers", color: "#f98461" }
				]
			}
		],
		"New Customers": [
			{
				color: "#393f63",
				name: "New Customers",
				type: "column",
				dataPoints: [
					{ x: new Date("27 Oct 2020"), y: 17 },
					{ x: new Date("28 Oct 2020"), y: 20 },
					{ x: new Date("29 Oct 2020"), y: 13 },
					{ x: new Date("30 Oct 2020"), y: 21 },
					{ x: new Date("31 Oct 2020"), y: 19 },
					{ x: new Date("1 Nov 2020"), y: 15 },
					{ x: new Date("2 Nov 2020"), y: 16 },
					{ x: new Date("3 Nov 2020"), y: 10 },
					{ x: new Date("4 Nov 2020"), y: 8 },
					{ x: new Date("5 Nov 2020"), y: 11 },
					{ x: new Date("6 Nov 2020"), y: 9 },
					{ x: new Date("7 Nov 2020"), y: 10 }
				]
			}
		],
		"Regular Customers": [
			{
				color: "#f98461",
				name: "Regular Customers",
				type: "column",
				dataPoints: [
					{ x: new Date("27 Oct 2020"), y: 19 },
					{ x: new Date("28 Oct 2020"), y: 17 },
					{ x: new Date("29 Oct 2020"), y: 18 },
					{ x: new Date("30 Oct 2020"), y: 24 },
					{ x: new Date("31 Oct 2020"), y: 22 },
					{ x: new Date("1 Nov 2020"), y: 19 },
					{ x: new Date("2 Nov 2020"), y: 21 },
					{ x: new Date("3 Nov 2020"), y: 15 },
					{ x: new Date("4 Nov 2020"), y: 10 },
					{ x: new Date("5 Nov 2020"), y: 19 },
					{ x: new Date("6 Nov 2020"), y: 19 },
					{ x: new Date("7 Nov 2020"), y: 20 }
				]
			}
		]
	};
	
	// CanvasJS spline area chart to show revenue from Jan 2020 - Dec 2020
	var revenueSplineAreaChart = new CanvasJS.Chart("revenue-spline-area-chart", {
		animationEnabled: true,
		backgroundColor: "transparent",
		axisX: {
			interval: 2,
			intervalType: "day",
			labelFontColor: "#717171",
			labelFontSize: 16,
			lineColor: "#a2a2a2",
			minimum: new Date("27 Oct 2020"),
			tickColor: "#a2a2a2",
			valueFormatString: "DD MMM YYYY"
		},
		axisY: {
			gridThickness: 0,
			includeZero: false,
			labelFontColor: "#717171",
			labelFontSize: 16,
			lineColor: "#a2a2a2",
			prefix: "€",
			tickColor: "#a2a2a2"
		},
		toolTip: {
			borderThickness: 0,
			cornerRadius: 0,
			fontStyle: "normal"
		},
		data: [
			{
				color: "#393f63",
				markerSize: 0,
				type: "splineArea",
				yValueFormatString: "€###,###.##",
				dataPoints: [
					{ x: new Date("27 Oct 2020"), y: 313 },
					{ x: new Date("28 Oct 2020"), y: 274 },
					{ x: new Date("29 Oct 2020"), y: 290 },
					{ x: new Date("30 Oct 2020"), y: 412 },
					{ x: new Date("31 Oct 2020"), y: 302 },
					{ x: new Date("1 Nov 2020"), y: 544 },
					{ x: new Date("2 Nov 2020"), y: 320 },
					{ x: new Date("3 Nov 2020"), y: 381 },
					{ x: new Date("4 Nov 2020"), y: 465 },
					{ x: new Date("5 Nov 2020"), y: 391 },
					{ x: new Date("6 Nov 2020"), y: 378 },
					{ x: new Date("7 Nov 2020"), y: 414 }
				]
			}
		]
	});
	
	revenueSplineAreaChart.render();
	
	// CanvasJS pie chart to show annual revenue by category
	var annualRevenueByCategoryPieChart = new CanvasJS.Chart("annual-revenue-by-category-pie-chart", {
		animationEnabled: true,
		backgroundColor: "transparent",
		legend: {
			fontFamily: "calibri",
			fontSize: 14,
			horizontalAlign: "left",
			verticalAlign: "center",
			itemTextFormatter: function (e) {
				return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / totalRevenue * 100) + "%";  
			}
		},
		toolTip: {
			backgroundColor: "#ffffff",
			cornerRadius: 0,
			fontStyle: "normal",
			contentFormatter: function (e) {
				return e.entries[0].dataPoint.name + ": " + CanvasJS.formatNumber(e.entries[0].dataPoint.y, "€###,###.00") + " - " + Math.round(e.entries[0].dataPoint.y / totalRevenue * 100) + "%";  
			}
		},
		data: [
			{
				click: monthlyRevenueByCategoryDrilldownHandler,
				cursor: "pointer",
				legendMarkerType: "square",
				showInLegend: true,
				startAngle: 90,
				type: "pie",
				dataPoints: [
					{ y: 1023.50, name:"Espresso", color: "#393f63" },
					{ y: 784.50, name:"Ice Coffee", color: "#e5d8b0" },
					{ y: 934.00, name:"Latte", color: "#ffb367" },
					{ y: 1303.00, name:"Latte macchiato", color: "#f98461" },
					{ y: 606.00, name:"Others", color: "#d9695f" }
				]
			}
		]
	});
	
	// CanvasJS pie chart to show annual revenue by category
	var annualRevenueByCategoryPieChart1 = new CanvasJS.Chart("annual-revenue-offers", {
		animationEnabled: true,
		backgroundColor: "transparent",
		legend: {
			fontFamily: "calibri",
			fontSize: 14,
			horizontalAlign: "left",
			verticalAlign: "center",
			itemTextFormatter: function (e) {
				return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / totalRevenue * 100) + "%";  
			}
		},
		toolTip: {
			backgroundColor: "#ffffff",
			cornerRadius: 0,
			fontStyle: "normal",
			contentFormatter: function (e) {
				return e.entries[0].dataPoint.name + ": " + CanvasJS.formatNumber(e.entries[0].dataPoint.y, "€###,###.00") + " - " + Math.round(e.entries[0].dataPoint.y / totalRevenue * 100) + "%";  
			}
		},
		data: [
			{
				click: monthlyRevenueByCategoryDrilldownHandler1,
				cursor: "pointer",
				legendMarkerType: "square",
				showInLegend: true,
				startAngle: 90,
				type: "pie",
				dataPoints: [
					{ y: 1023.50, name:"Pumpkin Spice Latte", color: "#393f63" },
					{ y: 784.50, name:"Caramel Apple Macchiato", color: "#e5d8b0" },
					{ y: 606.00, name:"None", color: "#d9695f" }
				]
			}
		]
	});
	
	// CanvasJS multiseries column chart to show monthly revenue by category
	var monthlyRevenueByCategoryColumnChart = new CanvasJS.Chart("monthly-revenue-by-category-column-chart", {
		animationEnabled: true,
		backgroundColor: "transparent",
		axisX: {
			interval: 2,
			intervalType: "month",
			labelFontColor: "#717171",
			lineColor: "#a2a2a2",
			tickColor: "#a2a2a2"
		},
		axisY: {
			gridThickness: 0,
			labelFontColor: "#717171",
			lineColor: "#a2a2a2",
			maximum: 150,
			prefix: "€",
			tickColor: "#a2a2a2"
		},
		toolTip: {
			backgroundColor: "#737580",
			borderThickness: 0,
			cornerRadius: 0,
			fontColor: "#ffffff",
			fontSize: 16,
			fontStyle: "normal",
			shared: true
		},
		data: []
	});

	populateMonthlyRevenueByCategoryChart();
	monthlyRevenueByCategoryColumnChart.render();

	var visitorsDrilldownedChartOptions = {
		animationEnabled: true,
		backgroundColor: "transparent",
		axisX: {
			labelFontColor: "#717171",
			lineColor: "#a2a2a2",
			tickColor: "#a2a2a2"
		},
		axisY: {
			gridThickness: 0,
			includeZero: false,
			labelFontColor: "#717171",
			lineColor: "#a2a2a2",
			tickColor: "#a2a2a2"
		},
		toolTip: {
			cornerRadius: 0,
			fontStyle: "normal"
		},
		data: []
	};
	
	var newVsReturningVisitorsChartOptions = {
		animationEnabled: true,
		backgroundColor: "transparent",
		legend: {
			fontFamily: "calibri",
			fontSize: 14,
			itemTextFormatter: function (e) {
				return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / totalVisitors * 100) + "%";  
			}
		},
		toolTip: {
			cornerRadius: 0,
			fontStyle: "normal",
			contentFormatter: function (e) {
				return e.entries[0].dataPoint.name + ": " + CanvasJS.formatNumber(e.entries[0].dataPoint.y, "###,###") + " - " + Math.round(e.entries[0].dataPoint.y / totalVisitors * 100) + "%";  
			} 
		},
		data: []
	};	

	// CanvasJS doughnut chart to show new vs returning visitors
	var visitorsChart = new CanvasJS.Chart("visitors-chart", newVsReturningVisitorsChartOptions);
	visitorsChart.options.data = dataVisitors["New vs Regular Customers"];
	
	visitorsChart.render();

	// CanvasJS spline chart to show users from Jan 2020 - Dec 2020
	var usersSplineChart = new CanvasJS.Chart("users-spline-chart", {
		animationEnabled: true,
		backgroundColor: "transparent",
		axisX: {
			labelFontColor: "#717171",
			lineColor: "#a2a2a2",
			tickColor: "#a2a2a2"
		},
		axisY: {
			gridThickness: 0,
			includeZero: false,
			labelFontColor: "#717171",
			lineColor: "#a2a2a2",
			tickColor: "#a2a2a2"
		},
		toolTip: {
			borderThickness: 1,
			cornerRadius: 0,
			fontStyle: "normal"
		},
		data: [
			{
				color: 	"#393F63", 
				lineThickness: 3,
				markerSize: 0,
				type: "spline",
				dataPoints: [
					{ x: new Date("27 Oct 2020"), y: 49 },
					{ x: new Date("28 Oct 2020"), y: 47 },
					{ x: new Date("29 Oct 2020"), y: 48 },
					{ x: new Date("30 Oct 2020"), y: 54 },
					{ x: new Date("31 Oct 2020"), y: 62 },
					{ x: new Date("1 Nov 2020"), y: 39 },
					{ x: new Date("2 Nov 2020"), y: 51 },
					{ x: new Date("3 Nov 2020"), y: 45 },
					{ x: new Date("4 Nov 2020"), y: 30 },
					{ x: new Date("5 Nov 2020"), y: 49 },
					{ x: new Date("6 Nov 2020"), y: 59 },
					{ x: new Date("7 Nov 2020"), y: 60 }
				]
			}
		]
	});
	
	usersSplineChart.render();	
	
	//----------------------------------------------------------------------------------//
	var allCharts = [
		revenueSplineAreaChart,
		annualRevenueByCategoryPieChart,
		annualRevenueByCategoryPieChart1,
		monthlyRevenueByCategoryColumnChart,
		visitorsChart,
		usersSplineChart
	];
	
	function populateMonthlyRevenueByCategoryChart() {
		for (var prop in dataMonthlyRevenueByCategory)
			if  (dataMonthlyRevenueByCategory.hasOwnProperty(prop))
				monthlyRevenueByCategoryColumnChart.options.data.push( dataMonthlyRevenueByCategory[prop] );
	}
	
	function monthlyRevenueByCategoryDrilldownHandler(e) {
		monthlyRevenueByCategoryColumnChart.options.data = [];

		for (var i = 0; i < annualRevenueByCategoryPieChart.options.data[0].dataPoints.length; i++)
			if (annualRevenueByCategoryPieChart.options.data[0].dataPoints[i].exploded === true)
				monthlyRevenueByCategoryColumnChart.options.data.push( dataMonthlyRevenueByCategory[annualRevenueByCategoryPieChart.options.data[0].dataPoints[i].name] );

		if (monthlyRevenueByCategoryColumnChart.options.data.length === 0)
			populateMonthlyRevenueByCategoryChart();

		monthlyRevenueByCategoryColumnChart.render();
	}
	
	function monthlyRevenueByCategoryDrilldownHandler1(e) {
		monthlyRevenueByCategoryColumnChart.options.data = [];

		for (var i = 0; i < annualRevenueByCategoryPieChart1.options.data[0].dataPoints.length; i++)
			if (annualRevenueByCategoryPieChart1.options.data[0].dataPoints[i].exploded === true)
				monthlyRevenueByCategoryColumnChart.options.data.push( dataMonthlyRevenueByCategory[annualRevenueByCategoryPieChart1.options.data[0].dataPoints[i].name] );

		if (monthlyRevenueByCategoryColumnChart.options.data.length === 0)
			populateMonthlyRevenueByCategoryChart();

		monthlyRevenueByCategoryColumnChart.render();
	}
	
	var visitorsChartHeadingDOM = $("#visitors-chart-heading"),
			visitorsChartBackButtonDOM = $("#visitors-chart-back-button"),
			visitorsChartTagDOM = $("#visitors-chart-tag");
	
	function visitorsChartDrilldownHandler (e) {
		visitorsChart = new CanvasJS.Chart("visitors-chart", visitorsDrilldownedChartOptions);
		visitorsChart.options.data = dataVisitors[e.dataPoint.name];
		visitorsChart.render();
		
		// DOM Manipulations
		visitorsChartHeadingDOM.html(e.dataPoint.name);
		visitorsChartBackButtonDOM.toggleClass("invisible");
		visitorsChartTagDOM.toggleClass("invisible");
	}
	
	// binding click event to visitors chart back button to drill up to "New Vs Returning Visitors" doughnut chart
	visitorsChartBackButtonDOM.on("click", function () {
		visitorsChart = new CanvasJS.Chart("visitors-chart", newVsReturningVisitorsChartOptions);
		visitorsChart.options.data = dataVisitors["New vs Returning Visitors"];
		visitorsChart.render();
		
		// DOM Manipulations
		visitorsChartHeadingDOM.html("New vs Returning Visitors");
		visitorsChartBackButtonDOM.toggleClass("invisible");
		visitorsChartTagDOM.toggleClass("invisible");
	});
	
	// chart properties cutomized further based on screen width
	function chartPropertiesCustomization () {
		if ($(window).outerWidth() >= 1200 ) {
			
			annualRevenueByCategoryPieChart.options.legend.horizontalAlign = "left";
			annualRevenueByCategoryPieChart.options.legend.verticalAlign = "center";
			annualRevenueByCategoryPieChart.render();
			
			visitorsChartTagDOM.css("position", "absolute");
			
		} else if ($(window).outerWidth() < 1200) {
			
			annualRevenueByCategoryPieChart.options.legend.horizontalAlign = "center";
			annualRevenueByCategoryPieChart.options.legend.verticalAlign = "top";
			annualRevenueByCategoryPieChart.render();
			
			visitorsChartTagDOM.css("position", "static");
			
		}
	}
	
	function chartPropertiesCustomization1 () {
		if ($(window).outerWidth() >= 1200 ) {
			
			annualRevenueByCategoryPieChart1.options.legend.horizontalAlign = "left";
			annualRevenueByCategoryPieChart1.options.legend.verticalAlign = "center";
			annualRevenueByCategoryPieChart1.render();
			
			visitorsChartTagDOM.css("position", "absolute");
			
		} else if ($(window).outerWidth() < 1200) {
			
			annualRevenueByCategoryPieChart1.options.legend.horizontalAlign = "center";
			annualRevenueByCategoryPieChart1.options.legend.verticalAlign = "top";
			annualRevenueByCategoryPieChart1.render();
			
			visitorsChartTagDOM.css("position", "static");
			
		}
	}
	
	function renderAllCharts() {
		for (var i = 0; i < allCharts.length; i++)
			allCharts[i].render();
	}
	
	function sidebarToggleOnClick() {
		$('#sidebar-toggle-button').on('click', function () {
			$('#sidebar').toggleClass('sidebar-toggle');
			$('#page-content-wrapper').toggleClass('page-content-toggle');
			renderAllCharts();
		});	
	}
	
	(function init() {
		chartPropertiesCustomization();
		$(window).resize(chartPropertiesCustomization);
		sidebarToggleOnClick();
	})();
	
});