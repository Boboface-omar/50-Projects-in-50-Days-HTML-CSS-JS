// On sélectionne tous les éléments qui ont la classe 'panel'
const panels = document.querySelectorAll('.panel');

// Pour chaque panneau, on écoute l'événement 'click'
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        // D'abord, on retire la classe 'active' de tous les panneaux
        removeActiveClasses()
        // Ensuite, on ajoute la classe 'active' uniquement au panneau sur lequel on a cliqué
        panel.classList.add('active')
    })
})

// Fonction pour retirer la classe 'active' de tous les panneaux
function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}