const apiUrl = "https://api.themoviedb.org/3/movie/popular?api_key=802f2cc35253cb99efe6d36dc71ba39d&language=en-US&page=1";
const imgPath = "https://image.tmdb.org/t/p/w154"
async function getMovies(){
  const resp = await fetch(apiUrl);
  const respData = await resp.json();
  console.log(respData);
  respData.results.forEach((movie, i) => {
    const movieInfo = document.createElement(`div`);
    movieInfo.classList.add(`movie`);
    movieInfo.innerHTML=
    <div class="image">
      <img src= `${imgPath + movie.poster_path}`/>
    </div>
    <div class = "movie-info">
      <div class = "movie-name">
        `${movie.title}`
      </div>
      <div class = "movie-rating">
        `${movie.vote_average}`
      </div>;
    document.getElementByClassName(main).appendChild(movieInfo);
  });
  return respData;
}
getMovies();
