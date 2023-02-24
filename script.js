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
}

let contact = document.getElementById("btn");

contact.addEventListener("click", function() {
    window.alert("Whatsapp Number : 0114 869 1208");
})