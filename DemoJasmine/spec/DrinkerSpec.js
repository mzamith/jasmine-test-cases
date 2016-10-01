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

  it("should be happy from the start", function () {
    coffee = new Coffee();
    expect(person.isHappy).toBeTruthy();
  });


  describe("Drinking", function () {

    coffee = new Coffee();
    person = new Person();

    it("should throw exception if no coffee is passed", function () {
      expect(function () {
        person.drink();
      }).toThrowError("Null Pointer");
    });

    it("should drink and be sad after", function () {
      person.drink(coffee);

      //Demonstrating the use of a Custom Matcher;
      expect(person).not.toBeHappy();
      expect(coffee.status).toEqual("empty");
      expect(person.lastDrink).toBeDefined();
    });

    it("should have emptied the coffee", function () {
      // demonstrates use of 'not' with a custom matcher
      expect(coffee.status).toEqual("empty");
    });
  });


  //demonstrates use of expected exceptions
  describe("Refilling", function () {

    personToRefill = new Person();
    coffeeToRefill = new Coffee();

    it("should not happen if coffe is already full", function () {

      expect(function () {
        personToRefill.refill(coffeeToRefill);
      }).toThrowError("Coffee is already full");
    });

    it("should not happen if no coffee is passed!", function () {

      expect(function () {
        personToRefill.refill();
      }).toThrowError("Null Pointer");
    });

    it("should make the person happy!", function () {
      
      personToRefill.drink(coffeeToRefill);
      personToRefill.refill(coffeeToRefill);
      expect(personToRefill).toBeHappy()
      expect(coffeeToRefill.status).toEqual("full");

    });
    
  });

  describe("Spilling", function () {

    personToSpill = new Person();
    coffeeToSpill = new Coffee();

    it("should not happen if no coffe is passed", function () {
      expect(function () {
        personToSpill.spill();
      }).toThrowError("Null Pointer");
    });

    it("should empy coffe", function () {
      personToSpill.spill(coffee);
      expect(coffee.status).not.toEqual("full");
    });
  });


  describe("Time", function () {

    beforeEach(function () {
      coffeeToDrink = new Coffee();
      personToDrink = new Person();

      currentDate = new Date();
      jasmine.clock().install()
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
      jasmine.clock().tick( 4 * 60 * 60 * 1000)
      needsCoffee = personToDrink.needsCoffee();
      expect(needsCoffee).toBeTruthy();
    });
  });

});

