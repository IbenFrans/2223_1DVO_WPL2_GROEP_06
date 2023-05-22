let hamburger = document.getElementById("hamburger");
let hamburgerMenu = document.getElementById("hamburgerMenu");
let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");


function toggleHamburger(){
    if(hamburger.classList.contains("show")){
        hamburger.classList.remove("show");
        hamburgerMenu.style.display = "none";
        line1.style.transform = "rotate(0)";
        line2.style.transform = "scaleY(1)";
        line3.style.transform = "rotate(0)";
    } else {
        hamburger.classList.add("show");
        hamburgerMenu.style.display = "block";
        line1.style.transform = "rotate(45deg)";
        line2.style.transform = "scaleY(0)";
        line3.style.transform = "rotate(-45deg)";
    }
}

hamburger.addEventListener("click", toggleHamburger);