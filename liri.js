// variables

var request = require("request");
var keys = require("./keys.js");
var twitter = require("twitter");
var spotify = require('node-spotify-api');
var command = process.argv [2]
var userInput = process.argv [3];


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

	var params = {screen_name: "aFamousMe", count: 20};
	
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
  		if (!error) {

    	console.log(tweets);
  		}
	});	
}



// ========== Spotify function: ==========


function spotifyThisSong(){

}



// ========= Movie function: ===========


function movieThis(){
	var movieName = userInput;

	var movieQueryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

	if(!movieName){
			movieName = "mr nobody";
		}

	request(movieQueryUrl, function(error, response, body){

	  
	if (!error && response.statusCode === 200){
	  
	   console.log("\r\n" + "--------------LIRI BOT at your service-------------- " + "\r\n" + "\r\n" + 
	   				"Title: " + JSON.parse(body).Title + "\r\n" +
	   				"Year: " + JSON.parse(body).Year  + "\r\n" + 
	   				"IMDB Rating: " + JSON.parse(body).Ratings[0].Value + "\r\n" + 
	   				"Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value + "\r\n" + 
	   				"Country: " + JSON.parse(body).Country + "\r\n" + 
	   				"Language: " + JSON.parse(body).Language + "\r\n" + 
	   				"Plot: " + JSON.parse(body).Plot + "\r\n" + 
	   				"Actors: " + JSON.parse(body).Actors + "\r\n" + "\r\n" +
	   				"-----------------------------------------------------" + "\r\n");
		}
	else {
			console.log("Error: "+ error);
				return;
			}
	});
};



// ======Do what it says function: =========


function doWhatItSays(){

}


