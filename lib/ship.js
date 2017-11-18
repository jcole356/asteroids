(function () {
    if (typeof Asteroids === "undefined") {
      window.Asteroids = {};
    }
  
    var Util = Asteroids.Util;
  
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
    Ship.COLOR = 'FF9900';
    Ship.RADIUS = 10;
  })();
  