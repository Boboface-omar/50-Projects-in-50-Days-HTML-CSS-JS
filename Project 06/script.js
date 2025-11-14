// Sélectionne tous les éléments HTML qui ont la classe CSS '.box'
const boxes = document.querySelectorAll('.box')

// Appelle la fonction une première fois au chargement de la page
// pour afficher les boîtes qui sont déjà dans la zone visible.
checkBoxes()

// Ajoute un écouteur d'événement qui appellera la fonction checkBoxes()
// à chaque fois que l'utilisateur fait défiler la page (scroll).
window.addEventListener('scroll', checkBoxes)

// Fonction qui vérifie la position de chaque boîte et décide si elle doit être affichée ou non.
function checkBoxes(){
    // Définit le point de déclenchement. C'est la position verticale (par rapport au haut de la fenêtre)
    // que le haut d'une boîte doit dépasser pour s'afficher.
    // Ici, c'est 80% (4/5) de la hauteur de la fenêtre.
    const triggerBottom = window.innerHeight / 5 * 4

    // Boucle sur chaque boîte sélectionnée précédemment.
    boxes.forEach(box => {
        // Récupère la position du haut de la boîte par rapport au haut de la fenêtre visible.
        const boxTop = box.getBoundingClientRect().top

        // Si le haut de la boîte est au-dessus du point de déclenchement...
        if (boxTop < triggerBottom) {
            // ...on lui ajoute la classe 'show' pour la rendre visible (via CSS).
            box.classList.add('show')
        } else{
            // ...sinon, on lui retire la classe 'show' pour la cacher.
            box.classList.remove('show')
        }
    })
}