(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function () {
    this.DIM_X = 600;
    this.DIM_Y = 300;
    this.NUM_ASTEROIDS = 10;
    this.asteroids = [];
    this.addAsteroids(this.NUM_ASTEROIDS);
  };


  //Completely butchering this....
  Game.prototype.addAsteroids = function (num_asteroids) {
    (for(var i = 0; i < num_asteroids; i++) {
      var ast = new Asteroids.Asteroid(this.randomPosition());
      this.asteroids.push(ast);
    }).bind(this);
  };

  Game.prototype.randomPosition = function () {
    var randX = Math.floor(this.DIM_X * Math.random());
    var randY = Math.floor(this.DIM_Y * Math.random());
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
