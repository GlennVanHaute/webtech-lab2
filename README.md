 webtech-lab2
============

Lab 1: Learning to work with git.
----
In onze eerste les van webtech2 hebben we leren werken met  Git. We leren hiermee werken voor onze toekomstige projecten en ook om elkaar te helpen en te kunnen bijdragen aan de cursus van de docent. Het is ook uiteraard handig voor repositories te zoeken die je eventueel kan gebruiken in je eigen projecten.

**Hier zijn enkele commando's die je moet kennen als je met Git wil werken :**
    
    git clone ( This command clones your or someones elses repositories to location you are )
    git pull ( This command is used to "pull" the newest data )
    git add ( This command is to add your changes )
    git commit -m "message" ( This command commits your added things, don't forget the message! )
    git push ( this command pushes your work to github )
**Hier zijn enkele commando's voor als je een repository wil forken op Github:**

    git fetch upstream
    git remote add upstream -reponame-
    git merge upstream/master

 
 **Hier zijn een paar basis commando's voor in je command prompt:**
 
    cd (change directory)
    ls ( to know what files are in the directory)


Lab 2: CSS animations.
----
Onze 2de les webtechnologiën hebben we animatie gezien met CSS3.
er zijn twee types van animaties (transitions en transforms) .
* Transition gebruikt de engine van de browser zelf waardoor het vertraagt voor mobile phones
* Transform gebruikt de engine zelf van het toestel wat ervoor zorgt dat alles sneller verloopt.

We hebben hier ook leren werken met keyframes. De 2 oefeningen  in lab2 zijn een demo van al de verschillende code dat we gezien hebben.
    
Lab 3: To Do-list. 
----
In deze lab hebben ons eigen Framework gemaakt met Javascript, dus eigenlijk ons eigen soort Jquerry. Dit hebben we geleerd omdat als we bevoorbeeld Jquerry willen gebruiken in een website of in een applicatie we vaak niet alles nodig hebben en dus onnodige codes bezit waardoor je website of applicatie vertraagt.


    
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

Nu je je applicatie hebt met je modules geinstalleerd kan je aan de slag. 
Om een nieuwe pagina aan te maken moet je naar routes gaan en open je de index.js

    
      /*
       * GET home page.
       */

      exports.index = function(req, res){
        res.render('index', { title: 'Glenn Van Haute' });
      };

      exports.ask = function(req, res){
        res.render('ask', {title: 'Ask us a question!' });
      };

      exports.allQuestions = function(req, res){
        res.render('allQuestions', {title: 'All the questions!' });
      };

Zoals je hier kan zien moet je hier je pagina aanmaken. Vernvolgens maak je een nieuwe jade file aan met dezelfde naam in het mapje views. Nu heb je een nieuwe pagina aangemaakt. De jade file heeft een unieke structuur, voor meer documentatie click [hier](http://jade-lang.com/)


Hoe met mongodb werken:
1) Ga via je cmd naar de locatie waar je mongo geinstalleerd is.
2) ga via cmd naar de bin en type vervolgens: mongo
3) open een nieuwe cmd en surf opnieuw naar de locatie mongo/bin en gebruik dan 
4) Type nu: mongod --dbpath met daarachter het pad waar je mapje "data" in zit. Hier gaat hij database maken en naar die bestandlocatie luisteren.
5) Maak in deze cmd een nieuwe database aan door: use en hierachter de gewenste naam
5) Maak nu een collection aan in je database met de gewenste velden, mongodb maakt en insert het automatisch voor je.

Mongo commands:

    mongod --dbpath C:\xampp\htdocs\webtech-labs\LabX-Timder\definitieversie\data

Path waar data van mongo terecht moet komen

    use nodetest1
Maak hiermee een nieuwe database aan genaamd nodetest1

    db.usercollection.insert({ "username" : "testuser1", "email" : "testuser1@testdomain.com" })
Hiermee maak je eigenlijk een tabel aan genaamd "usercollection".  je kan meteen de velden invullen dat nodig zijn, mongo zal deze automatisch aanmaken voor je.


    db.usercollection.find().pretty()

Met deze code toon je de "usercollection".




Lab X
----


usefull links:

http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/

http://compositecode.com/2014/04/29/fixing-up-passport-js-passport-http-for-express-v4/

[Flat ui colors for fast development](http://flatuicolors.com/)

usefull videos:

https://www.youtube.com/watch?v=M9CZxEFkXgY
