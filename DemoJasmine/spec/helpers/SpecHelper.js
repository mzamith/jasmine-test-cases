var customMatchers = {
   toBeHappy: function() {
    return {
       compare: function(actual, expected) {
          
          if (expected === undefined) {
            expected = '';
          }

          var result = {};

          result.pass = (actual.isHappy === true);
          return result;
      }
    };
  }
}

