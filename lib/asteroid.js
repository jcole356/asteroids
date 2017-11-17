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

  // TODO: refactor not very DRY
  Asteroid.prototype.randomVel = function(max) {
    var xMag =  Math.floor(max * Math.random());
    var yMag =  Math.floor(max * Math.random());
    var xDir = Math.round(Math.random()) ? 1 : -1;
    var yDir = Math.round(Math.random()) ? 1 : -1;
    return [xMag * xDir, yMag * yDir];
  }
})();
