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

  Asteroid.prototype.collideWith = function (otherObject) {
    this.game.remove(this);
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
      return;
    }
    this.game.remove(otherObject);
  };

  // Constants
  Asteroid.COLOR = '#ffffff';
  Asteroid.RADIUS = 30;
})();
