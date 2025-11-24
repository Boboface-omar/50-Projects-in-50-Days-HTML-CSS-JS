// On sélectionne l'élément HTML qui a l'id 'insert' pour pouvoir y écrire plus tard.
const insert = document.getElementById('insert')

// On ajoute un "écouteur d'événements" sur la fenêtre entière du navigateur.
// Cet écouteur va se déclencher à chaque fois qu'une touche du clavier est pressée ('keydown').
window.addEventListener('keydown', (event) => {
    // Quand une touche est pressée, on remplace le contenu HTML de l'élément 'insert'.
    // On utilise une chaîne de caractères littérale (template literal) avec des backticks ``
    // pour construire facilement le HTML.
    insert.innerHTML = `
     <div class="key">
            ${/* On vérifie si la touche pressée est la barre d'espace. */
              /* Si c'est le cas (event.key === ' '), on affiche 'Space'. */
              /* Sinon, on affiche la valeur de event.key (ex: 'a', 'Enter'). */
              event.key === ' ' ? 'Space' : event.key}
            <small>event.key</small>
        </div>

        <div class="key">
            ${event.keyCode}
            <small>event.keyCode</small>
        </div>

        <div class="key">
            ${event.code}
            <small>event.code</small>
        </div>
    `
})
