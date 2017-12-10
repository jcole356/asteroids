(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Util = Asteroids.Util;

  // TODO: ship should have a facing direction property
  var Ship = Asteroids.Ship = function (pos, game) {
    // call super to instantiate a moving object
    this.constructor({
      color: Ship.COLOR,
      game: game,
      pos: pos,
      radius: Ship.RADIUS,
      vel: [0, 0],
    })
  };

  // use surrogate method of classical inheritance
  Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.fireBullet = function () {
    var xDir, yDir;
    if (this.vel[0] === 0) {
      xDir = 0;
    } else {
      xDir = this.vel[0] > 0 ? 1 : -1;
    }
    // TODO: for now, default direction of stationary ship is up
    if (this.vel[1] === 0) {
      if (this.vel[0] === 0) {
        yDir = -1;
      } else {
        yDir = 0;
      }
    } else {
      yDir = this.vel[1] > 0 ? 1 : -1;
    }
    var x = this.pos[0] + this.vel[0] + ((this.radius + Asteroids.Bullet.RADIUS + 1) * xDir);
    var y = this.pos[1] + this.vel[1] + ((this.radius + Asteroids.Bullet.RADIUS + 1) * yDir);
    this.game.add(new Asteroids.Bullet({
      game: this.game,
      pos: [x, y],
      vel: [this.vel[0] + (xDir * 2), this.vel[1] + (yDir * 2)],
    }))
  };

  Ship.prototype.power = function (impulse) {
    var x = this.vel[0] + impulse[0];
    var y = this.vel[1] + impulse[1];
    this.vel = [x, y];
  };

  Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };

  // Constants
  Ship.COLOR = '#FFFFFF';
  Ship.RADIUS = 10;
})();
