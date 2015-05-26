(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  function GameView () {
    this.game = window.Asteroids.Game
  };

  GameView.prototype.start = function () {
    window.setInterval((function () {
      this.game.moveObjects();
      this.game.draw()
    }).bind(this), 20);
  };

})();
