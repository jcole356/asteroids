(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  // TODO: should pass an options object
  var Asteroid = Asteroids.Asteroid = function (pos) {
    // this.COLOR = "FF9900";
    // this.RADIUS = 50;
    // this.VELOCITY = [10, 10];
    // call super to instantiate a moving object
    this.__proto__.constructor(
      pos,
      // TODO: create velocity dynamically
      [10, 10],
      50,
      'FF9900',
    )
  };

  // use surrogate method of classical inheritance
  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  // TODO: can't remember what num is?  Max?
  // should this be used from utils?
  Asteroid.prototype.randomVel = function(num) {
    return Math.random(num);
  }
})();
