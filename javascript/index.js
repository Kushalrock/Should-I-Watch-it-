const apiUrl = "https://api.themoviedb.org/3/movie/popular?api_key=802f2cc35253cb99efe6d36dc71ba39d&language=en-US&page=1";
const imgPath = "https://image.tmdb.org/t/p/w500"
async function getMovies(){
  const resp = await fetch(apiUrl);
  const respData = await resp.json();
  console.log(respData);
  respData.results.forEach((movie, i) => {
    const movie_poster = movie.poster_path;
    const img = document.createElement('img');
    img.src = imgPath + movie_poster;
    document.body.appendChild(img);
  });
  return respData;
}
getMovies();
