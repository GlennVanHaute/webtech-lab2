 webtech-lab2
============

Lab 1: Learning to work with git.
----
In our first class of webtech 2 we started of to learn to work with Git. We learned to work with GIT for our future projects and to upload our task or help out classmates who have issues with some code.

**Here are a Few basic commands that you need to know in order start to work with GIT :**
    
    git clone ( This command clones your or someones elses repositories to location you are )
    git pull ( This command is used to "pull" the newest data )
    git add ( This command is to add your changes )
    git commit -m "message" ( This command commits your added things, don't forget the message! )
    git push ( this command pushes your work to github )
**Here are some commands when you fork a repository:**

    git fetch upstream
    git remote add upstream -reponame-
    git merge upstream/master

 
 **Here are a Few basic commands for your command prompt :**
 
    cd (change directory)
    ls ( to know what files are in the directory)


Lab 2: CSS animations.
----
Our second class was animating in CSS3 .
There are two types of ways to animate in css3 ( Transition and Transform ).
* Transition uses the engine of the browser which makes it slower on mobile devices.
* Transform uses the engine of the machine which makes it way faster than Transitions.

We also learned to animate in CSS3 with keyframes. The 2 exercises in "lab2" are a demo we had to create.
    
Lab 3: To Do-list. 
----
In this lab we created our own Framework in order to make our own To-Do-List, very interesting!
    
Lab 4: Weather app.
----
In deze lab hebben we leren werken met API's, voor dit te leren hebben we een kleine weer applicatie moeten bouwen.
Api's worden gebruikt om connectie te leggen met databases, meesten bedrijven stellen hun Databases open voor developpers zodat zei die gegevens kunnen gebruiken om applicaties te bouwen. 


Eerst maken we de variabelen aan die we later gaan oproepen om de gegevns in te plaatsen. Aan deze variabelen "linken" we een Div ID door middel van "getElementById". De code ziet er als volgt uit:

    var windkracht = document.getElementById('windkracht');var dag = document.getElementById('dag');

we gaan het HTML5 element "geolocation" gebruiken om de locatie van het toestel te verkrijgen om zo te kunnen weten welke weer informatie we moeten tonen. De code ziet er als volgt uit: 

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

    // In deze functie gaan we onze locatie loggen in de console.
     function showPosition(position)
          {
          console.log("Latitude: " + position.coords.latitude + 
          "<br>Longitude: " + position.coords.longitude); 
          }
Om de API te kunnen oproepen moet men een ajax call doen om deze gegevens op te roepen. Het datatype van de call zal JSONP zijn om data te kunnen uitwisselen tussen de server en de webapplicatie.

    $.ajax({
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
        //Hier halen we de gegvens op met "response" en gaan we die gegevens in de gewenste div steken door de juiste variabele aan te spreken.
        windkracht.innerHTML = "windkracht: " + response.currently.windSpeed;
                    }
    });



Lab 5: IMD terAppke
----
In deze opdracht hebben we een simpele applicatie gebouwd die we konden gebruiken. Het was een applicatie voor de opendeurdag waar de gebruiker kon zien of het goed weer was om een afspraak te maken met de gewenste docent. De gebruiker kan zijn email invoegen om zo op de hoogte gehouden te worden.

Hier hebben we weer gebruik gemaakt van API en hebben we leren gebruik maken van bootstrap.

Bootstrap is een css framework dat het makkelijk maakt om snel een applicatie te opmaken zodat we daar al geen tijd aan verspillen. Het voordeel aan bootstrap is dat het ook meteen responsive is.

Als je bootstrap wil downloaden kan u naar deze link surfen: [Get Bootstrap](http://getbootstrap.com/getting-started/#download)

Al hun documentatie staat hier: [CSS documentatie Bootstrap](http://getbootstrap.com/css/)



Lab 6: node.js
----

Node.js is eerder een alternatief voor php, sinds het serverside werkt in plaats van clientside zoals javascript. Dat maakt het dat het makkelijk te combineren is met javascript en zo minder problemen ontstaan. 

Om met node.js te kunnen werken moet je natuurlijk eerst node installeren en dat doe je hier:

[Download link node](http://nodejs.org/download/)

Wanneer je dit geinstaleerd heb instaleer je best een node framework. Wij hebben leren werken met express. Dit install je door in je cmd het volgende te typen: 

     npm install express -g
De "-g" bij de command zorgt ervoor dat express globaal geinstaleerd wordt.

Wanneer dit geïnsstaleerd is navigeer je met je cmd naar de gewenste locatie en type je "express" in de command prompt. Voila! nu heb je je eerste node applicatie !

Wanneer dit gedaan is open je "package.json" en type je bij dependencies de gewenste modules die je wil, dit zijn de modules die we geleerd hebben:

    Faye
    jade
    MongoDB
    Mongoose of Monk
Als dit gebeurd is moet je ze uiteraard ook instaleren, dit doe je met de volgende code: 

(let op: zorg dat je wel in de juiste map bent in je cmd)
usefull links:

    npm install
  npm staat voor "node package manager".

  

[Flat ui colors for fast development](http://flatuicolors.com/)

Lab X
----
usefull links:

http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/

http://compositecode.com/2014/04/29/fixing-up-passport-js-passport-http-for-express-v4/

usefull videos:

https://www.youtube.com/watch?v=M9CZxEFkXgY
