console.log("Check");
const apiArray=["https://api.themoviedb.org/3/movie/popular?api_key=802f2cc35253cb99efe6d36dc71ba39d&language=en-US&page=1","https://api.themoviedb.org/3/search/movie?api_key=802f2cc35253cb99efe6d36dc71ba39d&language=en-US&page=1&include_adult=true&query=","https://api.themoviedb.org/3/movie/top_rated?api_key=802f2cc35253cb99efe6d36dc71ba39d&language=en-US&page=1","https://api.themoviedb.org/3/movie/upcoming?api_key=802f2cc35253cb99efe6d36dc71ba39d&language=en-US&page=1"]
const imgPath = "https://image.tmdb.org/t/p/w154"
const form = document.querySelector("#form");
const search = document.querySelector(".search");

async function getMovies(apiUrl,id){
  const resp = await fetch(apiUrl);
  const respData = await resp.json();
  console.log(respData);
  respData.results.forEach((movie, i) => {
    const movieInfo = document.createElement(`div`);
    movieInfo.classList.add(`movie`);
    movieInfo.innerHTML= `
    <div class="image">
      <img src= "${imgPath + movie.poster_path}" alt="${movie.title}"/>
    </div>
    <div class = "movie-info">
      <div class = "movie-name">
        "${movie.title}"
      </div>
      <div class = "movie-rating" style="color:${getRatingColor(movie.vote_average)};">
        ${movie.vote_average}
      </div>`;
    document.getElementById(id).appendChild(movieInfo);
  });
}
function getRatingColor(rating){
  if(rating >= 7){
    return "lightgreen";
  }
  else if (rating < 7 && rating >= 5) {
    return "orange";
  }
  else{
    return "red";
  }
}

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const searchTerm = search.value;
  document.body.innerHTML= `
  <header>
    <div class="nav">
      <h2>Should I Watch It?</h2>
      <form id="form">
        <input type="text" name="search" placeholder="Search movies"/>
        <button type="submit"><i class="fa fa-search"></i></button>
      </form>
    </div>
  </header>
  <div id="search-result"></div>`;
  getMovies(apiArray[1] + searchTerm,"search-result");
})
getMovies(apiArray[0],"popular-movies");
getMovies(apiArray[2],"top-rated-movies");
getMovies(apiArray[3],"upcoming-movies");
