function loginFn() {
    const loginContainer = document.getElementById("loginContainer");
    loginContainer.style.display = "none";

    const galleryContainer = document.getElementById("gallery");
    galleryContainer.innerHTML = '<a href="details.html?id=1&logged=in"><img class="games" src="./images/game1.jpg" alt="Game cover"></a>\n' +
        '        <a href="details.html?id=2&logged=in"><img class="games" src="./images/game2.jpg" alt="Game cover"></a>\n' +
        '        <a href="details.html?id=3&logged=in"><img class="games" src="./images/game3.jpg" alt="Game cover"></a>\n' +
        '        <a href="details.html?id=4&logged=in"><img class="games" src="./images/game4.jpg" alt="Game cover"></a>\n' +
        '        <a href="details.html?id=5&logged=in"><img class="games" src="./images/game5.jpg" alt="Game cover"></a>\n' +
        '        <a href="details.html?id=6&logged=in"><img class="games" src="./images/game6.jpg" alt="Game cover"></a>\n' +
        '        <a href="details.html?id=7&logged=in"><img class="games" src="./images/game7.jpg" alt="Game cover"></a>\n' +
        '        <a href="details.html?id=8&logged=in"><img class="games" src="./images/game8.jpg" alt="Game cover"></a>';
}

function logoutFn() {
    alert("logout");
    const logoutContainer = document.getElementById("logoutContainer");
    const loginContainer = document.getElementById("loginContainer");
    logoutContainer.style.display = "none";
    loginContainer.style.display = "block";
}

let slideIndex = 0;
showSlides();

function showSlides() {

    let i;
    const slides = document.getElementsByClassName("bannerSlide");
    //alert(slides.length);
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}