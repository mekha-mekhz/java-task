// https://www.omdbapi.com/?s=thor&apikey=85eb1985
const apiKey = '85eb1985';
const searchBtn = document.getElementById('search');
const resultBox = document.getElementById('result');


async function getMovieDetails(imdbID) {
  const res = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`);
  const data = await res.json();

  const card = document.createElement('div');
  card.classList.add('card');

  const title = document.createElement('h4');
  title.textContent = data.Title + ' (' + data.Year + ')';

  const poster = document.createElement('img');
  if (data.Poster !== "N/A") {
    poster.src = data.Poster;
  } else {
    poster.src = 'https://via.placeholder.com/150';
  }

  const rating = document.createElement('p');
  rating.innerHTML = '<strong>IMDB:</strong> ' + data.imdbRating;

  const director = document.createElement('p');
  director.innerHTML = '<strong>Director:</strong> ' + data.Director;

  const plot = document.createElement('p');
  if (data.Plot.length > 100) {
    plot.textContent = data.Plot.slice(0, 100) + '...';
  } else {
    plot.textContent = data.Plot;
  }

  card.appendChild(poster);
  card.appendChild(title);
  card.appendChild(rating);
  card.appendChild(director);
  card.appendChild(plot);

  resultBox.appendChild(card);
}


async function showPopularMovies() {
  resultBox.innerHTML = '<p>Loading popular movies...</p>';

  const popularIDs = [
    'tt0848228', 
    'tt4154796', 
    'tt0468569', 
    'tt1375666', 
    'tt0109830'  
  ];

  resultBox.innerHTML = '';
  for (let id of popularIDs) {
    await getMovieDetails(id);
  }
}
searchBtn.addEventListener('click', async () => {
  const movieName = document.getElementById('movieName').value.trim();

  if (!movieName) {
    resultBox.innerHTML = '<p>Please enter a movie title.</p>';
    return;
  }

  resultBox.innerHTML = '<p>Searching...</p>';

  try {
    const searchRes = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(movieName)}&apikey=${apiKey}`);
    const searchData = await searchRes.json();

    if (searchData.Response === "False") {
      resultBox.innerHTML = '<p>No movies found for "' + movieName + '"</p>';
      return;
    }

    const movieList = searchData.Search.slice(0, 5);
    resultBox.innerHTML = '';

    for (let movie of movieList) {
      await getMovieDetails(movie.imdbID);
    }

  } catch (err) {
    resultBox.innerHTML = '<p>Error fetching movie data.</p>';
    console.error(err);
  }
});


window.addEventListener('DOMContentLoaded', showPopularMovies);
