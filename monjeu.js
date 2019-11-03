//Déclaration des variables
var frames = 0;
var background; 
var player;
var obstacles;
//var gameover;
//var points;

//Déclaration du Canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var W = canvas.width;
var H = canvas.height;

//Function draw
function draw() {
  ctx.clearRect(0, 0, W, H);

  //Draw background, draw player
  background.draw();
  player.draw();

  //Obstacles
  if (frames % 120 === 0) {
    
    //Test1 
    //var W = canvas.width;
    //var H = canvas.height;

    //var minGap = 200; // taille de mon image player ou mettre player.img ? (mon image)
    //var maxGap = 900;
    //var gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    var obstacle = new Obstacle();
    //obstacles.push(new Obstacle(W - gap, H, 150, W + gap));
    obstacles.push(obstacle);
  }

  obstacles.forEach(function(obstacle) {
    //obstacle.y += 5; // shark tombe du haut vers le bas
    obstacle.y -= 3; // shark qui monte du bas vers le haut
    //obstacle.x -= 3; // obstacle.x et non .y ? si je met .x le shark glisse
    obstacle.draw();
  });
}


function animLoop() {
  frames++;
  draw();
  if (!gameover) {
    requestAnimationFrame(animLoop);
  }
}

function startGame() {
  gameover = false;
  //points = 0;
  background = new Background();
  player = new Player();
  obstacles = []; 
  requestAnimationFrame(animLoop);
}

//Evènement au clic - Affichage du canvas
document.getElementById("start-button").onclick = function() {
  document.getElementById("page1").style.display = "none";
  document.getElementById("page2").style.display = "block";
  startGame();
};


startGame();

// je fais sauter mon player 
document.onkeydown = function(e) {
  if (!player) return; 

  console.log('keydown');
  switch (e.keyCode) {
    case 38:
      player.moveHeight();
      break;
    case 37:
      player.moveLeft();
      break;
    case 39:
      player.moveRight();
      break;
  }

  // En utilisant la gravité
  //if (e.keyCode === 32) {
  //  player.userPull = 0.3; }
  //};
  //document.onkeyup = function(e) {
  //  if (e.keyCode === 32) {
  //    player.userPull = 0;
  //  };
}

