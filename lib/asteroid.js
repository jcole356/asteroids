(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  // TODO: should pass an options object
  var Asteroid = Asteroids.Asteroid = function (pos) {
    // this.COLOR = "FF9900";
    // this.RADIUS = 50;
    // this.VELOCITY = [10, 10];
    // call super to instantiate a moving object
    this.constructor(
      pos,
      this.randomVel(10),
      // define these as constants
      50,
      'FF9900',
    )
  };

  // use surrogate method of classical inheritance
  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  // does this belong here or on moving object.  Maybe this
  // is the only random vector object
  Asteroid.prototype.randomVel = function(max) {
    var randX =  Math.floor(max * Math.random());
    var randY =  Math.floor(max * Math.random());
    return [randX, randY]
  }
})();
