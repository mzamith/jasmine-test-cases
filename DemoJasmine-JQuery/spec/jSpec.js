describe("JQuery", function() {

	var fixture;
	beforeEach(function () {
	  loadFixtures('test.html');
	})


	it('should have a cool title', function() {
        
        title = $('h1')
   		expect( title ).toHaveText("MESW Login");
  	});

	it('to have the MESW image', function() {
        
        image = $('img')
   		expect( image ).toHaveAttr("src", "https://web.fe.up.pt/~dei/mesw/wp-content/uploads/sites/7/2016/04/img_site.jpg");
  	});

	it('to have two inputs', function() {
        
        inputs = $('input')
   		expect( inputs.length ).toBe(2);
  	});

	it('username input to have a placeholder', function() {
        
        username_input = $('#username')
   		expect( username_input.attr("placeholder") ).toEqual("Username");
  	});
    
	it('to have a submit button', function() {
        
        submit = $("button")
   		expect( submit ).toHaveText("Submit");
  	});

  
});

