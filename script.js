        // Récupération des éléments du DOM une fois qu'il est chargé
document.addEventListener("DOMContentLoaded", function() {
    const caeee_logo = document.getElementById("caeee_logo");
    const imagelogo = document.getElementById("imagelogo");
    const textLogo = document.getElementById("textLogo");
    const bg_choix_user = document.getElementById("bg_choix_user");
    // Attente de 2 secondes avant de démarrer l'animation
    setTimeout(function() {
        // Réduire la taille du logo
        caeee_logo.style.width = "70px";
        caeee_logo.style.height = "70px";

        // Lancer la rotation
        rotate(caeee_logo);
        
        // Après 3 secondes, arrondir les coins, arrêter la rotation et afficher l'image
        setTimeout(function() {
            caeee_logo.style.borderRadius = "50%";
            caeee_logo.style.transform = 'translate(-50%, -50%) rotate(0deg)';
            setTimeout(function() {
            imagelogo.style.opacity = "1";
            textLogo.style.top = "120%";
            textLogo.style.opacity = "1";
               setTimeout(function() {
                  caeee_logo.style.width = "100vw";
                  caeee_logo.style.height = "100vh";  
                  caeee_logo.style.borderRadius="0";  
                  setTimeout(function() {
                    imagelogo.style.top = "-250%";
                    bg_choix_user.style.top = "-140%";
                    textLogo.style.display="none";
                }, 500);
               }, 1500);
            }, 500);
        }, 1600);

    }, 1000); // Attente de 2 secondes avant de démarrer

    const loadingi1 = document.getElementById("loadingi1");
    const loadinglogo1 = document.getElementById("loadinglogo1");
    const loadingi2 = document.getElementById("loadingi2");
    const loadinglogo2 = document.getElementById("loadinglogo2");


    const medcinclick = document.getElementById("medcinclick");
    const patientclick = document.getElementById("patientclick");

    patientclick.addEventListener('click', function() {
        loadingi2.style.display="none";
        loadinglogo2.style.display="flex";
        var angle = 0;
        var rotationInterval = setInterval(function() {
            angle += 1; // Augmente l'angle de rotation
            loadinglogo2.style.transform = 'rotate(' + angle + 'deg)'; // Applique la rotation
        }, 1); // Change la valeur pour contrôler la vitesse de rotation
    
        setTimeout(function() {
            let typeOfUser = "patient";
            window.location.href = `medecins/ferticonnectmedecin-login.html?typeOfUser=${typeOfUser}`; 
        }, 600);
    });

    medcinclick.addEventListener('click', function() {
        loadingi1.style.display="none";
        loadinglogo1.style.display="flex";
        var angle = 0;
        var rotationInterval = setInterval(function() {
            angle += 1; // Augmente l'angle de rotation
            loadinglogo1.style.transform = ' rotate(' + angle + 'deg)'; // Applique la rotation
        }, 1); // Change la valeur pour contrôler la vitesse de rotation
        setTimeout(function() {
            let typeOfUser = "medecin";
            window.location.href = `medecins/ferticonnectmedecin-login.html?typeOfUser=${typeOfUser}`; 
        }, 600);
    });

});


// Fonction pour la rotation
function rotate(element) {
    var angle = 0;
    var rotationInterval = setInterval(function() {
        angle += 4; // Augmente l'angle de rotation
        element.style.transform = 'translate(-50%, -50%) rotate(' + angle + 'deg)'; // Applique la rotation
    }, 1); // Change la valeur pour contrôler la vitesse de rotation

    // Arrête la rotation après 4 secondes
    setTimeout(function() {
        clearInterval(rotationInterval); // Arrête l'intervalle de rotation
        element.style.transform = 'translate(-50%, -50%) rotate(0deg)'; // Remet l'élément à sa position initiale
    }, 2000);
}







        