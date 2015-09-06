/**
 * Created by shay on 22/01/2015.
 */
$.getJSON("http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139", function(data) {
    console.log(data.city.name);
});