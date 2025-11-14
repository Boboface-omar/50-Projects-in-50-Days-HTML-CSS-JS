// On sélectionne les éléments HTML nécessaires : le texte de chargement et l'image d'arrière-plan.
const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

// On initialise une variable 'load' qui suivra la progression du chargement (de 0 à 100).
let load = 0

// On crée un minuteur (interval) qui appellera la fonction 'blurring' toutes les 30 millisecondes.
let int = setInterval(blurring, 30)

// C'est la fonction principale qui met à jour l'affichage à chaque "tick" du minuteur.
function blurring() {
    // On incrémente la progression du chargement.
    load++

    // Si le chargement a atteint 100%...
    if(load > 99) {
        // ...on arrête le minuteur pour que la fonction 'blurring' ne soit plus appelée.
        clearInterval(int)
    }

    // On met à jour le texte pour afficher le pourcentage actuel.
    loadText.innerText = `${load}%`;
    // On change l'opacité du texte. Il passera de 1 (visible) à 0 (invisible) au fur et à mesure que 'load' augmente.
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    // On change le flou (blur) de l'image d'arrière-plan. Il passera de 30px (très flou) à 0px (net) au fur et à mesure que 'load' augmente.
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// Une fonction utilitaire pour mapper une valeur d'une plage numérique à une autre.
// Par exemple, elle convertit la progression du chargement (0-100) en une valeur d'opacité (1-0).
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}