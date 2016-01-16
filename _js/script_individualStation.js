var stationList = new Array();
var newStation;
var index;
var selectedIndex;

function Station(id, name, city, availDocks, tlDocks, lat, lon, statVal,statKey, availBikes, image){
	this.id = id;
	this.name = name;
	this.city = city;
	this.availDocks = availDocks;
	this.tlDocks = tlDocks;
	this.lat = lat;
	this.lon = lon;
	this.statVal = statVal;
	this.statKey = statKey;
	this.availBikes = availBikes;
	this.image = image;
}

$(document).on('pageshow', '#individualStationList', function () {

    // ajax call
    $.ajax({
        type: 'GET',
        url: 'projectXML08.xml',
        dataType: 'xml',
        success: showStationDetails
    }); // end of ajax call
	
}); // end of doc ready

function showStationDetails(response) {
	
	// loop through xml file
    $(response).find('stationBeanList').each(function() {

        // get data
        var id = $(this).find('id').text();
        var stationName = $(this).find('stationName').text();
        var city = $(this).find('stationName').attr('city');
        var availDocks = $(this).find('availableDocks').text();
        var tlDocks = $(this).find('totalDocks').text();
        var lat = $(this).find('latitude').text();
        var lon = $(this).find('longitude').text();
        var statVal = $(this).find('statusValue').text();
		var statKey = $(this).find('statusKey').text();
        var availBikes = $(this).find('availableBikes').text();
		var image = $(this).find('stationImg').text();
		// store into Station
		newStation = new Station(id, stationName, city, availDocks, tlDocks, lat, lon, statVal, statKey, availBikes, image);
		
		// store each Station into stationList
		stationList.push(newStation);
		

    }); // end of find stationBeanList
	
	$("#stationList").html('<head> '+
    '<meta charset="UTF-8">'+
    '<title>Mobile Web Group Project 2015</title>'+
    '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />'+

	'<link rel="stylesheet" href="_css/jquery.mobile.css"/>'+
	'<link rel="stylesheet" href="_css/mystyle.css"/>'+
	
	'<script src="_js/jquery.js"></script>'+
    '<script src="_js/jquery.mobile.js"></script>'+
	'<script src="_js/script_stationList.js"></script>'+
	'<script src="_js/Chart.js"></script>'+
    '<script src="_js/maps.js"></script>'+
	'<script src="_js/mychartscript.js"></script>'+
	'<script src="_js/script_individualStation.js"></script>'+
	'<script src="_js/studentImage.js"></script>'+
	'<script src="_js/script_barChart.js"></script>'+
    '<script async defer type="text/javascript" src="http://maps.google.com/maps/api/js?v=3&sensor=false&language=en"></script>'+
	'</head>');
	
	$("#stationsList").append("<body><h2>Station List</h2>");
	
	$("#stationsList").append("<ul data-role='listview' data-inset='true' data-filter='true' id='list'>");
	

	for(var i = 0; i < stationList.length; i++){
		
		$("#list").append("<li id='station"+i+"'><a href='stationResult.html' data-transition='pop'>" + stationList[i].name + "</a></li>"
		).listview().listview('refresh');
		
		} // closes for loop*/
		
	$("#stationsList").append("</ul>");	
	$("#stationsList").append("</section>");

	// select listner
	$("#list").on('click', ' > li', function(){		
		
		selectedIndex = $(this).index();
		
		
			
	});
	
}

$(document).on('pageshow', '#stationResultPage', function () {
	
	$("#stationResult").html("<section>" +
		"<div class='ui-grid-a'>" +
			"<div class='ui-block-a'>" +
			"<br><table>" +
			"<tr>" +
				"<th>Station Name:</th>" +
				"<td>" + stationList[selectedIndex].name + "</td>" +
			"</tr>" +
			"<tr>" +
				"<th>City:</th>" +
				"<td>" + stationList[selectedIndex].city + "</td>" +
			"</tr>" +
			"<tr>" +
				"<th>Available Docks:</th>" +
				"<td>" + stationList[selectedIndex].availDocks + "</td>" +
			"</tr>" +
			"<tr>" +
				"<th>Total Docks:</th>" +
				"<td>" + stationList[selectedIndex].tlDocks + "</td>" +
			"</tr>" +
			"<tr>" +
				"<th>Latitude:</th>" +
				"<td>" + stationList[selectedIndex].lat + "</td>" +
			"</tr>" +
			"<tr>" +
				"<th>Longitude:</th>" +
				"<td>" + stationList[selectedIndex].lon + "</td>" +
			"</tr>" +
			"<tr>" +
				"<th>Status Value:</th>" +
				"<td>" + stationList[selectedIndex].statVal + "</td>" +
			"</tr>" +
			"<tr>" +
				"<th>Status Key:</th>" +
				"<td>" + stationList[selectedIndex].statKey + "</td>" +
			"</tr>" +
			"<tr>" +
				"<th>Available Bikes:</th>" +
				"<td>" + stationList[selectedIndex].availBikes + "</td>" +
			"</tr>" +
			
			"</table>" +
		"</div>" + // closes ui-block-a
		
		"<div class='ui-block-b'>" +
			"<img src='_images/" + stationList[selectedIndex].image + "' width='200%'>" +
			"</div>" + 
		
		"</div>" +
		"</section></body>");
});
