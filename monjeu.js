//Evènement au clic - Affichage du canvas
document.getElementById("start-button").onclick = function() {
  document.getElementById("page1").style.display = "none";
  document.getElementById("page2").style.display = "block";
  document.getElementById("page3").style.display = "none";

  startIntro();

  startGame();
};

//Déclaration des variables
var frames = 0;
var background;
var player;
var obstacles;
const gravity = 2;
var gameover;
let victory;
let raf;
let points;
let win;



//Déclaration du Canvas
var ctx = document.querySelector("#page3 canvas").getContext("2d");

var W = ctx.canvas.width;
var H = ctx.canvas.height;

//Function draw
function draw() {
  ctx.clearRect(0, 0, W, H);

  //Draw background, draw player
  background.move();
  background.draw();
  //tracer le player
  player.update(); // on recalcule les positions de notre player
  player.draw(); // puis on l'affiche

  //Obstacles : creer un nouvel obstacle (requin) toutes les 120 frames
  //if (/* je suis sur un multiple de 120e frame */) {
  // je crée un nouvel obstacle
  if (frames % 150 === 0) {
    var obstacle = new Obstacle();

    obstacles.push(obstacle);
    //obstacles.push(obstacle(W - gap, H, 150, W + gap));
  }
  // je le trace
  obstacles.forEach(function(obstacle) {
    //obstacle.y += 5; // shark tombe du haut vers le bas
    obstacle.x -= 4;
    if (obstacle.y >= 450) {
      // ajustement de l'arret du shark dans sa monté
      obstacle.y -= 4; // vitesse du shark qui glisse
    }
    obstacle.draw();
  });

  obstacles.forEach(function(obstacle) {
    if (obstacle.hits(player)) {
      console.log("crashed");
      gameover = true;
      // afficher Game over sur l'écran
      const img = document.createElement("img");
      img.onload = () => {
        ctx.drawImage(img, 300, 100, 600, 600);
        //ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        ctx.font = "60px Verdana";
        ctx.fillStyle = "white";
        ctx.fillText("Game Over!", 780, 400);
        ctx.font = "28px Verdana";
        ctx.fillText("Your final score: " + points, 720, 450);
        
        //pour restart mon jeu automatiquement
        setTimeout(function () { // attention si je recharge pas ma page la deuxieme fois que je joue la page 2 disparait
          document.getElementById("page3").style.display = 'none';
          document.getElementById("page1").style.display = 'block';
        }, 3000);
      };
      img.src = "./monjeuimage/gameover2.png";
      //img.src = "./monjeuimage/gameover1.png";

      const audio = document.createElement("audio");
      audio.onload = () => {
        this.audio = audio;
      };
      audio.src = "./audio/smartsound_HUMAN_VOCAL_Male_Scream_Deep_Pain_04.mp3";

      audio.play();
      
    }
  });

  //Gagner au bout de la 3000 eme frames
  if (frames === 3000) {
    console.log('>500')
    win = new Win();
  }
  //si il a gagné, le dessiner (ile)
  if (win) {
    win.draw();
    
    if (win.hits(player)) {
      victory = true;

      ctx.font = "50px Verdana";
      ctx.fillStyle = "white";
      ctx.fillText("Bienvenue au paradis!", 730, 350);
      const audio = document.createElement("audio");
      audio.onload = () => {
        this.audio = audio;
      };
      audio.src = "./audio/little_robot_sound_factory_Jingle_Win_Synth_05.mp3";

      audio.play();
      
    };
    
  }

  //le score du player
  ctx.font = "30px Verdana";
  ctx.textAlign = "right";
  ctx.fillStyle = "white";
  ctx.fillText(`${points} pts`, W - 30, 60);
  points++;
}

function animLoop() {
  frames++;
  draw();

  if (!victory && !gameover) {
    requestAnimationFrame(animLoop);
  }
}

function startGame() {
  victory = false;
  gameover = false;
  points = 0;
  background = new Background();
  player = new Player();
  obstacles = [];

  requestAnimationFrame(animLoop);
}


// états d'enfoncement des touches
const pressed = {
  space: false,
  arrowleft: false,
  arrowright: false
};

// je fais sauter mon player
document.onkeydown = function(e) {
  if (!player) return;

  //console.log('keydown');
  switch (e.keyCode) {
    //SPACE
    case 32:
      if (pressed.space) return; // STOP si touche déja enfoncée
      pressed.up = true;

      player.jump(); // jump player 🦘
      break;
    // LEFT
    case 37:
      if (pressed.arrowleft) return; // STOP si touche déja enfoncée
      pressed.arrowleft = true;

      player.backward(); // GO back
      break;
    // RIGHT
    case 39:
      if (pressed.arrowright) return; // STOP si touche déja enfoncée
      pressed.right = true;

      player.forward(); // GO ahead player
      break;
  }
};

document.onkeyup = function(e) {
  switch (e.keyCode) {
    // SPACE
    case 38:
      // on "libère" l'etat d'enfoncement de la touche
      pressed.space = false;
      break;
    // ARROWLEFT
    case 37:
      // on "libère" l'etat d'enfoncement de la touche
      pressed.arrowleft = false;

      // on annule la vitesse horizontale
      player.vx = 0;
      break;
    // ARROWRIGHT
    case 39:
      // on "libère" l'etat d'enfoncement de la touche
      pressed.arrowright = false;

      // on annule la vitesse horizontale
      player.vx = 0;
      break;
  }
};
