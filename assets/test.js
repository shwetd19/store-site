function myFunction(e) {
    var x = e.clientX;
    var y = e.clientY;
    document.getElementById("tooltip").style.left = x + "px";
 document.getElementById("tooltip").style.top = y + "px";
}