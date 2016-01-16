/**
 * Created by juanmendiola on 15-12-10.
 */
$(document).on('pageshow', '#map', function () {

    // ajax call
    $.ajax({
        type: 'GET',
        url: 'projectXML08.xml',
        dataType: 'xml',
        success: handledResponse
    }); // end of ajax call

    //console.log('map page loading...');
    initMap();

}); // end of page show


function handledResponse(response) {
    // declare vars
    var i = 0;
    var stations = [];
    $(response).find('stationBeanList').each(function () {
        // get data
        var id = $(this).find('id').text();
        var stationName = $(this).find('stationName').text();
        var city = $(this).find('stationName').attr('city');
        var availDocks = $(this).find('availableDocks').text();
        var tlDocks = $(this).find('totalDocks').text();
        var lat = $(this).find('latitude').text();
        var long = $(this).find('longitude').text();
        var statVal = $(this).find('statusValue').text();
        var availBikes = $(this).find('availableBikes').text();

        stations[i] = [city, stationName, lat, long];
        i++;
    }); // end of find stationBeanList
    // store in local storage
    localStorage['stations'] = JSON.stringify(stations);

} // end of handled response


function initMap() {
    //console.log('creating map...');

    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map_canvas'), {
        center: {lat: 43.6636, lng: -79.3806},
        zoom: 12
    });
    setMarkers(map);
} // end of init


function setMarkers(map) {
    // parse data from localStorage
    var stations = JSON.parse(localStorage['stations']);
    //console.log('stations parsed: ', stations);
    // add markets to map
    for (var i = 0; i < stations.length; i++) {


        var station = stations[i];
        // icon supplied by Maps Icons Collection https://mapicons.mapsmarker.com
        // under the CC BY SA 3.0
        var image = '_images/cycling.png';
        var lat = Number(station[2]);
        var lng = Number(station[3]);

        var marker = new google.maps.Marker({
            position: {lat: lat, lng: lng},
            map: map,
            title: station[1],
            zIndex: station[4],
            icon: image

        });
        attachMessage(marker, station)
    }
} // end of setMarkers


function attachMessage(marker, station) {

    var infowindow = new google.maps.InfoWindow({
        content: station[0] + '<br>' + 'station: ' + station[1]
    });

    marker.addListener('click', function () {
        infowindow.open(marker.get('map'), marker);
    });
} // end of attachMessage