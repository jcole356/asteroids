(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function (canvasEl) {
    // account for the body's padding
    this.height = window.innerHeight - 16;
    this.width = window.innerWidth - 16;
    canvasEl.height = this.height;
    canvasEl.width = this.width;
    this.game = new Asteroids.Game(canvasEl.getContext('2d'), this.height, this.width);
  };

  GameView.prototype.bindKeyHandlers = function () {
    key('up', function () { 
      this.game.ship.power([0, -2]); 
    }.bind(this));
    key('down', function () { 
      this.game.ship.power([0, 2]); 
    }.bind(this));
    key('left', function () { 
      this.game.ship.power([-2, 0]); 
    }.bind(this));
    key('right', function () { 
      this.game.ship.power([2, 0]); 
    }.bind(this));
    key('a', function () {
      this.game.ship.fireBullet();
    }.bind(this));
  };

  GameView.prototype.start = function () {
    this.game.draw();
    this.bindKeyHandlers();
    window.setInterval((function () {
      this.game.step();
      this.game.draw();
    }).bind(this), 20);
  };
})();
