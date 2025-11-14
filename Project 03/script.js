// On sélectionne les éléments HTML : les boutons d'ouverture/fermeture et le conteneur principal
const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

// Quand on clique sur le bouton 'open', on ajoute la classe 'show-nav' au conteneur
open.addEventListener('click', () => {
    container.classList.add('show-nav');
});

// Quand on clique sur le bouton 'close', on retire la classe 'show-nav' du conteneur
close.addEventListener('click', () => {
    container.classList.remove('show-nav');
});