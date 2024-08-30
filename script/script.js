let backgroundColor;
let hexadecimals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
let color = [];

// Check LocalStorage For Colors
window.onload = function () {
    if (localStorage.getItem("color")) {
        document.body.style.backgroundColor = localStorage.getItem("color");
    } else {
        for (let i = 0; i < 6; i++) {
            color.push(hexadecimals[Math.trunc(Math.random() * hexadecimals.length)])
        }
        document.body.style.backgroundColor = `#${color.join("")}`;
    }
};

// Buttons For Changing Background Color
let blackbtn = document.getElementById("blkBg");
let whitebtn = document.getElementById("witBg");
let randbtn = document.getElementById("randBg");

blackbtn.addEventListener("click", function () {
    window.localStorage.setItem("color", "black");
    document.body.style.backgroundColor = window.localStorage.getItem("color");
});

whitebtn.addEventListener("click", function () {
    window.localStorage.setItem("color", "#f0f0f0");
    document.body.style.backgroundColor = window.localStorage.getItem("color");
});

randbtn.addEventListener("click", function () {
    for (let i = 0; i < 6; i++) {
        color.push(hexadecimals[Math.trunc(Math.random() * hexadecimals.length)])
    }
    window.localStorage.setItem("color", `#${color.join("")}`);
    document.body.style.backgroundColor = `#${color.join("")}`;
    window.location.reload();
});

// Selecting The Clickable Paragraph + The Images
let revealProj = document.getElementById("revealProj");
let images = document.querySelectorAll("img");

// Clicking On Images > Sending To Real Pages
images[0].onclick = function () {
    window.open("https://noobhamada.github.io/war3_worthy_maps/", "_blank");
}
images[1].onclick = function () {
    window.open("https://noobhamada.github.io/e-commerce/", "_blank");
}
images[2].onclick = function () {
    window.open("https://noobhamada.github.io/Calculator/", "_blank");
}
images[3].onclick = function () {
    window.open("https://noobhamada.github.io/Complete-Sequence/", "_blank");
}
images[4].onclick = function () {
    window.open("https://noobhamada.github.io/zombie/", "_blank");
}
images[5].onclick = function () {
    window.open("https://noobhamada.github.io/Paper-Scissors-Rock-Game/", "_blank");
}
images[6].onclick = function () {
    window.open("https://noobhamada.github.io/YouTube-Template/", "_blank");
}