$( document ).ready(function() {
	
		var w=document.getElementById('weer');

		var ico=document.getElementById('icoon');


		
	
		function getLocation()
		  {
			  if (navigator.geolocation)
			  {
			    navigator.geolocation.getCurrentPosition(showPosition);
			    navigator.geolocation.getCurrentPosition(getweather);
			  }
			  else
			  {
			  	alert("Geolocation is not supported by this browser.");
			  }
		  }
		function showPosition(position)
		  {
		  console.log("Latitude: " + position.coords.latitude + 
		  "<br>Longitude: " + position.coords.longitude); 
		  }
		function getweather(position)
		
{			$.ajax({
			    url: "https://api.forecast.io/forecast/ffd23729891a3f4e3b3856dce161c767/"+ position.coords.latitude + ","+ position.coords.longitude,
			 
			    // the name of the callback parameter, as specified by the YQL service
			    jsonp: "callback",
			 
			    // tell jQuery we're expecting JSONP
			    dataType: "jsonp",
			 
			    // tell YQL what we want and that we want JSON
			    data: {
			        q: "select title,abstract,url from search.news where query=\"cat\"",
			        format: "json"
			    },
 
    // work with the response
    success: function( response ) {
        console.log( response ); // server response
        w.innerHTML = Math.round((response.currently.temperature - 32)/1.8) + " <strong>&degC</strong>";

		var i = response.currently.icon;
					switch(i){
						case "clear-day":
							ico.src="http://www.iconsdb.com/icons/preview/black/sun-xxl.png";
							break;

						case "clear-night":
							ico.src="http://www.iconsdb.com/icons/preview/black/moon-xxl.png";
							break;

						case "partly-cloudy-day":
							ico.src="http://www.iconsdb.com/icons/preview/black/partly-cloudy-day-xxl.png";
							break;
						case "partly-cloudy-night":
							ico.src="http://www.iconsdb.com/icons/preview/black/partly-cloudy-night-xxl.png";
							break;
						case "wind":
							ico.src="http://www.iconsdb.com/icons/preview/black/little-rain-xxl.png";
							break;
						default:
							ico.src="http://www.iconsdb.com/icons/preview/black/clouds-xxl.png";
					}
					if (Math.round((response.currently.temperature - 32)/1.8) < 15) {
						$('body').css("background-color", "#FC9D0A");
					};
    }
});
		}
		 getLocation();
		 
	});