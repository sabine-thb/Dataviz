function scrollToSection() {
    const section = document.querySelector(".deux");
    section.scrollIntoView({ behavior: "smooth" });
}
function scrollToSection() {
    const section3 = document.getElementById('section3');
    section3.scrollIntoView({ behavior: 'smooth' });
  }
  
  

// // Ouvrir le popup en cliquant sur "Mentions légales"
// document.querySelector(".open-popup").addEventListener("click", function() {
//     document.querySelector(".popup-background").style.display = "flex";
// });

document.querySelector("#closePopup").addEventListener("click", function() {
    document.querySelector(".popup-background").style.display = "none";
});

// Fermer le popup en cliquant sur la croix
document.querySelector(".close-popup").addEventListener("click", function() {
    document.querySelector(".popup-background").style.display = "none";
});