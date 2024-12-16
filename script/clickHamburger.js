let hamburger = document.querySelector(".hamburger");
let sides = document.querySelectorAll(".side");

hamburger.addEventListener('click', () => {
    sides.forEach(side => {
        if (side.style.display === "none" || side.style.display === "") {
            side.style.display = "block";
            side.style.width = "100px";
            side.style.textAlign = "justify";
            side.style.marginLeft = "5px";
            side.style.backgroundColor = "transparent";
            side.style.borderRadius = "3%";
            side.style.padding = "4px";
            side.style.boxShadow = "0 0 5px #00ddff";
        } else {
            side.style.display = "none";
        }
    });
});