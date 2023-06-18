// Check LocalStorage For Colors
window.onload = function () {
    if (localStorage.getItem("color")) {
        document.body.style.backgroundColor = localStorage.getItem("color");
    } else {
        randomColor()
    }
};

let backgroundColor;
let hexadecimals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
let color = [];

// Random Background Color

function randomColor() {
    setInterval(function () {
        for (let i = 0; i < 6; i++) {
            color.push(hexadecimals[Math.trunc(Math.random() * hexadecimals.length)])
        }

        document.body.style.backgroundColor = `#${color.join("")}`;
    }, 3500)
};

// Buttons For Changing Background Color
let blackbtn = document.getElementById("blkBg");
let randbtn = document.getElementById("randBg");
let whitebtn = document.getElementById("witBg");

blackbtn.addEventListener("click", function () {
    window.localStorage.setItem("color", "black");
    window.location.reload();
});

whitebtn.addEventListener("click", function () {
    window.localStorage.setItem("color", "white");
    window.location.reload();
});

randbtn.addEventListener("click", function () {
    window.localStorage.clear();
    window.location.reload();
});

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
revealProj.addEventListener("click", function () {
    for (i = 0; i < images.length; i++) {
        if (images[i].className == "hide") {
            images[i].classList.remove("hide")
        } else {
            images[i].classList.add("hide")
        }
    }

    // Creating "Click To Open" Text Once Clicked On Show Projects List
    let info = document.createElement("div");
    info.innerText = "Click To Open";
    info.style.color = "red";
    info.style.position = "fixed";
    info.style.top = "15%";
    info.style.left = "15%";
    document.body.appendChild(info);

    // Timeout To Remove The (Info) Div
    setTimeout(function () {
        info.remove();
    }, 2000)
})

// Clicking On Images > Sending To Real Pages
images[0].onclick = function () {
    window.open("https://noobhamada.github.io/war3_worthy_maps/", "_blank");
}
images[1].onclick = function () {
    window.open("https://noobhamada.github.io/Calculator/", "_blank");
}
images[2].onclick = function () {
    window.open("https://noobhamada.github.io/Complete-Sequence/", "_blank");
}
images[3].onclick = function () {
    window.open("https://noobhamada.github.io/zombie/", "_blank");
}