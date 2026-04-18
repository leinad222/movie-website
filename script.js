function populateMoviesGrid() {
    const moviesGrid = document.getElementById('moviesGrid');
    // Implementation for populating movies grid
}

function populateTvGrid() {
    const tvGrid = document.getElementById('tvGrid');
    // Implementation for populating TV grid
}
const contentData = document.getElementById('content');
const moviesTab = document.getElementById('moviesTab');
const tvTab = document.getElementById('tvTab');

function showMovies() {
    contentData.innerHTML = `
        <div id="moviesGrid" class="movies-grid"></div>
    `;
    populateMoviesGrid();
}
function showTv() {
    contentData.innerHTML = `
        <div id="tvGrid" class="tv-grid"></div>
    `;
    populateTvGrid();
}
function viewallMovies() {
    // Implementation for viewing all movies
}
function viewallTv() {
    // Implementation for viewing all TV shows
}
moviesGrid.addEventListener('click', (event) => {
    const movieCard = event.target.closest('.movie-card');
    if (movieCard) {
        const movieId = movieCard.dataset.id;
        // Implementation for showing movie details
    }
});
tvGrid.addEventListener('click', (event) => {
    const tvCard = event.target.closest('.tv-card');
    if (tvCard) {
        const tvId = tvCard.dataset.id;
        // Implementation for showing TV show details
    }
});
moviesTab.addEventListener('click', showMovies);
tvTab.addEventListener('click', showTv);
// Initial load
showMovies();
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    // Implementation for searching movies and TV shows
});
searchInput.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    // Implementation for searching movies and TV shows
});
const responsiveMenu = document.getElementById('responsiveMenu');
const menuToggle = document.getElementById('menuToggle');
menuToggle.addEventListener('click', () => {
    responsiveMenu.classList.toggle('active');
});
document.addEventListener('click', (event) => {
    if (!responsiveMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        responsiveMenu.classList.remove('active');
    }
});
viewallMovies.addEventListener('click', viewallMovies);
viewallTv.addEventListener('click', viewallTv);
addtoWatchlist.addEventListener('click', () => {
    // Implementation for adding movie to watchlist
});