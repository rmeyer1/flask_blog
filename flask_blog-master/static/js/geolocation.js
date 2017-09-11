$(document).ready(function(){

	if( navigator.geolocation ) {
        navigator.geolocation.getCurrentPosition(success);
    }
	else {
        $("p").html("HTML5 Not Supported");
    }

});

function success(position) {

    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

	var googleLatLng = new google.maps.LatLng(lat,lon)
	var mapOtn= {
        zoom:10,
		center:googleLatLng,
		mapTypeId:'roadmap'
	}

	var Pmap= document.getElementById("map");

	var divmap= new google.maps.Map(Pmap, mapOtn);

	var marker = new google.maps.Marker({
          position: googleLatLng,
          map: divmap
        });
}







