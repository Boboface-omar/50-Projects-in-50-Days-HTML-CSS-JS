// On définit un tableau avec les noms des sons.
// Ces noms doivent correspondre aux ID des balises <audio> dans le fichier HTML.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

// On parcourt chaque son dans le tableau 'sounds'.
sounds.forEach(sound => {
    // Pour chaque son, on crée un nouvel élément <button>.
    const btn = document.createElement('button')
    // On ajoute la classe 'btn' au bouton pour le styliser via CSS.
    btn.classList.add('btn')

    // On définit le texte du bouton pour qu'il corresponde au nom du son.
    btn.innerText = sound

    // On ajoute un écouteur d'événement qui se déclenchera au clic sur le bouton.
    btn.addEventListener('click', () => {
        // D'abord, on arrête tous les sons qui pourraient être en cours de lecture.
        stopSongs()

        // Ensuite, on récupère l'élément audio par son ID et on le joue.
        document.getElementById(sound).play()
    })

    // On ajoute le bouton nouvellement créé à l'élément avec l'ID 'buttons' dans le HTML.
    document.getElementById('buttons').appendChild(btn)
})

// Fonction pour arrêter la lecture de tous les sons.
function stopSongs() {
    // On parcourt à nouveau la liste de tous les sons.
    sounds.forEach(sound => {
        // On récupère l'élément audio correspondant au son.
        const song = document.getElementById(sound)

        // On met la lecture en pause.
        song.pause()
        // On remet le temps de lecture à 0 pour que le son recommence du début la prochaine fois.
        song.currentTime = 0
    })
}