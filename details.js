getGame();

function getGame() {
    const titles = ["The Elder Scrolls V: Skyrim Special Edition", "Star Wars: Battlefront", "The Elder Scrolls V: Skyrim", "Grand Theft Auto V", "Death Stranding", "Call of Duty: Modern Warfare", "The Last of Us Part II", "Cyberpunk 2077"];
    const prices = ["25.99€", "15.99€", "24.59€", "27.79€", "16.59€", "24.19€", "35.49€", "25.95€"];

    let mommaDiv = document.getElementById("details");
    const query = window.location.search.substring(1);
    const val = query.split("&");
    const id = val[0].charAt(val[0].length-1);

    const logged = val[1].split("=")[1];

    if(logged==="in"){
        const loginContainer = document.getElementById("loginContainer");
        loginContainer.style.display = "none";
    }

    const imagePath = "./images/game" + id + ".jpg";
    const imageDiv = document.createElement("img");
    imageDiv.classList.add("pic");
    imageDiv.setAttribute("src", imagePath);

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");

    const title = titles[id-1];
    const titleDiv = document.createElement("h1");
    titleDiv.innerText = title;

    const price = prices[id-1];
    const priceDiv = document.createElement("h2");
    priceDiv.innerText = price;

    const descriptionDiv = document.createElement("p");
    descriptionDiv.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non odio ac elit dictum lobortis ac ac lacus. Vestibulum scelerisque ipsum quis metus lobortis sagittis. Phasellus ac felis sit amet odio scelerisque dictum. Maecenas eget erat placerat orci posuere commodo. Nulla accumsan pulvinar sem, eu sagittis ligula laoreet sit amet. Maecenas feugiat neque eu orci lacinia, vitae lacinia mauris luctus.";

    infoDiv.appendChild(titleDiv);

    if(id==="1"){
        const specialDiv = document.createElement("h2");
        specialDiv.innerHTML = '<span class="special">32.49€</span> <span class="redText">-20%</span>';
        priceDiv.classList.add("redText");
        infoDiv.appendChild(specialDiv);
    }

    if(id==="3"){
        const specialDiv = document.createElement("h2");
        specialDiv.innerHTML = '<span class="special">31.99€</span> <span class="redText">-20%</span>';
        priceDiv.classList.add("redText");
        infoDiv.appendChild(specialDiv);
    }

    infoDiv.appendChild(priceDiv);
    infoDiv.appendChild(descriptionDiv);
    mommaDiv.appendChild(imageDiv);
    mommaDiv.appendChild(infoDiv);
}