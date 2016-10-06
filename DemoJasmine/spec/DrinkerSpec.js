/** 
  * @desc this Test Set aims to provide test cases for the Person and
  * Coffee classes
  * @authors Manuel Zamith and Ana Rita Silva
*/

describe("Coffee", function () {

  var coffee;
  var person;

  beforeEach(function () {
    jasmine.addMatchers(customMatchers);
  });

  it("should be full from the start", function () {
    coffee = new Coffee();
    expect(coffee.status).toEqual("full");
  });

  it("Person should be happy from the start", function () {
    person = new Person();
    expect(person.isHappy).toBeTruthy();
  });
/*
------------------------------------------------------------------
TEST CASE 1
------------------------------------------------------------------
*/
  describe("Drinking", function () {

    coffeeToDrink = new Coffee();
    personToDrink = new Person();

    it("should throw exception if no coffee is passed", function () {
      expect(function () {
        personToDrink.drink();
      }).toThrowError("Null Pointer");
    });

    it("should be sad after drinking", function () {
      personToDrink.drink(coffeeToDrink);

      //Demonstrating the use of a Custom Matcher;
      expect(personToDrink).not.toBeHappy();
      expect(personToDrink.lastDrink).toBeDefined();
    });

    it("should have emptied the coffee", function () {
      expect(coffeeToDrink.status).toEqual("empty");
    });
  });

/*
------------------------------------------------------------------
TEST CASE 2
------------------------------------------------------------------
*/

  //demonstrates use of expected exceptions
  describe("Refilling", function () {

    personToRefill = new Person();
    coffeeToRefill = new Coffee();

    it("should not be allowed if coffe is already full", function () {

      expect(function () {
        personToRefill.refill(coffeeToRefill);
      }).toThrowError("Coffee is already full");
    });

    it("should not be allowed if no coffee is passed!", function () {

      expect(function () {
        personToRefill.refill();
      }).toThrowError("Null Pointer");
    });

    it("should make the person happy!", function () {

      personToRefill.drink(coffeeToRefill);

      personToRefill.refill(coffeeToRefill);
      expect(personToRefill).toBeHappy()
      
    });

    it("should make the coffee full", function () {

      expect(coffeeToRefill.status).toEqual("full");
    });

  });

/*
------------------------------------------------------------------
TEST CASE 3
------------------------------------------------------------------
*/

  describe("Spilling", function () {

    personToSpill = new Person();
    coffeeToSpill = new Coffee();

    it("should not happen if no coffe is passed", function () {
      expect(function () {
        personToSpill.spill();
      }).toThrowError("Null Pointer");
    });

    it("should empty coffe", function () {
      personToSpill.spill(coffee);
      expect(coffee.status).not.toEqual("full");
    });

    it("should make person sad", function () {
      
      expect(personToSpill).not.toBeHappy();
    });
  });

/*
------------------------------------------------------------------
TEST CASE 4
------------------------------------------------------------------
*/

  describe("Time", function () {

    beforeEach(function () {
      coffeeToDrink = new Coffee();
      personToDrink = new Person();

      currentDate = new Date();
      jasmine.clock().install();
      jasmine.clock().mockDate(currentDate);

    });

    afterEach(function () {
      jasmine.clock().uninstall();
    })

    it("should need coffee from start", function () {

      needsCoffee = personToDrink.needsCoffee();
      expect(needsCoffee).toBeTruthy();
    });

    it("shouldn't need coffee after drinking", function () {

      personToDrink.drink(coffeeToDrink);
      needsCoffee = personToDrink.needsCoffee();
      expect(needsCoffee).toBeFalsy();
    });

    it("should need coffee after some hours", function () {

      personToDrink.drink(coffeeToDrink);
      jasmine.clock().tick(4 * 60 * 60 * 1000)
      needsCoffee = personToDrink.needsCoffee();
      expect(needsCoffee).toBeTruthy();
    });
  });

});

