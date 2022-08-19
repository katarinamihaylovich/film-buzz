var searchBtn = document.querySelector("#search-btn");
var searchInput = document.querySelector("#search-input");

function submit() {
  var search = searchInput.value.toString();
  console.log(search);

  // Fetch request for moviesAPI
  fetch(`https://www.omdbapi.com/?apikey=e1fca0fc&t=${search}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.Genre);
      // Each genre
      console.log(data.Genre.split(","));
      // One genre
      console.log(data.Genre.split(",")[0]);

      // DOM for movie display
      // Set up variables for APIs needed for drinks first so the person working on drinks have access to data from movie fetch

      fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
        .then(function (response) {
          console.log(response);
          return response.json();
        })
        .then(function (data) {
          console.log(data);
        
          // if genre = x then drink
          if (genre = "biography") {
            console.log("test13");
          }
          if (genre = "documentary") {
            console.log("test14");
          }
          if (genre = "family") {
            console.log("test15");
          }
          if (genre = "filmnoir") {
            console.log("test16");
          }
          if (genre = "history") {
            console.log("test17");
          }
          if (genre = "music") {
            console.log("test18");
          }
          if (genre = "musical") {
            console.log("test19");
          }
          if (genre = "short") {
            console.log("test20");
          }
          if (genre = "sport") {
            console.log("test21");
          }
          if (genre = "western") {
            console.log("test22");
          }
          if (genre = "war") {
            console.log("test23");
          }
          if (genre = "superhero") {
            console.log("test24");
          }
          // create an array that includes a list of drinks for each genre. Some movies have multiple genres
          // create a random number generator that selects a drink from the array for display
          // if ratings = x then drink // below a certain score
          // create an array that includes a list of drinks for each genre
          // create a random number generator that selects a drink from the array for display
        });
    });
}

// Search Button
searchBtn.addEventListener("click", submit);

// Ideas
// 1. A second button called feeling lucky which includes an array of movies we put in there. We then make a random number generator
// to pick the movies from the bracket.

// 2. A

// NOTES / NOT PART OF CODE
// call function inside fetch // not to be used
// function callMyFunc(someData) {
//   console.log(someData);
// }

// OMDB
// horof35563@wnpop.com
// e1fca0fc

// IMDB
// https://imdb-api.com/en/API/SearchKeyword/k_12345678/gun

// if data.genre = horror
// drink cat = gin
// fetch(drinks gin)
