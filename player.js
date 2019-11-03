class Player {
    constructor() {
      const img = document.createElement('img');
      img.onload = () => {
        this.img = img;
  
        const imgRatio = img.naturalWidth/img.naturalHeight;

        this.w = 300;
        this.h = this.w/imgRatio; // use ratio to compute `carHeight`
  
        this.x = W/3-this.w/1;
        this.y = H-this.h-100;
      }
      img.src = "./monjeuimage/player.png";
    }

    draw() {
      if (!this.img) return;

      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    // faire bouger mon player
    moveHeight() {
      this.y -= 400; // on ne peut pas mettre obstacle.h ou obstacle.this.h ?
    //  this.x += 200; //la width du shark obstacle.this.w ?
    }

    moveLeft() {
      this.x += -20;
    }

    moveRight() {
      this.x += 200;
    }


}