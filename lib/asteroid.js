(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  function Asteroid (pos) {
    this.COLOR = "FF9900";
    this.RADIUS = 50;
    new MovingObject(
      pos,
      this.randomVel(5),
      this.RADIUS,
      this.COLOR,
    );
  };





})();
