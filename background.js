class Background {
  constructor() {
    const img = document.createElement("img");
    img.onload = () => {
      this.img = img;
      this.x = 0;
      this.speed = -5;
      this.y = 0;
    };
    img.src = "./monjeuimage/bg.jpg";
  }
  move() {
    this.x += this.speed;
    this.x %= W;
  }
  draw() {
    if (!this.img) return;
    ctx.drawImage(this.img, this.x, this.y);
    ctx.drawImage(this.img, this.x + W, 0);
  }
};
