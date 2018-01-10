// variables

var request = require("request");
var keys = require("./keys.js");
var twitter = require("twitter");
var Spotify = require('node-spotify-api');
var command = process.argv[2];
var userInput = process.argv[3];


// ======== Only possible commands for LIRI:


switch (command){
	case "my-tweets":
		myTweets();
		break;
	case "spotify-this-song":
		spotifyThisSong();
		break;
	case "movie-this":
		movieThis();
		break;
	case "do-what-it-says":
		doWhatItSays();
		break;
	default:
		console.log("\r\n" + "Wrong command. Please try again with:" + "\r\n" + 
					"* my-tweets" + "\r\n" + 
					"* spotify-this-song" + "\r\n" + 
					"* movie-this " + "\r\n" + 
					"* do-what-it-says" + "\r\n" + 
					"Sorry, no more commands available at this moment." + "\r\n");

}


// ========== Tweeter function: ============


function myTweets(){

 	var client = new twitter({
	  consumer_key: keys.twitterKeys.consumer_key,
	  consumer_secret: keys.twitterKeys.consumer_secret,
	  access_token_key: keys.twitterKeys.access_token_key,
	  access_token_secret: keys.twitterKeys.access_token_secret
	});

	//var twitterUsername = userInput;

	

	var params = {screen_name: 'aFamousMe', count: 21};
	  
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
  		if (!error) {

  			console.log("\r\n" + "--------------------- My Tweets ---------------------" + "\r\n");

  			for( var i = 1; i < tweets.length; i++){

  				console.log( "Tweet #: " + i + ", " + "created:  " + tweets[i].created_at + "\r\n" +
	   				 tweets[i].text + "\r\n" + "\r\n" +
	   				"-----------------------------------------------------" + "\r\n");
  			}
  		}
  		else {
			console.log("Error: "+ error);
				return;
		}
		
	});	

}


// ========== Spotify function: ==========


function spotifyThisSong(){

	var spotify = new Spotify({
			id: keys.spotifyKeys.id,
			secret: keys.spotifyKeys.secret
		});

		var songName = userInput;

		if(!songName){
			
			songName = "The Sign";
		}

		var params = songName;

		spotify.search({ type: 'track', query: params }, function(err, data) {

			if (err) {
				return console.log('Error: ' + err);
			} else {
				var spotifyResponce = "\r\n" + "-------------------- Here's the song you searched for: ---------------------" + "\r\n" +
										"Song Name: " + params.toUpperCase() + "\r\n" + 
										"Artist(s): " + data.tracks.items[0].album.artists[0].name + "\r\n" +
										"Album: " + data.tracks.items[0].album.name + "\r\n" + 
										"Spotify Link: " + data.tracks.items[0].album.external_urls.spotify + "\r\n" + 
										"-----------------------------------------------------------------------------" + "\r\n";
								
				console.log(spotifyResponce);
			}
		});
	}



// ========= Movie function: ===========


function movieThis(){

	var movieName = userInput;

	if(!movieName){

		movieName = "mr nobody";
	}

	var params = movieName;

	var movieQueryUrl = "http://www.omdbapi.com/?t=" + params + "&y=&plot=short&apikey=trilogy";

	request(movieQueryUrl, function(error, response, body){

	  
	if (!error && response.statusCode === 200){


	  
	  var movieResponse = "\r\n" + "--------------------- " + JSON.parse(body).Title + " ----------------------" + "\r\n" + 
	   				"Year: " + JSON.parse(body).Year  + "\r\n" + 
	   				"IMDB Rating: " + JSON.parse(body).Ratings[0].Value + "\r\n" + 
	   				"Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value + "\r\n" + 
	   				"Country: " + JSON.parse(body).Country + "\r\n" + 
	   				"Language: " + JSON.parse(body).Language + "\r\n" + 
	   				"Plot: " + JSON.parse(body).Plot + "\r\n" + 
	   				"Actors: " + JSON.parse(body).Actors + "\r\n" + "\r\n" +
	   				"-----------------------------------------------------" + "\r\n";
	console.log(movieResponse);

		}
		
	else {
			console.log("Error: "+ error);
				return;
			}
	});
}



// ======Do what it says function: =========


function doWhatItSays(){

var fs = require("fs");

fs.readFile("random.txt", "utf8", function(error, data){
			if (!error) {
				var splitArray = data.split(',');

				//command = splitArray[0];
				userInput = splitArray[1];

				//console.log(command);
				//console.log(userInput);

				spotifyThisSong();

			} else {
				console.log("Error: " + error);
			}
		});


}


