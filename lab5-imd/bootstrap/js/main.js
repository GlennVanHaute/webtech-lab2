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
							ico.src="http://www.iconsdb.com/icons/preview/black/sun-m.png";
							break;

						case "clear-night":
							ico.src="http://www.iconsdb.com/icons/preview/black/moon-m.png";
							break;

						case "partly-cloudy-day":
							ico.src="http://www.iconsdb.com/icons/preview/black/partly-cloudy-day-m.png";
							break;
						case "partly-cloudy-night":
							ico.src="http://www.iconsdb.com/icons/preview/black/partly-cloudy-night-m.png";
							break;
						case "wind":
							ico.src="http://www.iconsdb.com/icons/preview/black/little-rain-m.png";
							break;
						default:
							ico.src="http://www.iconsdb.com/icons/preview/black/clouds-m.png";
					}

					var temperatuur = Math.round((response.currently.temperature - 32)/1.8)
					

					switch(true){
						   	case temperatuur < -20:
						      $('body').css("background-color", "#db6eeb");
						      $('#infoweer').html("Brrrr! Het is momenteel veel te koud voor een terrAppke");
						      break;
						  	 case temperatuur < -15:
						      $('body').css("background-color", "#a886f4");
						      $('#infoweer').html("Brrrr! Het is momenteel veel te koud voor een terrAppke");
						      break;
						   	case temperatuur  < -10:
						      $('body').css("background-color", "#7ba3fa");
						      $('#infoweer').html("Brrrr! Het is momenteel veel te koud voor een terrAppke");
						      break;
						  	case temperatuur  < -5:
						      $('body').css("background-color", "#3ad5f4");
						      $('#infoweer').html("Brrrr! Het is momenteel veel te koud voor een terrAppke");
						      break;
						    case temperatuur  < 0:
						      $('body').css("background-color", "#ffffff");
						      $('#infoweer').html("Brrrr! Het is momenteel veel te koud voor een terrAppke");
						      break;
						    case temperatuur  < 5:
						      $('body').css("background-color", "#33eda2");
						      $('#infoweer').html("Brrrr! Het is momenteel veel te koud voor een terrAppke");
						      break;
						    case temperatuur  < 10:
						      $('body').css("background-color", "#6ff12f");
						       $('#infoweer').html("Dit is al beter weer, maar momenteel nog steeds niet echt het ideaale weer voor een terrAppke te doen ")
						      break;
						    case temperatuur  < 15:
						      $('body').css("background-color", "#d5fa0e");
						      $('#infoweer').html("Bijna het ideaale weer voor een terAppke te doen maar het is nog net iets te koud")
						      break;
						    case temperatuur  < 20:
						      $('body').css("background-color", "#cbf100");
						      $('#infoweer').html("Mooi! dit is schitterend weer om een terAppke te doen!")
						      break;
						    case temperatuur  < 25:
						      $('body').css("background-color", "#d7e10e");
						      $('#infoweer').html("Mooi! dit is schitterend weer om een terAppke te doen! Maar ben je wel zeker je een trui wil aandoen?")
						      break;
						    case temperatuur  < 30:
						      $('body').css("background-color", "#ffc708");
						      $('#infoweer').html("Het ideaale weer om een terAppke te doen, vergeet je zonnecreme alvast maar niet aan te doen!")
						      break;
						    case temperatuur  < 35:
						      $('body').css("background-color", "#ff743c");
						      $('#infoweer').html("Wow, niet verwacht het zo'n mooi weer kon zijn in België! Waar wacht je op? het ideaale weer voor een terAppke")
						      break;




						}

				
    }
});
		}
		 getLocation();
		 
	});