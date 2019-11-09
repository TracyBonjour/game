function startIntro() {
    // Generates a random color in hexadecimal (ie. #62b9cc)
  function generateRandomColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }
  
  // Changes the color of the background using STYLE
  function changeBackgroundColor() {
   var colorBg = document.getElementById("color-overlay")
   colorBg.style.backgroundColor = generateRandomColor();
  }
  
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
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "block";
    };
  }
  
  function changeBackground() {
    changeBackgroundColor();
    changeBackgroundText();
  }
  
  // Run this function every xxxms
  setInterval(changeBackground, 600);
 }