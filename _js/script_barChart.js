var stationName = new Array();
var availDocks = new Array();
var availBikes = new Array();

	// load up values from XML
	$(document).on('pageshow', "#barChart", function() {
		$.ajax({
			type: "GET",
			url: "projectXML08.xml",
			dataType: "xml",
			success:loadChartData
		});
	});

	function loadChartData(xml)
	{
		index = 0;
		$(xml).find("stationBeanList").each(function() {
			stationName[index] = $(this).find('stationName').text();
			availDocks[index] = parseInt($(this).find('availableDocks').text());
			availBikes[index] = parseInt($(this).find('availableBikes').text());
			index++;
		});	
			
		var chartData = {
			labels : stationName,
			datasets : [
			{
				strokeColor : "rgba(255, 0, 0, 1)",
				fillColor : "rgba(220, 0, 0, 0.5)",
				data : availDocks
			},
			{
				strokeColor : "rgba(0, 255, 0, 1)",
				fillColor : "rgba(0, 220, 0, 0.5)",
				data : availBikes		
			}
			]
		}
	
		cvs = document.getElementById("barCanvas").getContext('2d');
		myChart = new Chart(cvs).Bar(chartData);
	
		//legend
		$("#legend").html("<table><tr>" + 
			"<td style='background:red; color:white;'>" +
			"Available Docks" + "</td>" +
			"<td style='background:green; color:white;'>" +
			"Available Bikes" + "</td>" +	
			"</tr></table>");
}	
