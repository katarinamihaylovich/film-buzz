var moviesAPI = "https://www.omdbapi.com/?apikey=e1fca0fc&t=avatar";

var drinksAPI =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";

// Genre, Time, Ratings
// hardcode

// Browse button
fetch(moviesAPI)
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

fetch(drinksAPI)
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// if/else pertaining to genre
// if/else pertaining to time
// if/else pertaining to ratings

// OMDB
// horof35563@wnpop.com
// e1fca0fc

// IMDB
// https://imdb-api.com/en/API/SearchKeyword/k_12345678/gun

// 1. Search by title
// 2. Genre
// 3. Runtime
// 4. Ratings

// if genre = action then
// if ratings = then
