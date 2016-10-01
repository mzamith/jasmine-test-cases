/** 
  * @desc this Test Set aims to provide test cases for the Movie and
  * Television classes
  * @authors Manuel Zamith and Ana Rita Silva
*/

describe("TV", function () {

  var movie;
  var television;

  beforeEach(function () {
    movie = new Movie("The Dark Knight");
    television = new Television();
  });

  it("should not allow nameless Movies", function () {
      expect(function () {
        namelessMovie = new Movie()
      }).toThrowError("Null Pointer"); 

      expect(function () {
        movie.setName();
      }).toThrowError("Name can't be null"); 

      expect(function () {
        movie.setName(null);
      }).toThrowError("Name can't be null"); 

  });

  it("should not be running from the start", function () {
    expect(television.isPlaying).toBeFalsy();
  });

  it("should not be able to set favorite", function () {
      expect(function () {
        television.makeFavorite();
      }).toThrowError("Not watching any movie"); 
  });

  it("should not be able to play without movie", function () {
     
      expect(function () {
        television.play();
      }).toThrowError("Please select a movie to watch");    
   });
  
  describe("Movie", function () {
  
    it("shoube have correct name", function () {
        expect(movie.name).toEqual("The Dark Knight");
    });

    it("shoube be able to change name", function () {
        movie.setName("The Dark Knight Rises");
        expect(movie.name).toEqual("The Dark Knight Rises");
    });
  })
  
  describe("TV Actions - Paused", function () {

    beforeEach(function () {
        television.play(movie);
        television.pause();
    });

    it("shouldn't be able to pause", function () {
    
      expect(function () {
        television.pause();
      }).toThrowError("Movie is already paused");

    });

    it("should be able to resume", function () {
        television.play()
        expect(television.currentlyPlayingMovie.name).toEqual("The Dark Knight");
        expect(television.isPlaying).toBeTruthy();
    });

    it("should be able to start a different movie", function () {

        differentMovie = new Movie("Batman vs. Superman")
        television.play(differentMovie)
        expect(television.currentlyPlayingMovie.name).toEqual("Batman vs. Superman");
        expect(television.isPlaying).toBeTruthy();
    });

  });

  describe("TV Actions - Playing", function () {

    beforeEach(function () {
        television.play(movie)
    });
  
    it("shouldn't be able to play again", function () {
    
      expect(function () {
        television.play(movie);
      }).toThrowError("Movie is already playing");

    });

    it("should be able to pause", function () {
        television.pause()
        expect(television.isPlaying).toBeFalsy();
    });

    it("shoule be able to set favourite", function () {
     
        television.makeFavorite();
        expect(movie.isFavorite).toBeTruthy();
    });


  });

  describe("Volume", function () {
  
    it("shoule be 50 from the start", function () {
        expect(television.volume).toBe(50);

    });

    it("should turn up by 10", function () {
        television.turnUpVolume()
        expect(television.volume).toBe(60);
    });

    it("should turn down by 10", function () {
     
        television.turnDownVolume();
        expect(television.volume).toBe(40);
    });

    it("shouldn't be able to exceed 100", function () {
     
      do {
          television.turnUpVolume();
      }
      while(television.volume < 100);

      expect(function () {
        television.turnUpVolume();
      }).toThrowError("Already in max volume");

      expect(television.volume).toBe(100);

    });
   
    it("shouldn't be able to go below 0", function () {
     
      do {
          television.turnDownVolume();
      }
      while(television.volume > 0);

      expect(function() {
        television.turnDownVolume();
      }).toThrowError("Already in min volume");

      expect(television.volume).toBe(0);

    });

  });

});

