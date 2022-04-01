let canvas, ctx, posX = 0,posy = 0,
    img
function animar() {
    ctx.clearRect(0, 0, 700, 800)
    ctx.drawImage(img, posX, posy, 40, 40)
    posX += 20
    if (posX >= 400) {
        posX = -50
    }

    setTimeout(animar, 100);
}


window.onload = function () {
    img = new Image();
    img.src = '../img/post.jpg'
    canvas = document.querySelector(".content-canvas")
    ctx = canvas.getContext('2d')
    animar()


}