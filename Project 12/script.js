// Sélectionne tous les éléments HTML qui ont la classe CSS 'faq-toggle'
// et les stocke dans une constante appelée 'toggles'.
// querySelectorAll renvoie une NodeList (une sorte de liste d'éléments).
const toggles = document.querySelectorAll('.faq-toggle')

// On parcourt chaque élément ('toggle') dans la liste 'toggles'.
toggles.forEach(toggle => {
    // Pour chaque 'toggle', on ajoute un écouteur d'événement qui attend un clic.
    toggle.addEventListener('click', () => {
        // Lorsqu'un 'toggle' est cliqué, on exécute cette fonction :
        // 1. toggle.parentNode : On récupère l'élément parent direct du 'toggle' sur lequel on a cliqué.
        // 2. classList.toggle('active') : On ajoute la classe 'active' à ce parent s'il ne l'a pas,
        //    ou on la retire s'il l'a déjà. C'est un interrupteur pour la classe 'active'.
        toggle.parentNode.classList.toggle('active')
    })
});
