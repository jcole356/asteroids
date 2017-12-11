(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Util = Asteroids.Util;

  var Bullet = Asteroids.Bullet = function (options) {
    // call super to instantiate a moving object
    this.constructor({
      color: Bullet.COLOR,
      game: options.game,
      pos: options.pos,
      radius: Bullet.RADIUS,
      vel: options.vel,
    })
  };

  // use surrogate method of classical inheritance
  Util.inherits(Bullet, Asteroids.MovingObject);

  Bullet.prototype.collideWith = function (otherObject) {
    this.game.remove(this);
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
      return;
    }
    if (otherObject instanceof Asteroids.Asteroid) {
      this.game.remove(otherObject);
      if (otherObject.radius > 15) {
        otherObject.split();
      }
    }
  };

  Bullet.prototype.isWrappable = false;
  
  // Constants
  Bullet.COLOR = '#ADFF2F';
  Bullet.RADIUS = 5;
})();
