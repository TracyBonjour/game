//function random(from, to) {
 //   return Math.floor(from + Math.random()*(to - from));
//}

class Obstacles {
    constructor() {
        const img = document.createElement('img');
        img.onload = () => {
            this.img = img;

            const imgRatio = img.naturalWidth/img.naturalHeight;
            
            this.w = 200;
            this.h = this.w/imgRatio; 
    
            this.x = W/3-this.w/1;
            this.y = H-this.h-100;
        }
        img.src = "./monjeuimage/shark2.png";
    }

    draw() {
        if (!this.img) return;

        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
}

