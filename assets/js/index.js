const hamburger = document.querySelector(".hamburger");
const mobileSidebar = document.querySelector(".sidebar");
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

// HAMBURGER MENU

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileSidebar.classList.toggle("mobile-active");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navList.classList.remove("active");
    });
});
