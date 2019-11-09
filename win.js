class Win {
  constructor() {
    const img = document.createElement("img");
    img.onload = () => {
      this.img = img;

      const imgRatio = img.naturalWidth / img.naturalHeight;

      this.w = 300;
      this.h = this.w / imgRatio; // use ratio to compute `ileHeight`

      this.x = W - this.w;
      this.y = H - this.h - 200; // position de l'île sur la hauteur

      this.draw();
    };
    img.src = "./monjeuimage/ile.png";
  }

  draw() {
    if (!this.img) return;

    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  hits(player) {
    return (
      player.x + player.w >= this.x &&
      player.x <= this.x + this.w &&
      (player.y <= this.y + this.h && player.y + player.h >= this.y)
    );
  }
}
