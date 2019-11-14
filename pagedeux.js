function startIntro() {
    // Génère une couleur aléatoire en hexadécimal (c'est-à-dire # 62b9cc)
  function generateRandomColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }
  
  // Changer la couleur du fond en utilisant STYLE
  function changeBackgroundColor() {
   var colorBg = document.getElementById("color-overlay")
   colorBg.style.backgroundColor = generateRandomColor();
  }
  // Chnager le texte du fond
  function changeBackgroundText() {
    var textBg = document.getElementById("compteur-bg")
    if (textBg.innerHTML == "5") {
      textBg.innerHTML = "4"   
    } else if (textBg.innerHTML == "4") {
      textBg.innerHTML = "3" 
    } else if (textBg.innerHTML == "3") {
      textBg.innerHTML = "2" 
    } else if (textBg.innerHTML == "2") {
    textBg.innerHTML = "1" 
    } else if (textBg.innerHTML == "1") { 
    textBg.innerHTML = "Let's GO !"
    } else if (textBg.innerHTML == "Let's GO !") {
    document.getElementById("page2").style.display = "none";//ne plus afficher la page2
    document.getElementById("page3").style.display = "block";//afficher la page3
    };
  }
  // fonction changement de texte et de couleur aléatoire
  function changeBackground() {
    changeBackgroundColor();
    changeBackgroundText();
  }
  
  // Executer cette fonction ci-dessus toutes les 600
  setInterval(changeBackground, 600);
 }