function toggleMenu() {
    var x = document.getElementById("menuLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("bannerSlide");
    //alert(slides.length);
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}

games();

alert("töötab");

function games() {
    for (let i = 0; i < 8; i++) {
        const gallery = document.getElementsByClassName("gallery");
        //alert(gallery.length);
        const div = document.createElement("div");
        div.classList.add("game");
        var name = "game" + i + ".jpg";
        div.innerHTML = `<img src=name alt="product">`;
        gallery.appendChild(div);
    }
}