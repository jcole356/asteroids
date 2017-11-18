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

    // TODO:
    // Bullet.prototype.collideWith = function (object) {

    // };
  
    // Constants
    Bullet.COLOR = 'FF9900';
    Bullet.RADIUS = 5;
  })();
  