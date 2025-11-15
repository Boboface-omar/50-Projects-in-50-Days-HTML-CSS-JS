// On sélectionne les éléments HTML nécessaires depuis le DOM (Document Object Model)
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

// On ajoute un écouteur d'événement pour le survol de la souris sur la partie gauche
left.addEventListener('mouseenter' , () =>{
    // Quand la souris entre dans la zone gauche, on ajoute la classe 'hover-left' au conteneur
    container.classList.add('hover-left')
})
// On ajoute un écouteur d'événement pour la sortie de la souris de la partie gauche
left.addEventListener('mouseleave' , () =>{
    // Quand la souris quitte la zone gauche, on retire la classe 'hover-left' du conteneur
    container.classList.remove('hover-left')
})

// On ajoute un écouteur d'événement pour le survol de la souris sur la partie droite
right.addEventListener('mouseenter' , () =>{
    // Quand la souris entre dans la zone droite, on ajoute la classe 'hover-right' au conteneur
    container.classList.add('hover-right')
})
// On ajoute un écouteur d'événement pour la sortie de la souris de la partie droite
right.addEventListener('mouseleave' , () =>{
    // Quand la souris quitte la zone droite, on retire la classe 'hover-right' du conteneur
    container.classList.remove('hover-right')
})
