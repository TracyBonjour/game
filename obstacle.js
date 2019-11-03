// Test2 function random + la ligne 21 ci-dessous
function random(from, to) {
   return Math.floor(from + Math.random()*(to - from));
}

class Obstacle {
    constructor() {
      const img = document.createElement("img");
      img.onload = () => {
        this.img = img;
  
        const imgRatio = img.naturalWidth / img.naturalHeight;
  
        this.w = 200; // taille du shark
        this.h = this.w / imgRatio; // dimension pour ne pas déformer l'image

        // Test3 : Random la position du shark et le faire 5 * ?
        //this.x = (Math.floor(Math.random(W / 3 - this.w / 1)))*5;

        //Test2 suite :
        //this.x = random(W / 3 - this.w / 1, 977);    
        //this.x = random(977, 300);
        
        this.x = random(977, 200);
        //this.y = H - this.h - 100;
        this.y = (750, 750);
       
      };
      img.src = "./monjeuimage/shark2.png";
    }
  
    draw() {
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
  }
  