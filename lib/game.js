(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function (ctx) {
    this.asteroids = this.addAsteroids(Game.NUM_ASTEROIDS);
    this.ctx = ctx;
  };

  // Constants
  Game.DIM_X = 800;
  Game.DIM_Y = 600;
  Game.NUM_ASTEROIDS = 10;

  Game.prototype.addAsteroids = function (num_asteroids) {
    var self = this;
    var asteroids = [];
    for(var i = 0; i < num_asteroids; i++) {
      var ast = new Asteroids.Asteroid(self.randomPosition());
      asteroids.push(ast);
    };
    return asteroids;
  };

  Game.prototype.randomPosition = function () {
    var randX = Math.floor(Game.DIM_X * Math.random());
    var randY = Math.floor(Game.DIM_Y * Math.random());
    return [randX, randY];
  };

  Game.prototype.draw = function () {
    this.ctx.clearRect(
      0,
      0,
      Game.DIM_X,
      Game.DIM_Y
    );

    this.asteroids.forEach(function (asteroid) {
      asteroid.draw(this.ctx);
    }, this);
  };

  // TODO: this should move all objects
  Game.prototype.moveObjects = function () {
    // move the asteroids
    this.asteroids.forEach(function (asteroid) {
      asteroid.move();
    }, this)
  };
})();
