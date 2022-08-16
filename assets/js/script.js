var moviesAPI = `https://www.omdbapi.com/?apikey=e1fca0fc&t=${search}`;

var drinksAPI =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";

var searchBtn = document.querySelector("#search-btn");
var searchInput = document.querySelector("#search-input");
var search = searchInput.value;
console.log(search);
// var search = "titanic";
// Genre, Time, Ratings
// hardcode

function submit() {
  fetch(moviesAPI)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // if data.genre = horror
      // drink cat = gin
      // fetch(drinks gin)

      fetch(drinksAPI)
        .then(function (response) {
          console.log(response);
          return response.json();
        })
        .then(function (data) {
          console.log(data);
        });
    });
}

// Search Button
searchBtn.addEventListener("click", submit);

// call function inside fetch // not to be used
// function callMyFunc(someData) {
//   console.log(someData);
// }

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
