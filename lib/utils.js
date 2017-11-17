(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  } 
    
  // utility functions
  var Util = Asteroids.Util = {
    inherits: function (ChildClass, ParentClass) {
        function Surrogate () {};
        Surrogate.prototype = ParentClass.prototype;
        ChildClass.prototype = new Surrogate();
    },
    // Return a randomly oriented vector with the given length.
    randomVec: function (length) {
      var deg = 2 * Math.PI * Math.random();
      return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    },
    // Scale the length of a vector by the given amount.
    scale: function (vec, m) {
      return [vec[0] * m, vec[1] * m];
    }
  }
})();
