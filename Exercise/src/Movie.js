/** 
  * @desc this class pretends to simulate the behaviour of a simple
  * Movie.
  * @authors Manuel Zamith and Ana Rita Silva
*/
function Movie(name) {
	this.name = name;
}

/**
  * @desc change the name of the Movie
*/
Movie.prototype.setName = function (name) {
	this.name = name;
};

/**
  * @desc sets the movie as a favorite
*/
Movie.prototype.setFavorite = function () {
	this.isFavorite = true;
}