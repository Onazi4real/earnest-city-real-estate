window.onload = function () {

    // Hero Animation
    const content = document.querySelector(".content");

    if (content) {
        content.style.opacity = "1";
        content.style.transform = "translateY(0)";
        content.style.transition = "all 1.2s ease";
    }

    // Back to Top Button
    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", function () {

        if (window.pageYOffset > 300) {
            topBtn.style.display = "flex";
        } else {
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

};

// Animated Counter

const counters = document.querySelectorAll(".counter");

const speed = 50;

counters.forEach(counter => {

    const updateCount = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = Math.ceil(target / speed);

        if(count < target){

            counter.innerText = count + increment;

            setTimeout(updateCount,40);

        }else{

            counter.innerText = target + "+";

        }

    };

    updateCount();

});

// Sticky Header

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

header.classList.toggle("active",window.scrollY>80);

});


// Mobile Menu

const menuBtn=document.getElementById("menuBtn");

const nav=document.getElementById("navMenu");

menuBtn.onclick=function(){

nav.classList.toggle("active");

}