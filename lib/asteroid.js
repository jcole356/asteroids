(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  // TODO: should pass an options object
  var Asteroid = Asteroids.Asteroid = function (pos) {
    // call super to instantiate a moving object
    this.constructor({
      pos: pos,
      vel: this.randomVel(10),
      radius: Asteroid.RADIUS,
      color: Asteroid.COLOR,
    })
  };

  // use surrogate method of classical inheritance
  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  // constants
  Asteroid.COLOR = 'FF9900';
  Asteroid.RADIUS = 50;

  // does this belong here or on moving object.  Maybe this
  // is the only random vector object
  Asteroid.prototype.randomVel = function(max) {
    var randX =  Math.floor(max * Math.random());
    var randY =  Math.floor(max * Math.random());
    return [randX, randY]
  }
})();
