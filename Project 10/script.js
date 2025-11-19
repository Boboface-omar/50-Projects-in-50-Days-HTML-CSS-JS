// --- 1. Initialisation ---
// On récupère l'élément HTML où la blague sera affichée (probablement un <p> ou <div> avec l'id="joke").
const jokeEl = document.getElementById('joke');
// On récupère le bouton sur lequel l'utilisateur cliquera (un <button> avec l'id="jokeBtn").
const jokeBtn = document.getElementById('jokeBtn');

// --- 2. Mise en place de l'écouteur d'événement ---
// On dit au navigateur : "Quand quelqu'un clique sur le bouton 'jokeBtn', exécute la fonction generateJoke".
jokeBtn.addEventListener('click', generateJoke);

// --- 3. Premier appel ---
// On exécute la fonction une première fois dès le chargement du script.
// Cela permet d'afficher une blague tout de suite, sans attendre que l'utilisateur clique.
generateJoke();

// --- 4. La fonction principale (avec async/await) ---
// Le mot-clé "async" indique que cette fonction contient des opérations qui peuvent prendre du temps (comme attendre une réponse d'un serveur).
async function generateJoke() {
    // On prépare un objet de configuration pour notre requête.
    const config = {
        headers: {
            // C'est une instruction pour le serveur de blagues.
            // On lui dit : "S'il te plaît, envoie-moi la réponse au format JSON (un format de données facile à utiliser en JS)
            // et non au format HTML (une page web complète)".
            'Accept': 'application/json'
        }
    };

    // On rend l'élément de la blague invisible. C'est le début de l'animation de fondu.
    jokeEl.style.opacity = 0;
    
    // Le mot-clé "await" met la fonction en pause ICI, sans bloquer le reste de la page.
    // fetch() envoie une requête à l'URL pour obtenir une blague.
    // La fonction attend que le serveur ait répondu, puis stocke la réponse dans la variable 'res'.
    const res = await fetch('https://icanhazdadjoke.com', config);

    // La réponse 'res' n'est pas encore la blague elle-même.
    // On utilise 'await res.json()' pour extraire les données au format JSON de la réponse.
    // On attend que cette conversion soit terminée, puis on stocke le résultat (qui est un objet JS) dans 'data'.
    const data = await res.json();
    
    // L'objet 'data' contient la blague dans une propriété appelée 'joke'.
    // On met à jour le contenu HTML de notre élément 'jokeEl' avec le texte de la blague.
    // À ce moment, l'élément est toujours invisible (opacity: 0).
    jokeEl.innerHTML = data.joke;

    // On rend à nouveau l'élément visible.
    // Comme il y a une transition CSS sur l'opacité, cela va créer un effet de fondu (fade in).
    jokeEl.style.opacity = 1;
}


// --- 5. Alternative (non utilisée ici car en commentaire) ---
// C'est une autre façon d'écrire la même logique, plus ancienne, qui utilise ".then()" au lieu de "async/await".
// Elle fait exactement la même chose : récupérer une blague et l'afficher.
// function generateJoke() {
//     const config = {
//         headers : {
//             'Accept' : 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//         jokeEl.innerHTML = data.joke
//     })
// }
