(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Util = Asteroids.Util;

  // TODO: needs to accept a new velocity based on the previous velocity when splitting
  // TODO: make constructor accept an options hash
  var Asteroid = Asteroids.Asteroid = function (options) {
    // call super to instantiate a moving object
    this.constructor({
      color: Asteroid.COLOR,
      game: options.game,
      pos: options.pos,
      radius: options.radius || Asteroid.RADIUS,
      vel: options.vel || Util.randomVec(5),
    })
  };

  // use surrogate method of classical inheritance
  Util.inherits(Asteroid, Asteroids.MovingObject);

  /*
    If the asteroid hits another asteroid, do nothing
    If the asteroid hits somethig else, split the asteroid
  */
  Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroid) {
      return;
    }
    this.game.remove(this);
    if (this.radius > 15) {
      this.split();
    }
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
      return;
    }
    // if otherObject is a bullet (should never hit)
    this.game.remove(otherObject);
  };

  // TODO: may want to remove by default
  Asteroid.prototype.split = function () {
    var self = this;
    for (var i = 0; i < 2; i++) {
      var dir = i % 2 === 0 ? 1 : -1;
      var newVec = Util.split(self.vel, Math.PI / 6 * dir, 5);
      self.game.add(new Asteroid({
        pos: [self.pos[0] + newVec[0], self.pos[1] + newVec[1]],
        game: self.game,
        radius: Math.floor(self.radius / 2),
        vel: newVec
      }));
    }
  };

  // Constants
  Asteroid.COLOR = '#FFFFFF';
  // TODO: make the starting size of the asteroids bigger
  Asteroid.RADIUS = 60;
})();
