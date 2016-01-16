var labelsxml = new Array();
var data1xml = new Array();
var pieData = new Array();
var colors = new Array("aqua", "red", "green", "blue",
						"yellow","brown","coral","crimson",
						"black","darkblue","lightblue","gold",
						"indigo","lime","teal","olive");

$(document).on('pageshow', "#pie", function() {
	$.ajax({
		type: "GET",	
		url: "projectXML08.xml",
		dataType: "xml",
		success:loadPie
	});
});

function loadPie(xml)
{
	var xx = 0;
	$(xml).find("stationName").each(function() {
		labelsxml[xx] = $(this).text();
		xx++
	});
	var	yy=0;
	$(xml).find("totalDocks").each(function() {
		data1xml[yy] = parseInt($(this).text());				
		yy++;	 
	});		
	var pieData =  [
	
	{label : labelsxml[0],value : data1xml[0],color : colors[0]},
	{label : labelsxml[1],value : data1xml[1],color : colors[1]},
	{label : labelsxml[2],value : data1xml[2],color : colors[2]},
	{label : labelsxml[3],value : data1xml[3],color : colors[3]},
	{label : labelsxml[4],value : data1xml[4],color : colors[4]},
	{label : labelsxml[5],value : data1xml[5],color : colors[5]},
	{label : labelsxml[6],value : data1xml[6],color : colors[6]},
	{label : labelsxml[7],value : data1xml[7],color : colors[7]},
	{label : labelsxml[8],value : data1xml[8],color : colors[8]},
	{label : labelsxml[9],value : data1xml[9],color : colors[9]},
	{label : labelsxml[10],value : data1xml[10],color : colors[10]},
	{label : labelsxml[11],value : data1xml[11],color : colors[11]},
	{label : labelsxml[12],value : data1xml[12],color : colors[12]},
	{label : labelsxml[13],value : data1xml[13],color : colors[13]},
	{label : labelsxml[14],value : data1xml[14],color : colors[14]},
	{label : labelsxml[15],value : data1xml[15],color : colors[15]}]


	cvs = document.getElementById("pieCanvas1").getContext('2d');
	
	myChart = new Chart(cvs).Pie(pieData);
	
	$("#pieLegend1").html(
				" <table><tr><td>" + labelsxml[0] + "</td>" +
							 "<td style='background:" + colors[0] + ";'>" + 
										data1xml[0] + "</td></tr>" +
							"<tr><td>" + labelsxml[1] + "</td>" +
							 "<td style='background:" + colors[1] + ";'>" + 
										data1xml[1] + "</td></tr>" +
							"<tr><td>" + labelsxml[2] + "</td>" +
							 "<td style='background:" + colors[2] + ";'>" + 
										data1xml[2] + "</td></tr>" +
							"<tr><td>" + labelsxml[3] + "</td>" +
							 "<td style='background:" + colors[3] + ";'>" + 
										data1xml[3] + "</td></tr>" +
							"<tr><td>" + labelsxml[4] + "</td>" +
							 "<td style='background:" + colors[4] + ";'>" + 
										data1xml[4] + "</td></tr>" +
							"<tr><td>" + labelsxml[5] + "</td>" +
							 "<td style='background:" + colors[5] + ";'>" + 
										data1xml[5] + "</td></tr>" +
							"<tr><td>" + labelsxml[6] + "</td>" +
							 "<td style='background:" + colors[6] + ";'>" + 
										data1xml[6] + "</td></tr>" +
							"<tr><td>" + labelsxml[7] + "</td>" +
							 "<td style='background:" + colors[7] + ";'>" + 
										data1xml[7] + "</td></tr>" +
							"<tr><td>" + labelsxml[8] + "</td>" +
							 "<td style='background:" + colors[8] + ";'>" + 
										data1xml[8] + "</td></tr>" +
							"<tr><td>" + labelsxml[9] + "</td>" +
							 "<td style='background:" + colors[9] + ";'>" + 
										data1xml[9] + "</td></tr>" +
							"<tr><td>" + labelsxml[10] + "</td>" +
							 "<td style='background:" + colors[10] + ";'>" + 
										data1xml[10] + "</td></tr>" +
							"<tr><td>" + labelsxml[11] + "</td>" +
							 "<td style='background:" + colors[11] + ";'>" + 
										data1xml[11] + "</td></tr>" +
							"<tr><td>" + labelsxml[12] + "</td>" +
							 "<td style='background:" + colors[12] + ";'>" + 
										data1xml[12] + "</td></tr>" +
							"<tr><td>" + labelsxml[13] + "</td>" +
							 "<td style='background:" + colors[13] + ";'>" + 
										data1xml[13] + "</td></tr>" +
							"<tr><td>" + labelsxml[14] + "</td>" +
							 "<td style='background:" + colors[14] + ";'>" + 
										data1xml[14] + "</td></tr>" +
							"<tr><td>" + labelsxml[15] + "</td>" +
							 "<td style='background:" + colors[15] + ";'>" + 
										data1xml[15] + "</td></tr>" +"</tr></table>");
}