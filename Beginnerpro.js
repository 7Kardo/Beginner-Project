
//colors array

let colors = ['blue','yellow','black','red','brown','orange'];
//get button
var btn = document.getElementById("button");

//add event listener
btn.addEventListener('click',function(){
 //random
 var random = colors[Math.floor(Math.random()*colors.length)];
 //get container
 let container = document.getElementById('container');

 container.style.background = random;

})