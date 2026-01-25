// Récupère tous les petits verres
const smallCups = document.querySelectorAll('.cup-small')   
// Récupère les éléments pour afficher les litres restants
const liters = document.getElementById('liters')
// Récupère l'élément pour afficher le pourcentage
const percentage = document.getElementById('percentage')
// Récupère l'élément pour afficher le message "restant"
const remained = document.getElementById('remained')

// Met à jour le grand verre au chargement
updateBigCup()

// Ajoute un click sur chaque petit verre
smallCups.forEach((cup, idx )=> {
    cup.addEventListener('click', () => HighlightCups(idx))
});

// Fonction pour colorer les verres pleins
function HighlightCups(idx) {
    smallCups.forEach((cup, idx2) => {
        // Si on clique sur un verre plein qui a un verre vide après, recule d'un
        if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
            idx--
        }

        // Colore le verre en bleu s'il est avant ou égal au verre cliqué
        if (idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    // Met à jour l'affichage du grand verre
    updateBigCup()
}

// Fonction pour mettre à jour l'affichage du grand verre
function updateBigCup() {
    // Compte combien de petits verres sont pleins
    const fullCups = document.querySelectorAll('.cup-small.full').length
    // Compte le nombre total de petits verres
    const totalCups = smallCups.length

    // Si aucun verre plein, cache le pourcentage
    if (fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        // Sinon affiche le pourcentage et remplit le grand verre
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    // Si tous les verres sont pleins, cache le texte "restant"
    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        // Sinon affiche les litres restants à boire
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}