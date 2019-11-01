function random(from, to) {
    return Math.floor(from + Math.random()*(to - from));
}

class Obstacles {
    constructor() {
        const img = document.createElement('img');
        img.onload = () => {
            this.img = img;
            
            this.w = random(W/3, 2/3*W);
            this.h = 100;
    
            this.x = random(0, W-this.w);
            this.y = -this.h;
        }
        img.src = "./monjeuimage/shark2.png";
    }

    draw() {
        if (!this.img) return;

        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
}

