(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  function Game (dim_x, dim_y, num_asteroids) {
    this.DIM_X = dim_x;
    this.DIM_Y = dim_y;
    this.NUM_ASTEROIDS = num_asteroids;
    this.asteroids = [];
    this.addAsteroids(this.NUM_ASTEROIDS);
  };

  Game.prototype.addAsteroids = function (num_asteroids) {
    for(var i = 0; i < num_asteroids; i++) {
      this.asteroids.push(new Asteroid(this.randomPosition()));
    }
  };

  Game.prototype.randomPosition = function () {
    var randX = this.DIM_X * Math.random();
    var randY = this.DIM_Y * Math.random();
    return [randX, randY];
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(
      0,
      0,
      this.DIM_X,
      this.DIM_Y
    );

    this.asteroids.forEach(function (asteroid) {
      asteroid.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function () {
    this.asteroids.forEach(function (asteroid) {
      asteroid.move;
    })
  };


})();
