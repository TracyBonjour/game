// Génère mes obstacles (shark) aléatoirement entre deux positions sur le canvas
function random(from, to) {
   return Math.floor(from + Math.random()*(to - from));
}
// créer mes obstacles (shark), position et téléchargement de l'image
class Obstacle {
    constructor() {
      const img = document.createElement("img");
      img.onload = () => {
        this.img = img;
  
        const imgRatio = img.naturalWidth / img.naturalHeight;
  
        this.w = 130; // taille du shark
        this.h = this.w / imgRatio; // dimension pour ne pas déformer l'image

        //this.x = random(1200, 300);
        this.x = random(1300, 500);
        this.y = H;//sort depuis le bas de la page
        //this.y = H - this.h;// option apparait d'un coup
        
        //var minGap = 200; // taille de mon image player ou mettre player.img ? (mon image)
        //var maxGap = 900;
        //this.gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
        //this.x = random(1200, 300);
       
      };
      img.src = "./monjeuimage/shark2.png";
    }

    // dessiner mon obstacle
    draw() {
      if (!this.img)return;
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    // function si l'obstacle touche le player
    hits(player) {
      return (
        (player.x+player.w >= this.x && player.x <= this.x+this.w) 
        &&
        (player.y <= this.y+this.h && player.y+player.h >= this.y)
      );
    }
  }
  