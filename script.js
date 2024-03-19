var currentImageIndex = 0;
var images = ["img1.png", "img3.png", "img4.png", "img5.png"];

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('slideImage').src = images[currentImageIndex];
}

setInterval(changeImage, 3000);
