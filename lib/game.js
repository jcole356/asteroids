(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function (ctx) {
    this.asteroids = this.addAsteroids(Game.NUM_ASTEROIDS);
    this.ship = new Asteroids.Ship(this.randomPosition(), this);
    this.ctx = ctx;
  };

  // Constants
  Game.DIM_X = 800;
  Game.DIM_Y = 600;
  Game.NUM_ASTEROIDS = 4;

  Game.prototype.addAsteroids = function (num_asteroids) {
    var self = this;
    var asteroids = [];
    for(var i = 0; i < num_asteroids; i++) {
      var ast = new Asteroids.Asteroid(self.randomPosition(), self);
      asteroids.push(ast);
    };
    return asteroids;
  };

  Game.prototype.allObjects = function () {
    allObjects = [].concat(this.asteroids);
    allObjects.push(this.ship);
    return allObjects
  }

  // object1 can not be the ship
  Game.prototype.checkCollisions = function () {
    this.allObjects().forEach(function (object1, idx, objects) {
      objects.slice(idx + 1).forEach(function (object2) {
        if (object1.isCollidedWith(object2)) {
          object1.collideWith(object2);
        }
      });
    }, this);
  };

  Game.prototype.draw = function () {
    this.ctx.clearRect(
      0,
      0,
      Game.DIM_X,
      Game.DIM_Y
    );

    this.allObjects().forEach(function (object) {
      object.draw(this.ctx);
    }, this);
  };
  
  Game.prototype.moveObjects = function () {
    this.allObjects().forEach(function (object) {
      object.move();
    }, this)
  };
  
  Game.prototype.randomPosition = function () {
    var randX = Math.floor(Game.DIM_X * Math.random());
    var randY = Math.floor(Game.DIM_Y * Math.random());
    return [randX, randY];
  };

  // currently only removes asteroids
  Game.prototype.remove = function (asteroid) {
    this.asteroids.splice(this.asteroids.indexOf(asteroid), 1)
  };

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };

  // TODO: refactor
  // wrap asteroids to other side of canvas
  Game.prototype.wrap = function (pos) {
    var x = pos[0];
    var y = pos[1];
    if (pos[0] > Game.DIM_X) {
      x = 0;
      y = Game.DIM_Y - pos[1];
    }
    if (pos[0] < 0) {
      x = Game.DIM_X;
      y = Game.DIM_Y - pos[1];
    }
    if (pos[1] > Game.DIM_Y) {
      x = Game.DIM_X - pos[0];
      y = 0;
    }
    if (pos[1] < 0) {
      x = Game.DIM_X - pos[0];
      y = Game.DIM_Y;
    }
    return [x, y];
  };
})();
