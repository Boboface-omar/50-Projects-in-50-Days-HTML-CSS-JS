// On sélectionne les éléments HTML dont on a besoin
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

// On initialise la première étape comme étant active
let currentActive = 1

// Quand on clique sur le bouton 'Next'
next.addEventListener('click', () => {
    // On avance à l'étape suivante
    currentActive++

    // On s'assure de ne pas dépasser le nombre total d'étapes
    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    // On met à jour l'affichage
     update()
})

// Quand on clique sur le bouton 'Prev'
prev.addEventListener('click', () => {
    // On revient à l'étape précédente
    currentActive--

    // On s'assure de ne pas aller en dessous de la première étape
    if(currentActive < 1) {
        currentActive = 1
    }

    // On met à jour l'affichage
    update()
})

// Fonction qui met à jour l'interface (les cercles, la barre et les boutons)
function update() {
    // Pour chaque cercle, on vérifie s'il doit être 'active' ou non
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    // On sélectionne tous les cercles actifs
    const actives = document.querySelectorAll('.active')
    // On calcule et met à jour la largeur de la barre de progression
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

    // On active ou désactive les boutons 'Prev' et 'Next' selon l'étape actuelle
    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true

    } else {
        prev.disabled = false
        next.disabled = false
    }
}