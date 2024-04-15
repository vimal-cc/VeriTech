// scripts.js
function search() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var movies = document.querySelectorAll("#trendingMovies .movie p");
    var series = document.querySelectorAll("#trendingSeries .series p");

    // Hide all movies and series
    for (var i = 0; i < movies.length; i++) {
        movies[i].parentNode.style.display = "none";
    }
    for (var i = 0; i < series.length; i++) {
        series[i].parentNode.style.display = "none";
    }

    // Show movies and series that match the search input
    for (var i = 0; i < movies.length; i++) {
        if (movies[i].innerText.toLowerCase().includes(input)) {
            movies[i].parentNode.style.display = "inline-block";
        }
    }
    for (var i = 0; i < series.length; i++) {
        if (series[i].innerText.toLowerCase().includes(input)) {
            series[i].parentNode.style.display = "inline-block";
        }
    }
}
