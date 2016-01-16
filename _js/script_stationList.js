var stationList = new Array();
var newStation;
var index;

function Station(id, name, city, availDocks, tlDocks, lat, lon, statVal,statKey, availBikes){
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
}

$(document).on('pageshow', '#station', function () {
	stationList = new Array();
    // ajax call
    $.ajax({
        type: 'GET',
        url: 'projectXML08.xml',
        dataType: 'xml',
        success: showStationList
    }); // end of ajax call
	
}); // end of doc ready

function showStationList(response) {
	
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
		
		// store into Station
		newStation = new Station(id, stationName, city, availDocks, tlDocks, lat, lon, statVal, statKey, availBikes);
		
		// store each Station into stationList
		stationList.push(newStation);
		      
		
    }); // end of find stationBeanList
	// creating station listStyleType
	$("#staionList").html("");
	console.log(stationList.length);
	for(var i = 0; i < stationList.length; i++){
		
		$("#stationsList").append("<section data-role='collapsible'>" + "<h1 class='ui-btn ui-icon-info ui-btn-icon-left'>" + stationList[i].name + "</h1>" +
			
		// collapsible area
		"<section>" +
		"<div class='ui-grid-a'>" +
			"<div class='ui-block-a'>" +
			"<br><table>" +
			"<tr>" +
				"<th>Station Name:</th>" +
				"<td>" + stationList[i].name + "</td>" +
			"</tr>" +
			"<tr>" +
				"<th>City:</th>" +
				"<td>" + stationList[i].city + "</td>" +
			"</tr>" +
			"<tr>" +
				"<th>Available Docks:</th>" +
				"<td>" + stationList[i].availDocks + "</td>" +
			"</tr>" +
			"<tr>" +
				"<th>Total Docks:</th>" +
				"<td>" + stationList[i].tlDocks + "</td>" +
			"</tr>" +
			"<tr>" +
				"<th>Latitude:</th>" +
				"<td>" + stationList[i].lat + "</td>" +
			"</tr>" +
			"<tr>" +
				"<th>Longitude:</th>" +
				"<td>" + stationList[i].lon + "</td>" +
			"</tr>" +
			"<tr>" +
				"<th>Status Value:</th>" +
				"<td>" + stationList[i].statVal + "</td>" +
			"</tr>" +
			"<tr>" +
				"<th>Status Key:</th>" +
				"<td>" + stationList[i].statKey + "</td>" +
			"</tr>" +
			"<tr>" +
				"<th>Available Bikes:</th>" +
				"<td>" + stationList[i].availBikes + "</td>" +
			"</tr>" +
			
			"</table>" +
		"</div>" +
		"</section>"
		
		);
		
		} // closes for loop
		
		$("#stationsList").collapsibleset("refresh");	
}