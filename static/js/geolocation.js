/**
 * Created by RMEYER on 9/7/2017.
 */
/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin


// });
function initMap() {


} // now it IS a function and it is in global

$(document).ready(function () {
     initMap = function () {
        var googleLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

         var mapOtn  = {
            zoom:10,
            center:googleLatLng,
            mapTypeId: 'roadmap'
         };

         var Pmap = document.getElementById("map");

         var map = new google.maps.Map(Pmap, mapOtn);

     }
})






