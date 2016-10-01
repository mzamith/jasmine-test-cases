/** 
  * @desc this class pretends to simulate the behaviour of a simple
  * Coffe Drinker. The person is Happy when its cup of coffee is full!
  * @authors Manuel Zamith and Ana Rita Silva
*/

function Person() {
	this.isHappy = true;
	this.lastDrink = null;
}

/**
  * @desc drink a cup of coffee
  * @param object coffee - the cup of coffee
  * @throws error if no coffe is passed as parameter
*/
Person.prototype.drink = function (coffee) {

	if (!coffee) throw new Error ("Null Pointer");

	this.lastDrink = new Date();
	this.isHappy = false;
	coffee.status = "empty";
};


/**
  * @desc refill a cup of coffee
  * @param object coffee - the cup of coffee
  * @throws error if no coffe is passed as parameter
  * @throws error if no coffe coffee is already full
*/
Person.prototype.refill = function (coffee) {

	if (!coffee) throw new Error ("Null Pointer");

	if (coffee.status === "full") {
		throw new Error("Coffee is already full");
	}

	this.isHappy = true;
	coffee.status = "full";
};

/**
  * @desc spill a cup of coffee
  * @param object coffee - the cup of coffee
  * @throws error if no coffe is passed as parameter
*/
Person.prototype.spill = function (coffee) {

	if (!coffee) throw new Error ("Null Pointer");

	coffee.status = "empty";
	this.isHappy = false;
}

/**
  * @desc function tells if the person is needing coffee
  * Person needs coffee when 3 hours have passed since last drink,
  * Or if it hasn't had any coffee yet!
*/
Person.prototype.needsCoffee = function(){

	if (!this.lastDrink) return true;
	return (new Date() - this.lastDrink) / 3600000.0 >= 3.0;
}

