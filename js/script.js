window.onload = function () {
    let img, canvas, ctx, posX = 0,
        posy = 0
    canvas = document.querySelector(".content-canvas")
    ctx = canvas.getContext('2d')
    img = new Image();
    img.src = '../img/post.jpg'
    ctx.drawImage(img, posX, posy, 40, 40);
    ctx.clearRect(0, 0, 700, 800);
    posX += 20
    if (posX >= 400) {
        posX = -50
    }

    setTimeout(animar, 100);


}