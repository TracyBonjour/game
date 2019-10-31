class Player {
    constructor() {
      const img = document.createElement('img');
      img.onload = () => {
        this.img = img;
  
        const imgRatio = img.naturalWidth/img.naturalHeight;

        this.w = 100;
        this.h = this.w/imgRatio; // use ratio to compute `carHeight`
  
        this.x = W/2-this.w/2;
        this.y = H-this.h-100;
      }
      img.src = "./monjeuimage/player.jpg";
    }

    draw() {
      if (!this.img) return;

      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
}