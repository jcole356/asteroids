(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function (ctx) {
    this.ctx = ctx;
    this.game = new Asteroids.Game(ctx);
  };

  GameView.prototype.start = function () {
    this.game.draw();
    window.setInterval((function () {
        this.game.moveObjects();
        this.game.draw();
    }).bind(this), 20);
  };
})();
