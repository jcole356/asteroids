(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Util = Asteroids.Util;

  var Asteroid = Asteroids.Asteroid = function (pos, game) {
    // call super to instantiate a moving object
    this.constructor({
      color: Asteroid.COLOR,
      game: game,
      pos: pos,
      radius: Asteroid.RADIUS,
      vel: Util.randomVec(5),
    })
  };

  // use surrogate method of classical inheritance
  Util.inherits(Asteroid, Asteroids.MovingObject);

  // Constants
  Asteroid.COLOR = 'FF9900';
  Asteroid.RADIUS = 30;
})();
