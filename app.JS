document.getElementById("grayButton").onclick = switchGray;
document.getElementById("orangeButton").onclick = switchOrange; 
document.getElementById("darkButton").onclick = switchBlack; 
document.getElementById("whiteButton").onclick =  switchWhite;

function switchGray(){
  document.getElementsByTagName("body")[0].style.backgroundColor = "gray";
  document.getElementsByTagName("body")[0].style.color = "white";
}
function switchOrange(){
  document.getElementsByTagName("body")[0].style.backgroundColor = "orange";
  document.getElementsByTagName("body")[0].style.color = "black";
}
function switchBlack(){
  document.getElementsByTagName("body")[0].style.backgroundColor = "black";
  document.getElementsByTagName("body")[0].style.color = "white";
}
function switchWhite(){
  document.getElementsByTagName("body")[0].style.backgroundColor = "whitesmoke";
  document.getElementsByTagName("body")[0].style.color = "black";
}

