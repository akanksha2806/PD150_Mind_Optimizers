
var api_key = '367e3770394baf9fa17513f197699ca3'; 
var map;
var service;
var infowindow;

function initialize(lat,long) {
  var pyrmont = new google.maps.LatLng(lat,long);

  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });

  var request = {
    location: pyrmont,
    radius: '500',
    type: ['restaurant']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
  console.log(results);
}

 

//var resource_url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=' + api_key;



let lat, long;

if ("geolocation" in navigator) {
    console.log("yes");
    navigator.geolocation.getCurrentPosition(position => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        console.log(lat);
        console.log(lon);
       // var template = Handlebars.compile(document.getElementById('docs-template').innerHTML);
        document.getElementById('content-placeholder').style.visibility = "visible"
        //initialize(lat,lon);
        // var resource_url = 'https://api.betterdoctor.com/2016-03-01/practices?location=' + parseFloat(lat) + ',' + parseFloat(lon) + ',10&skip=2&limit=10&user_key=367e3770394baf9fa17513f197699ca3';
        // $.get(resource_url, function (data) {
        //     data: { meta: {<metadata>}, data: {<array[Practice]>} }
        // var template = Handlebars.compile(document.getElementById('docs-template').innerHTML);
        // document.getElementById('content-placeholder').style.visibility = "visible"
        //     .innerHTML = template(data);
        // });
    });

}
//let lat, long;

//if ("geolocation" in navigator) {
//    console.log("geolocation present");
//    navigator.geolocation.getCurrentPosition(position => {
//        lat = position.coords.latitude;
//        long = position.coords.longitude;
        //console.log(lat);
        // console.log(long);
        //document.getElementById("lat").textContent = lat
        //document.getElementById("long").textContent = long
        //const data = { lat, long }
        //const options = {
        //    method: 'POST',
        //    headers: {
        //        'Content-Type': 'application/json'
        //    },
        //    body: JSON.stringify(data)
        //}
        //fetch('/geo', options)
        // var resource_url = 'https://api.betterdoctor.com/2016-03-01/practices?location=' + lat + ',' + lon+',10&skip=2&limit=10&user_key=367e3770394baf9fa17513f197699ca3';
//    });

//}

//$.get(resource_url, function (data) {
//    // data: { meta: {<metadata>}, data: {<array[Practice]>} }
//    var template = Handlebars.compile(document.getElementById('docs-template').innerHTML);
//    document.getElementById('content-placeholder').innerHTML = template(data);
//});
