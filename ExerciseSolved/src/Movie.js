/** 
  * @desc this class pretends to simulate the behaviour of a simple
  * Movie.
  * @authors Manuel Zamith and Ana Rita Silva
*/
function Movie(name) {

	if (!name) throw new Error("Null Pointer");
	this.name = name;
}

/**
  * @desc change the name of the Movie
  * @throws error if name is null
*/
Movie.prototype.setName = function (name) {

	if (!name) throw new Error("Name can't be null")
	this.name = name;
};

/**
  * @desc sets the movie as a favorite
  * @trows error volume goes below 0
*/
Movie.prototype.setFavorite = function () {
	this.isFavorite = true;
}