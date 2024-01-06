
var rno = Math.random();
rno=Math.floor(rno*6)+1;

var randomImage = "./images /dice"+rno+".png";
document.querySelector(".img1").setAttribute("src",randomImage);

var rno2 = Math.random();
rno2=Math.floor(rno2*6)+1;
var randomImage2 = "./images /dice"+rno2+".png";
document.querySelector(".img2").setAttribute("src",randomImage2);


if(rno===rno2){
    document.querySelector("h1").innerHTML="Its Draw!!!";
}else if(rno>=rno2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}else if(rno<=rno2){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}