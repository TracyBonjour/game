// Télécharger l'image de mon background dans une class et l'animer
class Background {
  constructor() {
    const img = document.createElement("img");
    img.onload = () => {
      this.img = img;
      this.x = 0;
      this.speed = -5;//rapidité du défilement
      this.y = 0;
    };
    img.src = "./monjeuimage/bg.jpg";
  }
  //function mouvement de mon background
  move() {
    this.x += this.speed;
    this.x %= W; //son x est modulo à la width W du canvas (taille)
  }
  //dessiner le background sur le canvas
  draw() {
    if (!this.img) return;
    ctx.drawImage(this.img, this.x, this.y);
    ctx.drawImage(this.img, this.x + W, 0);
  }
};
