(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function (ctx, height, width) {
    this.asteroids = [];
    this.ctx = ctx;
    // add a background image
    this.img = new Image();
    this.img.src = './space.jpg';
    this.DIM_X = width;
    this.DIM_Y = height;
    this.addAsteroids(Game.NUM_ASTEROIDS);
    this.bullets = [];
    this.ship = new Asteroids.Ship(this.randomPosition(), this);
  };

  // Constants
  Game.NUM_ASTEROIDS = 5;

  Game.prototype.add = function (object) {
    if (object instanceof Asteroids.Asteroid) {
      this.asteroids.push(object);
    }
    if (object instanceof Asteroids.Bullet) {
      this.bullets.push(object);
    }
  };

  Game.prototype.addAsteroids = function (num_asteroids) {
    var self = this;
    for(var i = 0; i < num_asteroids; i++) {
      var ast = new Asteroids.Asteroid({
        pos: self.randomPosition(), 
        game: self
      });
      self.add(ast);
    };
  };

  Game.prototype.allObjects = function () {
    allObjects = [].concat(this.bullets).concat(this.asteroids);
    allObjects.push(this.ship);
    return allObjects
  }

  // NOTE: object1 can not be the ship
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
    // check if the image is loaded
    if (!this.img.complete) {
      return;
    }
    // clear the canvas
    this.ctx.clearRect(
      0,
      0,
      this.DIM_X,
      this.DIM_Y
    );
    // draw the image
    this.ctx.drawImage(
      this.img,
      0,
      0,
      this.img.naturalWidth,
      this.img.naturalHeight,
      0,
      0,
      this.DIM_X,
      this.DIM_Y
    );
    // draw the other objects
    this.allObjects().forEach(function (object) {
      object.draw(this.ctx);
    }, this);
  };

  Game.prototype.isOutOfBounds = function (pos) {
    if (pos[0] < 0 || pos[0] > this.DIM_X) {
      return true;
    } else if (pos[1] < 0 || pos[1] > this.DIM_Y) {
      return true;
    }
    return false;
  };
  
  Game.prototype.moveObjects = function () {
    this.allObjects().forEach(function (object) {
      object.move();
    }, this)
  };
  
  Game.prototype.randomPosition = function () {
    var randX = Math.floor(this.DIM_X * Math.random());
    var randY = Math.floor(this.DIM_Y * Math.random());
    return [randX, randY];
  };

  // TODO: make this more Dry
  Game.prototype.remove = function (object) {
    if (object instanceof Asteroids.Asteroid) {
      this.asteroids.splice(this.asteroids.indexOf(object), 1)
    }
    if (object instanceof Asteroids.Bullet) {
      this.bullets.splice(this.bullets.indexOf(object), 1)
    }
  };

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };

  // TODO: refactor
  // wrap asteroids to other side of canvas
  Game.prototype.wrap = function (pos, vel) {
    var x = pos[0];
    var y = pos[1];
    if (pos[0] > this.DIM_X) {
      x = 0;
      if (vel[1] !== 0) {
        y = this.DIM_Y - pos[1];
      }
    }
    if (pos[0] < 0) {
      x = this.DIM_X;
      if (vel[1] !== 0) {
        y = this.DIM_Y - pos[1];
      }
    }
    if (pos[1] > this.DIM_Y) {
      if (vel[0] !== 0) {
        x = this.DIM_X - pos[0];
      }
      y = 0;
    }
    if (pos[1] < 0) {
      if (vel[0] !== 0) {
        x = this.DIM_X - pos[0];
      }
      y = this.DIM_Y;
    }
    return [x, y];
  };
})();
