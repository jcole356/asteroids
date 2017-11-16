(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  } 
    
  // utility functions
  Asteroids.Util = {
    inherits: function (ChildClass, ParentClass) {
        function Surrogate () {};
        Surrogate.prototype = ParentClass.prototype;
        ChildClass.prototype = new Surrogate();
    },
    randomVec: function (length) {
        var lengthSq = length * length;
        var dx = Math.floor(Math.sqrt(lengthSq - (Math.random() * lengthSq)));
        var dy = Math.floor(Math.sqrt(lengthSq - (dx * dx)));
        return [dx, dy];
    }
  }
})();
