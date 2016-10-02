/** 
  * @desc this class pretends to simulate the behaviour of a simple
  * Television set.
  * @authors Manuel Zamith and Ana Rita Silva
*/

function Television() {
    this.volume = 50;
    this.isPlaying = false;
}

/**
  * @desc starts or resumes movie exibition
  * @param object movie - the movie to be played (optional)
  * @trows Error if movie is already playing
  * @trows Error if no movie is passed and is not paused
*/
Television.prototype.play = function (movie) {

    //can't play if it is already playing
    if (this.isPlaying){
        throw new Error ("Movie is already playing");

    //if a movie is passed as a parameter
    //it should play it, even if it is a different movie
    } else if (movie){
        this.currentlyPlayingMovie = movie;

    //if a movie is nor passed as parameter
    //it should only resume if paused
    } else if (this.currentlyPlayingMovie && !movie){
        this.isPlaying = true;

    } 
};

/**
  * @desc pauses a playing movie
  * @trows error if movie is already paused
*/
Television.prototype.pause = function () {
	
    if (!this.isPlaying) throw new Error ("Movie i already paused");
    this.isPlaying = false;
};

/**
  * @desc turn up the volume by 10
  * @trows error volume passes 100
*/
Television.prototype.turnUpVolume = function () {

    if (this.volume > 90) throw new Error ("Already in max volume");
	this.volume += 10;
};

/**
  * @desc turn down the volume by 10
  * @trows error volume goes below 0
*/
Television.prototype.turnDownVolume = function () {
	
    if (this.volume < 10) throw new Error ("Already in min volume");
	this.volume -= 10;
};

/**
  * @desc make currently playing movie a Favoritw
  * @trows error if no movie is playing
*/
Television.prototype.makeFavorite = function () {
    this.currentlyPlayingMovie.setFavorite();
};