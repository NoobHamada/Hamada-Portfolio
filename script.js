// Random Background Color
window.onload = function () {
    setInterval(function () {
        let hexadecimals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
        let color = [];

        for (let i = 0; i < 6; i++) {
            color.push(hexadecimals[Math.trunc(Math.random() * hexadecimals.length)])
        }

        let backgroundColor = `#${color.join("")}`;
        document.body.style.backgroundColor = backgroundColor;
    }, 2000)
};

// Selecting Contact Button
let contact = document.getElementById("contact");
let whatsNum = document.getElementById("whatsNum");

// Toggle (Hide / Show) Whatsapp Number
contact.addEventListener("click", function () {
    if (whatsNum.className == "hide") {
        whatsNum.classList.remove("hide");
    } else {
        whatsNum.className = "hide";
    }
});

// Selecting The Clickable Paragraph + The Images
let revealProj = document.getElementById("revealProj");
let images = document.querySelectorAll("img");

// Toggle (Hide / Show) Images Of Past Projects
revealProj.addEventListener("click", function() {
    for (i = 0; i < images.length; i++) {
        if (images[i].className == "hide") {
            images[i].classList.remove("hide")
        } else {
            images[i].classList.add("hide")
        }
    }
})

// Clicking On Images > Sending To Real Pages
images[0].onclick = function() {
    window.open("https://noobhamada.github.io/war3_worthy_maps/", "_blank");
}
images[1].onclick = function() {
    window.open("https://noobhamada.github.io/Calculator/", "_blank");
}
images[2].onclick = function() {
    window.open("https://noobhamada.github.io/Complete-Sequence/", "_blank");
}
images[3].onclick = function() {
    window.open("https://noobhamada.github.io/zombie/", "_blank");
}