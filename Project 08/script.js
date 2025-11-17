// Sélectionne toutes les étiquettes (labels) qui sont à l'intérieur d'éléments avec la classe 'form-control'
const labels = document.querySelectorAll('.form-control label')

// Parcourt chaque étiquette sélectionnée
labels.forEach(label => {
    // Remplace le contenu HTML de l'étiquette par une nouvelle structure
    label.innerHTML = label.innerText // Prend le texte brut de l'étiquette
    .split('') // Sépare le texte en un tableau de lettres individuelles
    // Transforme chaque lettre en un élément <span> avec un délai de transition calculé
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('') // Rassemble toutes les lettres (maintenant dans des <span>) en une seule chaîne de caractères
})