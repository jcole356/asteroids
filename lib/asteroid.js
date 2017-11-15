(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  // TODO: asteroid should inherit from moving object
  var Asteroid = Asteroids.Asteroid = function (pos) {
    this.COLOR = "FF9900";
    this.RADIUS = 50;
    // TODO:
    // this.OBJECT = new Asteroids.MovingObject(
    // new Asteroids.MovingObject(
    //   pos,
    //   this.randomVel(5),
    //   this.RADIUS,
    //   this.COLOR
    // );
  };

  // TODO: can't remember what num is?  Max?
  // should this be used from utils?
  Asteroid.prototype.randomVel = function(num) {
    return Math.random(num);
  }
})();
