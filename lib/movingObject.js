(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Util = Asteroids.Util;

  var MovingObject = Asteroids.MovingObject = function (options) {
    this.color = options.color;
    this.game = options.game;
    this.pos = options.pos;
    this.radius = options.radius;
    this.vel = options.vel;
  };

  // overwrite with child classes methods
  MovingObject.prototype.collideWith = function (otherObject) {
  };

  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    ctx.fill();
  };

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    return Util.distance(this.pos, otherObject.pos) < this.radius + otherObject.radius
  };

  MovingObject.prototype.move = function () {
    var x = this.pos[0] += this.vel[0];
    var y = this.pos[1] += this.vel[1];
    // wrap the canvas
    this.pos = this.game.wrap([x, y])
  };
})();
