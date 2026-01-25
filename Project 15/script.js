// Sélectionne tous les éléments avec la classe 'counter'
const counters = document.querySelectorAll('.counter')

// Pour chaque compteur, initialise et met à jour la valeur
counters.forEach(counter => {
    // Initialise le texte du compteur à '0'
    counter.innerText = '0'

    // Fonction pour mettre à jour le compteur
    const updateCounter = () => {
        // Récupère la valeur cible à atteindre
        const target = +counter.getAttribute('data-target')
        // Récupère la valeur actuelle du compteur
        const c = +counter.innerText

        // Calcule l'incrément à ajouter à chaque mise à jour
        const increment = target / 200

        // Vérifie si la valeur actuelle est inférieure à la cible
        if (c < target) {
            // Met à jour le texte du compteur avec la nouvelle valeur
            counter.innerText = `${Math.ceil(c + increment)}`
            // Appelle la fonction à nouveau après un délai de 1 milliseconde
            setTimeout(updateCounter, 1)
        } else {
            // Si la cible est atteinte, définit le texte du compteur à la valeur cible
            counter.innerText = target
        }
    }

    // Démarre la mise à jour du compteur
    updateCounter()
    
});