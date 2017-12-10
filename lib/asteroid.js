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

  // TODO: lets update the collision logic
  Asteroid.prototype.collideWith = function (otherObject) {
    this.game.remove(this);
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
      return;
    }
    this.game.remove(otherObject);
  };

  // Constants
  Asteroid.COLOR = '#FFFFFF';
  // TODO: make the starting size of the asteroids bigger
  Asteroid.RADIUS = 60;
})();
