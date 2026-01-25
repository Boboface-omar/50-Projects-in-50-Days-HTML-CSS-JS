// Récupération des éléments du DOM
const tagsEl = document.getElementById('tags') // L'élément où les tags seront affichés
const textarea = document.getElementById('textarea') // La zone de texte pour la saisie utilisateur

// Met le focus (curseur) automatiquement dans la textarea au chargement de la page
textarea.focus()

// Ajoute un écouteur d'événement sur la textarea qui se déclenche quand une touche est relâchée
textarea.addEventListener('keyup', (e) => {
    // Crée les tags visuels à partir de la valeur de la textarea
    createTags(e.target.value)

    // Si la touche pressée est "Entrée"
    if (e.key === 'Enter') {
        // Après un court délai, vide la textarea
        setTimeout(() => {
            e.target.value = ''
        }, 10);

        // Lance la fonction de sélection aléatoire
        randomSelect()
    }
})

// Fonction pour créer les tags à partir de la chaîne de caractères en entrée
function createTags(input) {
    // Sépare la chaîne par les virgules, filtre les tags vides, et enlève les espaces superflus
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    // Vide le conteneur de tags pour le rafraîchir
    tagsEl.innerHTML = ''

    // Pour chaque tag dans le tableau, crée un élément span et l'ajoute au DOM
    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag') // Ajoute la classe pour le style
        tagEl.innerText = tag // Définit le texte du tag
        tagsEl.appendChild(tagEl) // Ajoute le tag à son conteneur
    });
}

// Fonction pour l'animation et la sélection finale d'un tag aléatoire
function randomSelect() {
    const times = 30 // Nombre de fois que l'animation va "sauter" entre les tags

    // Crée un intervalle qui exécute du code toutes les 100ms
    const interval = setInterval(() => {
        // Choisit un tag au hasard
        const randomTag = pickRandomTag()

        // Met le tag en surbrillance
        highlightTag(randomTag)

        // Après 100ms, enlève la surbrillance pour passer au suivant
        setTimeout(() => {
            unhighlightTag(randomTag)
        }, 100);
    }, 100);

    // Après un certain temps (times * 100ms), arrête l'animation et choisit le tag final
    setTimeout(() => {
        // Arrête l'intervalle de l'animation
        clearInterval(interval)

        // Après 100ms supplémentaires...
        setTimeout(() => {
            // Choisit un dernier tag au hasard
            const randomTag = pickRandomTag()

            // Met ce tag final en surbrillance (de façon permanente)
            highlightTag(randomTag)
        }, 100);
         
    }, times * 100);
}

// Fonction pour choisir un élément tag au hasard parmi tous ceux qui existent
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag') // Récupère tous les éléments avec la classe 'tag'
    // Retourne un élément au hasard du tableau de tags
    return tags[Math.floor(Math.random() * tags.length)]
}

// Fonction pour ajouter la classe 'highlight' à un tag
function highlightTag(tag) {
    tag.classList.add('highlight')
}

// Fonction pour retirer la classe 'highlight' d'un tag
function unhighlightTag(tag) {
    tag.classList.remove('highlight')
}