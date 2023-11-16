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




//ceci ecorrespond au code des pops up de mon portrait chinois

// var textpop1 = document.querySelector('.popup1'); //popup pour les crédits

//     var textclick1 = document.querySelectorAll('.text-cliquable1');

//     textclick1.forEach(function (element) {
//         element.addEventListener('click', function (window) {
//             textpop1.classList.add('popup-visible');
//             textpop1.classList.remove('popup-invisible');
//             document.querySelector('.retouraccueil').style.display = "none"; //Pour que le retour au menu disparaisse quand le popup apparait 
//             document.querySelector('.participation').style.display = "none"; //Pour que le "toi aussi crées ton analogie disparaisse quand les crédits s'affichent"


//         });


//     });

//     var textclick2 = document.querySelectorAll('.cancel');//Pour que le popup disparaisse quand on clique sur la croix

//     textclick2.forEach(function (element) {
//         element.addEventListener('click', function (window) {
//             textpop1.classList.add('popup-invisible');
//             textpop1.classList.remove('popup-visible');
//             document.querySelector('.retouraccueil').style.display = "block"; // Pour que le retour en haut réaparaisse quand le popup disparait 
//             document.querySelector('.participation').style.display = "block";

//             console.log("texte")
//         });


//     });

//     var textpop2 = document.querySelector('.popup2'); //popup pour le formulaire

//     var textclick3 = document.querySelectorAll('.text-cliquable2');

//     textclick3.forEach(function (element) {
//         element.addEventListener('click', function (window) {
//             textpop2.classList.add('popup-visible');
//             textpop2.classList.remove('popup-invisible');

//         });


//     });

//     var textclick4 = document.querySelectorAll('.cancel'); // Pour que le formulaire disparaisse quand on clique sur la croix 
//     textclick4.forEach(function (element) {
//         element.addEventListener('click', function (window) {
//             textpop2.classList.add('popup-invisible');
//             textpop2.classList.remove('popup-visible');



//             console.log("texte")
//         });

//     )