window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.font = "bold 30px Monospace";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.strokeStyle = "black";
    context.strokeText("This is Canvas", 150, 100);
};