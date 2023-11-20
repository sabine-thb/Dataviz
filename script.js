// On met en place l'ouverture des popups
var lienPopup = document.querySelectorAll(".lienPopup");

lienPopup.forEach(function (element) {
    element.addEventListener('click', function() {
        var popupId = element.dataset.popup; // On obtient l'ID du popup à partir de l'attribut de données
        var popup = document.querySelector("#" + popupId); // On sélectionne le popup correspondant
        popup.classList.add('popup-visible');
        popup.classList.remove('popup-invisible');
    });
});  

//On met en place la fermeture des popups
var cancel =document.querySelectorAll(".cancel");

cancel.forEach(function (element) {
    element.addEventListener('click', function() {
        var popupElement = element.closest('.popup');
        // Ciblez l'élément avec l'ID correspondant
        var popupId = popupElement.id;
        var popup = document.querySelector("#" + popupId); // On sélectionne le popup correspondant
        popup.classList.add('popup-invisible');
        popup.classList.remove('popup-visible');
    });
});   




//Je mets en place le compteur 

let compteur = 0;
const compteurElement = document.querySelector(".compteur");
const messageElement = document.querySelector(".message");

// Fonction pour mettre à jour le compteur
function incrementerCompteur() {
    compteur++;
    compteurElement.textContent = compteur;

    if (compteur === 1) {
        messageElement.innerHTML = `personne est morte de faim dans le monde depuis que vous êtes sur ce site.`;
    } else {
        messageElement.innerHTML = `personnes sont mortes de faim dans le monde depuis que vous êtes sur ce site.`;
    }
}

// Démarrez le compteur
setInterval(incrementerCompteur, 4000);
