// Fonction pour afficher/masquer la barre de recherche
function toggleSearch() {
    var searchBar = document.getElementById('search-bar');
    
    // Vérifier si la barre de recherche a la classe "visible"
    if (searchBar.classList.contains('visible')) {
        searchBar.classList.remove('visible'); // Masquer la barre avec le fondu
    } else {
        searchBar.classList.add('visible'); // Afficher la barre avec le fondu
    }
}
