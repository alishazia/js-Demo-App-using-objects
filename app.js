const addMovie = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const captureMovie = () => {
    const getMovie = document.getElementById('title').value;
    const getExtraInfo = document.getElementById('extra-name').value;
    const getExtraInfoValue = document.getElementById('extra-value').value;

    if (getExtraInfoValue.trim() === "" || getExtraInfo.trim() === "" || getMovie.trim() === "") {
        return;
    }

    const movieCapturedFromUser = {
        info:
        {
            title: getMovie,
            [getExtraInfo]: getExtraInfoValue
        },
        id: Math.random()
    };

    movies.push(movieCapturedFromUser);
    console.log(movieCapturedFromUser);
    renderMovies()

}

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list');
    if (movies.length === 0) {
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';

    const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter))

    filteredMovies.forEach((movie) => {
        const movieEl = document.createElement('li');
        let text = movie.info.title + ' - ';
        for (const key in movie.info) {
            console.log(key);
            if (key !== 'title') {
                console.log(key);
                console.log(movie.info[key]);
                text = text + `${key}: ${movie.info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    });
}

const filteredMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
}

addMovie.addEventListener('click', captureMovie);
searchBtn.addEventListener('click', filteredMovieHandler);