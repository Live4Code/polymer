var assert = require('assert');
var map = require("./function-map.js");

describe('Test Function map', function(){
  describe('map', function(){
    it('should have a doubleAll Method', function(){
      assert.equal(typeof map, 'object');
      assert.equal(typeof map.doubleAll, 'function');
    });

    it('doubleAll(1,2,3,4,5,6) should equal [2,4,6,8,10,12]', function(){
         assert.deepEqual(map.doubleAll([1,2,3,4,5,6]), [2,4,6,8,10,12]);
     }); 

  });
});
