(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  } 
    
  // utility functions
  var Util = Asteroids.Util = {
    // return the distance between two objects
    distance: function (pos1, pos2) {
      return Math.sqrt(((pos1[0] - pos2[0]) ** 2) + ((pos1[1] - pos2[1]) ** 2))
    },
    // surrogate method of classical inheritance
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
    },
    // Split the current vector
    // TODO: could use the angle of impact
    split: function (vec, deg, length) {
      var x, y;
      x = Math.asin(vec[0] / length);
      y = Math.acos(vec[1] / length);
      return Util.scale([Math.sin(x + deg), Math.cos(y + deg)], length);
    }
  }
})();
