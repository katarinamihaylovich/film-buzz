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
// Local storage
var searchHistoryList = localStorage.getItem("searchHistory");

// Search Button
searchBtn.addEventListener("click", submit);

function submit() {
  var search = searchInput.value.toString();
  console.log(search);
  // save to local storage
  localStorage.setItem("searchHistory", searchInput.value);
  console.log(search);
  console.log(searchHistoryList);
  console.log(typeof searchHistoryList);
  console.log(typeof search);

  // Fetch request for movies' API
  fetch(`https://www.omdbapi.com/?apikey=e1fca0fc&t=${search}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.Genre);

      var genre = data.Genre.split(",")[0];
      console.log(genre);
      //var ratings = parseFloat(data.Ratings[1].Value);
      // console.log(ratings);

      console.log(data.Genre.split(",")[0]);

      // DOM for movie display
      plotEl.innerHTML = "";
      genreEl.innerHTML = "";
      languageEl.innerHTML = "";
      actorsEl.innerHTML = "";
      directorEl.innerHTML = "";
      releaseEl.innerHTML = "";
      runTimeEl.innerHTML = "";
      // Plot
      var plotLabelEl = document.createElement("span");
      plotLabelEl.setAttribute("class", "display-labels");
      var plotContent = document.createElement("span");
      plotLabelEl.textContent = "Plot: ";
      plotContent.textContent = data.Plot;
      plotEl.appendChild(plotLabelEl);
      plotEl.appendChild(plotContent);
      // Genre
      var genreLabelEl = document.createElement("span");
      genreLabelEl.setAttribute("class", "display-labels");
      var genreContent = document.createElement("span");
      genreLabelEl.textContent = "Genre: ";
      genreContent.textContent = data.Genre;
      genreEl.appendChild(genreLabelEl);
      genreEl.appendChild(genreContent);
      // Language
      var languageLabelEl = document.createElement("span");
      languageLabelEl.setAttribute("class", "display-labels");
      var languageContent = document.createElement("span");
      languageLabelEl.textContent = "Language: ";
      languageContent.textContent = data.Language;
      languageEl.appendChild(languageLabelEl);
      languageEl.appendChild(languageContent);
      // Cast
      var actorsLabelEl = document.createElement("span");
      actorsLabelEl.setAttribute("class", "display-labels");
      var actorsContent = document.createElement("span");
      actorsLabelEl.textContent = "Cast: ";
      actorsContent.textContent = data.Actors;
      actorsEl.appendChild(actorsLabelEl);
      actorsEl.appendChild(actorsContent);
      // Director
      var directorLabelEl = document.createElement("span");
      directorLabelEl.setAttribute("class", "display-labels");
      var directorContent = document.createElement("span");
      directorLabelEl.textContent = "Directors: ";
      directorContent.textContent = data.Director;
      directorEl.appendChild(directorLabelEl);
      directorEl.appendChild(directorContent);
      // Release date
      var releaseLabelEl = document.createElement("span");
      releaseLabelEl.setAttribute("class", "display-labels");
      var releaseContent = document.createElement("span");
      releaseLabelEl.textContent = "Release Date: ";
      releaseContent.textContent = data.Released;
      releaseEl.appendChild(releaseLabelEl);
      releaseEl.appendChild(releaseContent);
      // Run Time
      var runTimeLabelEl = document.createElement("span");
      runTimeLabelEl.setAttribute("class", "display-labels");
      var runTimeContent = document.createElement("span");
      runTimeLabelEl.textContent = "Run Time: ";
      runTimeContent.textContent = data.Runtime;
      runTimeEl.appendChild(runTimeLabelEl);
      runTimeEl.appendChild(runTimeContent);
      // if (data.Poster === "N/A") {
      //   imageEl.src = "https://dummyimage.com/400x600";
      // } else {
      //   imageEl.src = data.Poster;
      // }

      // Ternary if statement
      imageEl.src =
        data.Poster === "N/A" ? "https://dummyimage.com/400x600" : data.Poster;

      // Fetch request for drinks' API
      fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
        .then(function (response) {
          console.log(response);
          return response.json();
        })
        .then(function (data) {
          console.log(data);

          // Passes argument from line 220
          function renderDrink(drinkName) {
            drinkContainerEl.innerHTML = " ";
            var animationEl = document.createElement("p");
            animationEl.setAttribute("id", "glass-label");
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

          // created an array that includes a list of drinks for each genre
          var action = ["Manhattan", "Aviation", "Gimlet"];
          var adventure = ["Blue Hurricane", "Midnight Mint", "Greyhound"];
          var romance = ["Cosmopolitan", "Lemon Drop", "Adam & Eve"];
          var fantasy = ["Dry Martini", "Gin and Tonic", "Imperial Cocktail"];
          var comedy = [
            "Banana Cream Pi",
            "Flaming Lamborghini",
            "Gin Basil Smash ",
          ];
          var drama = [
            "57 Checy with a White License Plate",
            "747 Drink",
            "155 Belmont",
          ];
          var horror = ["Michelada", "Apperol Spritz", "Amaretto Fizz"];
          var thriller = ["Gin Basil Smash", "Broadside", "Abbey Martini"];
          var scifi = ["Espresso Martini", "Hot Toddy", "Martinez 2"];
          var crime = ["Miama Vice", "Dark Caipirinha", "Hunter's Moon"];
          var animation = [
            "Mango Mojito",
            "Lemon Elderflower Spritzer",
            "Cream Soda",
          ];
          var mystery = [
            "Adios Amigos Cocktail",
            "Corpse Reviver",
            "Death in the Afternoon",
          ];
          var biography = ["Gin Rickey", "Addison", "Mary Pickford"];
          var documentary = [
            "Irish Curlding Cow",
            "Mountain Bramble",
            "Duchamp's Punch",
          ];
          var family = [
            "Absolutely Fabulous",
            "Cherry Electric Lemonade",
            "Applejack",
          ];
          var filmnoir = ["Butterfly Effect", "Afterglow", "French Martini"];
          var history = ["Brooklyn", "Malibu Twister", " A Gillian's Island"];
          var music = ["Funk and Soul", "A1", "Ace"];
          var musical = ["Jitterbug", "Honey Bee", "Lazy Coconut Paloma"];
          var short = ["Bahama Mama", "Autumn Garibaldi", "Figgy Thyme"];
          var sport = [
            "A True Amaretto Sour",
            "Arizona Stingers' ",
            "9 1/2 Weeks",
          ];
          var western = [
            "Bounty Hunter",
            "Corn n Oil",
            "Cocktail Horse's Neck",
          ];
          var war = ["Absolutly Screwed Up", "Army Special", "Bombay Cassis"];
          var superhero = [
            "Captain kidd's Punch",
            "Aquamarine",
            "Apple Karate",
          ];

          // A method instead of if/else in this scenario // switch
          // switch(genre){
          //   case 'Animation':ß
          //     var drink = animation[randomIndex];
          //     renderDrink(drink);
          //     break;
          //   case 'Action':
          //     var drink = action[randomIndex];
          //     renderDrink(drink);
          //     break;
          // }

          // Matching drinks based on movie genre
          var randomIndex = Math.floor(Math.random() * 3);
          console.log(randomIndex);

          if (genre === "Animation") {
            // Drink name
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
            var drink = thriller[randomIndex];
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
          if (genre === "SciFi") {
            var drink = scifi[randomIndex];
            console.log(drink);
            renderDrink(drink);
          }
          if (genre === "Biography") {
            var drink = biography[randomIndex];
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
            var drink = music[randomIndex];
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
        });
    });
}

// Previous result stays on search bar // local storage
searchInput.value = searchHistoryList;

// Notes
// OMDB
// horof35563@wnpop.com
// e1fca0fc

// IMDB
// https://imdb-api.com/en/API/SearchKeyword/k_12345678/gun
