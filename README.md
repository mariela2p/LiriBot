# LiriBot

LIRI is a _Language_ Interpretation and Recognition Interface, command line node app that takes in parameters and gives you back data.

### What Each Command Does

1. `node liri.js my-tweets`

   * This will show your last 20 tweets and when they were created at in the terminal/bash window.
   
   
2. `node liri.js spotify-this-song '<song name here>'`

   * This shows the following information about the song in the terminal/bash window
     
     * Artist(s)
     
     * The song's name
     
     * A preview link of the song from Spotify
     
     * The album that the song is from

   * If no song is provided then your program will default to "The Sign" by Ace of Base.
   
   
3. `node liri.js movie-this '<movie name here>'`

   * This outputs the following information to the terminal/bash window:
   
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
       
     
![movies](https://user-images.githubusercontent.com/31390306/34798159-f4f6b39e-f628-11e7-89be-1e0b6de1b1c5.png)


 * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
   

4. `node liri.js do-what-it-says`
   
   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     
     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`
     

5. If a wrong command is typed, then the terminal/bash window shows the list of commands that can be used.

