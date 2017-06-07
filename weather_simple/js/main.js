// Use ready() to make a function available after the document is loaded
$( document ).ready(function() {
	console.log("read!");

    $.simpleWeather({
    woeid: '2357536',
    location: 'johannesburg',
    unit: 'c',

    success: function(weather)
        {
          html = '<p>'+ weather.city + ', ' + weather.forecast[0].day +'</p>';
          html += '<h2><i class="icon-' + weather.code + '"></i></h2>';
          html += '<h1 class="" src="images/weathericons/'+ weather.code +'"></h1>';
          html += '<h2>'+ weather.temp +'&deg;'+ weather.units.temp +'</h2>';
          html += weather.wind.speed + ' ' + weather.units.speed + ' ';
          html += '' + weather.humidity + ' %';
          html +=  '<p>' + weather.forecast[1].day+ '</p>';
          html += '<h2>'+weather.forecast[1].high+'&deg;'+weather.units.temp+'</h2>';
          html +=  '<p>' + weather.forecast[2].day+ '</p>';
          html += '<h2>'+weather.forecast[2].high+'&deg;'+weather.units.temp+'</h2>';

          $("#weather").html(html);
        },
    error: function(error)
        {
          $("#weather").html('<p>'+error+'</p>');
        }


     });


});