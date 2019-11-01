var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var W = canvas.width;
var H = canvas.height;

var frames = 0;
var player;

var obstacles = [];

document.getElementById("start-button").onclick = function() {
  document.getElementById("page1").classList.remove("active");
  document.getElementById("page2").classList.add("active");

  startGame();
};

var img = new Image();
img.src = "./monjeuimage/bg.jpg";

var backgroundImage = {
  img: img,
  x: 0,
  speed: -2,

  move: function() {
    console.log('move');

    this.x += this.speed;
    this.x %= W;
  },

  draw: function() {
    ctx.drawImage(this.img, this.x, 0);

    ctx.drawImage(this.img, this.x + W, 0);
  }
};

function clearCanvas() {
  ctx.clearRect(0,0,W,H);
}

function updateCanvas(){
  frames++;


  clearCanvas();

  backgroundImage.move();
  backgroundImage.draw();

  //
  // Tracer le player
  player.draw();

  //

  //
  // creer un nouvel obstacle (requin) toutes les 120 frames
  function updateObstacles() {

    //if (/* je suis sur un multiple de 120e frame */) {
      // je crée un nouvel obstacle
    if (frames % 120 === 0) {
      var obstacles = new Obstacles();
      obstacles.push(obstacles);
    }
    // je le trace 
    obstacles.forEach(function(obstacles)){
      obstacles.y += 5;
      obstacles.draw();
    }
  }

  updateObstacles();
  //
   
  window.requestAnimationFrame(updateCanvas);
}

function startGame() {
  // je lance la boucle d'animation
  player = new Player();
  window.requestAnimationFrame(updateCanvas);
}

