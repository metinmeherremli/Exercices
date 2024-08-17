const boxes  = document.querySelectorAll(".box");
console.log(boxes);


const colors = ["Red","Green","Blue","Yellow"];

let currentColorIndex = 0;

boxes.forEach(function(box) {
   box.addEventListener("mouseover", function(){
    box.style.backgroundColor = colors[currentColorIndex];
    box.style.transition = "all 0.2s"
    currentColorIndex++

   if (currentColorIndex >= colors.length) {
         currentColorIndex = 0
   }
   });
   box.addEventListener("mouseleave",function(){
      box.style.backgroundColor = "grey"
   })
});