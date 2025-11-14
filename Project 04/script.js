// On sélectionne les éléments HTML : la barre de recherche, le champ de saisie et le bouton
const search =  document.querySelector('.search');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

// Quand on clique sur le bouton
btn.addEventListener('click', () => {
    // On ajoute ou on retire la classe 'active' sur l'élément 'search'
    search.classList.toggle('active')
    // On met le focus sur le champ de saisie pour que l'utilisateur puisse taper directement
    input.focus()
})
