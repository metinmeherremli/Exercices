const btn = document.getElementById("btn")
const colors = ["Red" , "Green" , "Blue" , "Yellow"];

var colorcounter = 0
function colur() {
    document.body.style.backgroundColor = colors[colorcounter]
    colorcounter++
    if (colorcounter >= colors.length ) {
        colorcounter = 0
    }
}
btn.addEventListener( "click" , colur)