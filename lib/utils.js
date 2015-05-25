(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Util = Asteroids.Util = function () {

  };


  // Utility functions
  Asteroids.Util.inherits = function (ChildClass, ParentClass) {
    function Surrogate () {};
    Surrogate.prototype = ParentClass.prototype;
    Childclass.prototype = new Surrogate();
  };

  Asteroids.Util.randomVec = function (length) {
    var lengthSq = length * length;
    var dx = Math.floor(Math.sqrt(lengthSq - (Math.random() * lengthSq)));
    var dy = Math.floor(Math.sqrt(lengthSq - (dx * dx)));
    return [dx, dy];
  };

})();
