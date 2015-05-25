(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

function MovingObject (pos, vel, radius, color) {
  this.pos = pos;
  this.vel = vel; // Velocity
  this.radius = radius;
  this.color = color;
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

MovingObject.prototype.move = function () {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  this.draw;
};





var mo = new MovingObject([30, 30], [10, 10], 5, "#00FF00");
mo.draw(ctx);


})();
