var ranNum = Math.floor(Math.random() * 6) + 1;
var ranImg = "images/dice" + ranNum + ".png";
document.querySelector(".img1").setAttributes("src", ranImg);

var ranNum2 = Math.floor(Math.random() * 6) + 1;
var ranImg2 = "images/dice" + ranNum2 + ".png";
document.querySelector("img").setAttributes("src", ranImg2);

if (ranNum > ranNum2) {
  document.querySelector("h1").innerHTML = "Play 1 Wins";
} else if (ranNum2 > ranNum) {
  document.querySelector("h1").innerHTML = "Play 2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
