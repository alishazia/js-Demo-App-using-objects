const addMovie = document.getElementById('add-movie-btn');
const search = document.getElementById('search-btn');

const movies = [];

const captureMovie = () => {
    const getMovie = document.getElementById('title').value;
    const getExtraInfo = document.getElementById('extra-name').value;
    const getExtraInfoValue = document.getElementById('extra-value').value;

    if ( getExtraInfoValue.trim() === "" || getExtraInfo.trim() === "" || getMovie.trim() ===""){
        return;
    }

    const movieCapturedFromUser = {
       info :
       { getMovie ,
        [getExtraInfo] : getExtraInfoValue
       },
       id : Math.random()
    };

    movies.push(movieCapturedFromUser);
    console.log(movieCapturedFromUser);
} 

addMovie.addEventListener('click', captureMovie);