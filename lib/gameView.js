(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function (game) {
    // this.game = window.Asteroids.Game
    // TODO: should be a new instance of a game
    this.game = game;
  };

  GameView.prototype.start = function () {
    window.setInterval((function () {
      this.game.moveObjects();
      this.game.draw()
    }).bind(this), 20);
  };

})();
