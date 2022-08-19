var searchBtn = document.querySelector("#search-btn");
var searchInput = document.querySelector("#search-input");
var imageEl = document.getElementById("image");
var plotEl = document.getElementById("plot");
var genreEl = document.getElementById("genre");
var languageEl = document.getElementById("language");
var actorsEl = document.getElementById("actors");
var directorEl = document.getElementById("director");
var releaseEl = document.getElementById("release");
var runTimeEl = document.getElementById("run-time");


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
      plotEl.textContent = "Plot: " + data.Plot;
      genreEl.textContent = "Genre: " + data.Genre;
      languageEl.textContent = "Language: " + data.Language;
      actorsEl.textContent = "Cast: " + data.Actors;
      directorEl.textContent = "Director: " + data.Director;
      releaseEl.textContent = "Release Date: " + data.Released;
      runTimeEl.textContent = "Run Time: " + data.Runtime;



      // if (data.Poster === "N/A") {
      //   imageEl.src = "https://dummyimage.com/400x600";
      // } else {
      //   imageEl.src = data.Poster;
      // }

      // ternary if statement
      imageEl.src = data.Poster === "N/A" ? "https://dummyimage.com/400x600" : data.Poster;



      // Set up variables for APIs needed for drinks first so the person working on drinks have access to data from movie fetch

      fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
        .then(function (response) {
          console.log(response);
          return response.json();
        })
        .then(function (data) {
          console.log(data);



          var action = ['Manhattan', 'Aviation', 'Gimlet']
          var adventure = ['Blue Hurricane', 'Midnight Mint', 'Greyhound']
          var romance = ['Cosmopolitan', 'Lemon Drop', 'Adam & Eve']
          var fantasy = ['Dry Martini', 'Gin and Tonic', 'Imperial Cocktail']
          var comedy = ['Banana Cream Pi', 'Flaming Lamborghini', 'Gin Basil Smash ']
          var drama = ['57 Checy with a White License Plate', '747 Drink', '155 Belmont']
          var horror = ['Michelada', 'Apperol Spritz', 'Amaretto Fizz']
          var thriller = ['Gin Basil Smash', 'Broadside', 'Abbey Martini']
          var scifi = ['Espresso Martini', 'Hot Toddy', 'Martinez 2']
          var crime = ['Miama Vice', 'Dark Caipirinha', "Hunter's Moon"]
          var animation = ['Mango Mojito', 'Lemon Elderflower Spritzer', 'Cream Soda']
          var mystery = ['Adios Amigos Cocktail', 'Corpse Reviver', 'Death in the Afternoon']
          var biography = ['Gin Rickey', 'Addison', 'Mary Pickford']
          var documentary = ['Irish Curlding Cow', 'Mountain Bramble', "Duchamp's Punch"]
          var family = ['Absolutely Fabulous', 'Cherry Electric Lemonade', 'Applejack']
          var filmnoir = ['Butterfly Effect', 'Afterglow', 'French Martini']
          var history = ['Brooklyn', 'Malibu Twister', " A Gillian's Island"]
          var music = ['Funk and Soul', 'A1', 'Ace']
          var musical = ['Jitterbug', 'Honey Bee', 'Lazy Coconut Paloma']
          var short = ['Bahama Mama', 'Autumn Garibaldi', 'Figgy Thyme']
          var sport = ['A True Amaretto Sour', "Arizona Stingers' ", '9 1/2 Weeks']
          var western = ['Bounty Hunter', 'Corn n Oil', "Cocktail Horse's Neck"]
          var war = ['Absolutly Screwed Up', 'Army Special', 'Bombay Cassis']
          var superhero = ["Captain kidd's Punch", 'Aquamarine', 'Apple Karate']


 
         
         











          // if genre = x then drink
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
