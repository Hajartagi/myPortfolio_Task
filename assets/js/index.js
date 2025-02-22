const hamburger = document.querySelector(".hamburger");
const mobileBar = document.querySelector(".sidebar");
const navLinks = document.querySelectorAll(".navLink");

// DOWNLOAD BUTTON

document.getElementById('downloadBtn').addEventListener('click', function() {
    var pdfUrl = 'assets/files/HAJAR TAGHISOY..pdf';
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'HAJAR_TAGHISOY_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

document.querySelector(".hi-btn").addEventListener("click", function() {
    this.classList.add("animate__wobble");
    setTimeout(() => {
        this.classList.remove("animate__wobble");
    }, 2000);
});


// HAMBURGER MENU

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileBar.classList.toggle("mobile-active");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navList.classList.remove("active");
    });
});

// DESIGN BUTTON
const colorSchemes = [
    {
        darkOrange: "#6d3f7d", 
        lightOrange: "#987bae", 
        pinkOrange: "#fce6ff", 
        backgroundColor: "#bc7fd9" 
    },
    {
        darkOrange: "#90c98a", 
        lightOrange: "#084000", 
        pinkOrange: "#dfffd3", 
        backgroundColor: "#baff98" 
    },
    {
        darkOrange: "#FCA61F",
        lightOrange: "#F2C94C",
        pinkOrange: "#FFDDBF",
        backgroundColor: "#FFF2C5"
    },
    {
        darkOrange: "#6c92d6",
        lightOrange: "#000c55",
        pinkOrange: "#cdccff",
        backgroundColor: "#88a1f9"
    }
];

let currentSchemeIndex = 0; 

const designButton = document.querySelector(".design"); 
const cvButton = document.querySelector(".cvBtn"); 
const aboutButton = document.querySelector(".about-btn"); 
const background = document.querySelector(".hero-section"); 
const lightOrangeSection = document.querySelector(".hero-right-pic"); 
const pinkOrangeButton = document.querySelector(".hi-btn");
const lightOrangeBorder = document.querySelector(".hero-right-pic");
const nameInput =document.querySelector("#full-name");
const mailInput =document.querySelector("#email");
const queryInput =document.querySelector("#query");
const textarea =document.querySelector("#message");
const followBtn =document.querySelector(".follow-btn");
const footer =document.querySelector("footer");
const projectSection =document.querySelector(".project-section")


designButton.addEventListener("click", () => {
    const scheme = colorSchemes[currentSchemeIndex];

    cvButton.style.backgroundColor = scheme.darkOrange;
    aboutButton.style.backgroundColor = scheme.darkOrange;
    lightOrangeSection.style.backgroundColor = scheme.lightOrange;
    lightOrangeBorder.style.borderColor = scheme.lightOrange;    
    pinkOrangeButton.style.backgroundColor = scheme.pinkOrange;
    background.style.background = `linear-gradient(0deg, rgba(250,250,250,1) 0%, ${scheme.backgroundColor} 100%)`;
    nameInput.style.background= scheme.backgroundColor;
    mailInput.style.background= scheme.backgroundColor;
    queryInput.style.background= scheme.backgroundColor;
    textarea.style.background= scheme.backgroundColor;
    followBtn.style.backgroundColor = scheme.pinkOrange;
    footer.style.background=`linear-gradient(180deg, rgba(250,250,250,1) 0%, ${scheme.backgroundColor} 100%)`;
    projectSection.style.background=`linear-gradient(180deg, rgba(250,250,250,1) 0%, ${scheme.backgroundColor} 50%, rgba(250,250,250,1) 100%)`

    currentSchemeIndex = (currentSchemeIndex + 1) % colorSchemes.length;
});

// SWIPER - PROJECT

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        direction: "vertical", // Vertical scrolling
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true, // Enables mouse wheel control
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});


// MARQUEE EFFECT

const marquee = document.querySelector('.marquee');

marquee.addEventListener('mouseover', () => {
    marquee.stop(); 
});

marquee.addEventListener('mouseout', () => {
    marquee.start(); 
});

// CONTACT AND CALENDAR

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const inputs = form.querySelectorAll("input, textarea");
    const calendarLink = document.getElementById("calendar-link");

    const calendlyLink = "https://calendly.com/hajartagisoy328/30min"; 
    calendarLink.href = calendlyLink;

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.border = "2px solid red"; 
                isValid = false;
            } else {
                input.style.border = "2px solid #ccc"; 
                textarea.style.border ="2px solid #ccc";
            }
        });

        if (isValid) {
            const fullName = document.getElementById("full-name").value;
            const email = document.getElementById("email").value;
            const query = document.getElementById("query").value;
            const message = document.getElementById("message").value;

            const mailtoLink = `mailto:hajartaghisoy@gmail.com?subject=${encodeURIComponent(query)}&body=${encodeURIComponent(`Ad: ${fullName}\nE-poçt: ${email}\nMesaj: ${message}`)}`;
            window.location.href = mailtoLink;
        }
    });
});

