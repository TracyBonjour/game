class Player {
    constructor() {
      const img = document.createElement('img');
      img.onload = () => {
        this.img = img;
  
        const imgRatio = img.naturalWidth/img.naturalHeight;

        this.w = 150;
        this.h = this.w/imgRatio; // use ratio to compute `playerHeight`
  
        this.x = 50;
        this.y = H-this.h-200; // position du player sur la hauteur

        this.vx = 0; // vitesse horizontale
        this.vy = 0; // vitesse verticale

      }
      img.src = "./monjeuimage/player.png";
    }

    jump() {
      this.vy = -35;
      const audio = document.createElement("audio");
      audio.onload = () => {
        this.audio = audio;
      };
      audio.src = "./audio/zapsplat_sport_child_swimmer_jump_into_pool_002_16290.mp3";

      audio.play();
    }

    forward() {
      this.vx = 10;
    }

    backward() {
      this.vx = -10;
    }

    update() {
      // on met a jour la position via les vitesses
      this.x += this.vx;
      this.y += this.vy;
  
      // on empeche d'aller plus bas que la position de départ souhaité

      let ysol = H - this.h - 250;
      if (this.y > ysol) this.y = ysol; 

      // la gravité s'applique
      this.vy += gravity;
    }

    draw() {
      if (!this.img) return;

      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

}