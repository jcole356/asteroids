(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function (ctx) {
    this.DIM_X = 800;
    this.DIM_Y = 600;
    this.NUM_ASTEROIDS = 10;
    this.asteroids = this.addAsteroids(this.NUM_ASTEROIDS);
    this.ctx = ctx;
  };

  Game.prototype.addAsteroids = function (num_asteroids) {
    var self = this;
    var asteroids = [];
    for(var i = 0; i < num_asteroids; i++) {
      var ast = new Asteroids.Asteroid(self.randomPosition());
      asteroids.push(ast);
    };
    return asteroids;
  };

  // TODO: this belong here or on moving object class?
  Game.prototype.randomPosition = function () {
    var randX = Math.floor(this.DIM_X * Math.random());
    var randY = Math.floor(this.DIM_Y * Math.random());
    return [randX, randY];
  };

  Game.prototype.draw = function () {
    this.ctx.clearRect(
      0,
      0,
      this.DIM_X,
      this.DIM_Y
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
    // redraw the game
    this.draw(this.ctx);
  };
})();
