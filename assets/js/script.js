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
var drinkContainerEl = document.querySelector("#drink-container");
var searchHistoryContainerEl = document.querySelector("#search-history");
var searchHistoryList = JSON.parse(localStorage.getItem("searchHistory")) || [];

function submit() {
  var search = searchInput.value.toString();
  console.log(search);
  searchHistoryList.push(search);
  localStorage.setItem("searchHistory", JSON.stringify(searchHistoryList));
  renderSearchHistory();

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

      var genre = data.Genre.split(",")[0];
      console.log(genre);
      //var ratings = parseFloat(data.Ratings[1].Value);
      // console.log(ratings);

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
      imageEl.src =
        data.Poster === "N/A" ? "https://dummyimage.com/400x600" : data.Poster;

      // Set up variables for APIs needed for drinks first so the person working on drinks have access to data from movie fetch

      fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
        .then(function (response) {
          console.log(response);
          return response.json();
        })
        .then(function (data) {
          console.log(data);

          // create an array that includes a list of drinks for each genre. Some movies have multiple genres
          // created an array that includes a list of drinks for each genre 
          var action = ['Manhattan', 'Aviation', 'Gimlet'];
          var adventure = ['Blue Hurricane', 'Midnight Mint', 'Greyhound'];
          var romance = ['Cosmopolitan', 'Lemon Drop', 'Adam & Eve'];
          var fantasy = ['Dry Martini', 'Gin and Tonic', 'Imperial Cocktail'];
          var comedy = ['Banana Cream Pi', 'Flaming Lamborghini', 'Gin Basil Smash '];
          var drama = ['57 Checy with a White License Plate', '747 Drink', '155 Belmont'];
          var horror = ['Michelada', 'Apperol Spritz', 'Amaretto Fizz'];
          var thriller = ['Gin Basil Smash', 'Broadside', 'Abbey Martini'];
          var scifi = ['Espresso Martini', 'Hot Toddy', 'Martinez 2'];
          var crime = ['Miama Vice', 'Dark Caipirinha', "Hunter's Moon"];
          var animation = ['Mango Mojito', 'Lemon Elderflower Spritzer', 'Cream Soda'];
          var mystery = ['Adios Amigos Cocktail', 'Corpse Reviver', 'Death in the Afternoon'];
          var biography = ['Gin Rickey', 'Addison', 'Mary Pickford'];
          var documentary = ['Irish Curlding Cow', 'Mountain Bramble', "Duchamp's Punch"];
          var family = ['Absolutely Fabulous', 'Cherry Electric Lemonade', 'Applejack'];
          var filmnoir = ['Butterfly Effect', 'Afterglow', 'French Martini'];
          var history = ['Brooklyn', 'Malibu Twister', " A Gillian's Island"];
          var music = ['Funk and Soul', 'A1', 'Ace'];
          var musical = ['Jitterbug', 'Honey Bee', 'Lazy Coconut Paloma'];
          var short = ['Bahama Mama', 'Autumn Garibaldi', 'Figgy Thyme'];
          var sport = ['A True Amaretto Sour', "Arizona Stingers' ", '9 1/2 Weeks'];
          var western = ['Bounty Hunter', 'Corn n Oil', "Cocktail Horse's Neck"];
          var war = ['Absolutly Screwed Up', 'Army Special', 'Bombay Cassis'];
          var superhero = ["Captain kidd's Punch", 'Aquamarine', 'Apple Karate'];


          function renderDrink(drinkName) {
            drinkContainerEl.innerHTML = " ";
            var animationEl = document.createElement("p");
            animationEl.textContent = drinkName;
            drinkContainerEl.appendChild(animationEl);

            for (var i = 0; i < data.drinks.length; i++) {
              if (data.drinks[i].strDrink === drinkName) {
                var imageEl = document.createElement("img");
                imageEl.src = data.drinks[i].strDrinkThumb;
                imageEl.alt = drinkName;
                drinkContainerEl.appendChild(imageEl);
              }
            }
          }

        
          // if genre = x then drink

          // create an array that includes a list of drinks for each genre. Some movies have multiple genres



          var drinkList = data.drinks;
          console.log(drinkList.length);
          console.log(drinkList[0].strDrinkThumb);
          console.log(drinkList[0].strDrink);

          // Search drinks array for name
          // if name matches textcontent

          // for (var i = 0; i < drinkList.length; i++) {
          //   if (drinkList[i].strDrink === animationEl.textContent) {
          //     console.log(drinkList[i]);
          //   }
          // }


          // if genre = x then drink
          var randomIndex = Math.floor(Math.random() * 3);
          console.log(randomIndex);

          // switch(genre){
          //   case 'Animation':
          //     var drink = animation[randomIndex];
          //     renderDrink(drink);
          //     break;
          //   case 'Action':
          //     var drink = action[randomIndex];
          //     renderDrink(drink);
          //     break;
          // }

          //Drink Name
        if (genre === "Animation") {
            var drink = animation[randomIndex];
            console.log(drink);
            renderDrink(drink);
        }
        if (genre === "Action") {
            var drink = action[randomIndex];
            console.log(drink);
            renderDrink(drink);
        
        }
        if (genre === "Adventure") {
            var drink = adventure[randomIndex];
            console.log(drink);
            renderDrink(drink);
        }
        if (genre === "Romance") {
            var drink = romance[randomIndex];
            console.log(drink);
            renderDrink(drink);
        }
        if (genre === "Fantasy") {
            var drink = fantasy[randomIndex];
            console.log(drink);
            renderDrink(drink);
        }
        if (genre === "Comedy") {
            var drink = comedy[randomIndex];
            console.log(drink);
            renderDrink(drink);
        }
        if (genre === "Drama") {
            var drink = drama[randomIndex];
            console.log(drink);
            renderDrink(drink);
        }
        if (genre === "Horror") {
            var drink = horror[randomIndex];
            console.log(drink);
            renderDrink(drink);
        }
        if (genre === "Thriller") {
            var drink = thriller[randomIndex]
            console.log(drink);
            renderDrink(drink);
        }
        if (genre === "Crime") {
            var drink = crime[randomIndex];
            console.log(drink);
            renderDrink(drink);
        }
        if (genre === "Mystery") {
            var drink = mystery[randomIndex];
            console.log(drink);
            renderDrink(drink);
        }
        if (genre === "Biography") {
            var drink = biograpghy[randomIndex];
            console.log(drink);
            renderDrink(drink);
        }
        if (genre === "Documentary") {
            var drink = documentary[randomIndex];
            console.log(drink);
            renderDrink(drink);
        }
        if (genre === "Family") {
            var drink = family[randomIndex];
            console.log(drink);
            renderDrink(drink);
        }
        if (genre === "SciFi") {
            var drink = scifi[randomIndex];
            console.log(drink);
            renderDrink(drink);
        }
        
        if (genre === "Filmnoir") {
            var drink = filmnoir[randomIndex];
            console.log(drink);
            renderDrink(drink);
        }
        
        if (genre === "History") {
            var drink = history[randomIndex];
            console.log(drink);
            renderDrink(drink);
        }
        
        if (genre === "Music") {
            var drink = history[randomIndex];
            console.log(drink);
            renderDrink(drink);
        }
        
        if (genre === "Musical") {
            var drink = musical[randomIndex];
            console.log(drink);
            renderDrink(drink);
        }
        
        if (genre === "Short") {
            var drink = short[randomIndex];
            console.log(drink);
            renderDrink(drink);
        }
        
        if (genre === "Sport") {
            var drink = sport[randomIndex];
            console.log(drink);
            renderDrink(drink);
        }
        
        if (genre === "Western") {
            var drink = western[randomIndex];
            console.log(drink);
            renderDrink(drink);
        }
        
        if (genre === "War") {
            var drink = war[randomIndex];
            console.log(drink);
            renderDrink(drink);
        }
        
        if (genre === "Superhero") {
            var drink = superhero[randomIndex];
            console.log(drink);
            renderDrink(drink);
        }

          function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }
          console.log(getRandomInt(2));

          //we already have a random number
          //we can choose index 0 1 2
          //so our random number we pass to the random generator 3
          //so we need to assing the random number to a variable
          //the variable is going to be a number
          //check to see if one number equals another number from each number of the array
          //loop over the index of the array index and select the same number


          // create a random number generator that selects a drink from the array for display
          // if ratings = x then drink // below a certain score
          // create an array that includes a list of drinks for each genre
          // create a random number generator that selects a drink from the array for display
        });
    });
}

// Search Button
searchBtn.addEventListener("click", submit);

// Search history button
searchHistoryContainerEl.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    alert("test");
  }
});

// Search history list
function renderSearchHistory() {
  searchHistoryContainerEl.innerHTML = "";
  for (var i = 0; i < searchHistoryList.length; i++) {
    console.log(searchHistoryList);
    var searchList = document.createElement("button");
    searchList.setAttribute("id", "search-list");
    searchList.textContent = searchHistoryList[i];
    searchHistoryContainerEl.appendChild(searchList);
  }
}

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
