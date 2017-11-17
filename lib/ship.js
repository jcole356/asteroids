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

    Ship.prototype.relocate = function () {
        console.log('I will move the ship soon');
    };
  
    // Constants
    Ship.COLOR = 'FF9900';
    Ship.RADIUS = 10;
  })();
  