function scrollToSection() {
    const section = document.querySelector(".deux");
    section.scrollIntoView({ behavior: "smooth" });
}


let compteur = 0;
const messageElement = document.getElementById("message");
messageElement.textContent = `${compteur} personnes sont mortes de faim depuis que vous êtes sur ce site.`;


// Fonction pour mettre à jour le compteur et le message
function incrementerCompteur() {
    compteur++;
    messageElement.textContent = `${compteur} personnes sont mortes de faim depuis que vous êtes sur ce site.`;

    if(compteur==1){
        messageElement.textContent = `${compteur} personnes est morte de faim depuis que vous êtes sur ce site.`;
    }
}

// Démarrez le compteur
setInterval(incrementerCompteur, 4000);
