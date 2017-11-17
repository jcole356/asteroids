(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function (pos, game) {
    // call super to instantiate a moving object
    this.constructor({
      color: Asteroid.COLOR,
      game: game,
      pos: pos,
      radius: Asteroid.RADIUS,
      vel: this.randomVel(10),
    })
  };

  // use surrogate method of classical inheritance
  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  // Constants
  Asteroid.COLOR = 'FF9900';
  Asteroid.RADIUS = 30;

  // does this belong here or on moving object.  Maybe this
  // is the only random vector object
  Asteroid.prototype.randomVel = function(max) {
    var randX =  Math.floor(max * Math.random());
    var randY =  Math.floor(max * Math.random());
    return [randX, randY]
  }
})();
