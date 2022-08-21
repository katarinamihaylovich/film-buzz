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

      var genre = data.Genre.split(",")[0];
      console.log(genre);
      //var ratings = parseFloat(data.Ratings[1].Value);
      // console.log(ratings);

      console.log(data.Genre.split(",")[0]);

      function x() {
        console.log();
      }
      // DOM for movie display
      // does not duplicate search displays if clicked multiple times
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
      // directorEl.textContent = "Director: " + data.Director;
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
      // runTimeEl.textContent = "Run Time: " + data.Runtime;
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

<<<<<<< HEAD
=======
        
          // if genre = x then drink

          // create an array that includes a list of drinks for each genre. Some movies have multiple genres



          var drinkList = data.drinks;
          console.log(drinkList.length);
          console.log(drinkList[0].strDrinkThumb);
          console.log(drinkList[0].strDrink);

>>>>>>> main
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
            console.log("test3");
          }
          if (genre === "Romance") {
            console.log("test4");
          }
          if (genre === "Fantasy") {
            console.log("test5");
          }
          if (genre === "Comedy") {
            console.log("test6");
          }
          if (genre === "Drama") {
            console.log("test7");
          }
          if (genre === "Horror") {
            console.log("test8");
          }
          if (genre === "Thriller") {
            console.log("test9");
          }
          if (genre === "Crime") {
            console.log("test10");
          }
          if (genre === "Mystery") {
            console.log("test11");
          }
          if (genre === "SciFi") {
            console.log("test12");
          }
          if (genre = 'biography') {
            console.log('test13');
          }
          if (genre = 'documentary') {
            console.log('test14');
          }
          if (genre = 'family') {
            console.log('test15');
          }
          if (genre = 'filmnoir') {
            console.log('test16');
          }
          if (genre = 'history') {
            console.log('test17');
          }
          if (genre = 'music') {
            console.log('test18');
          }
          if (genre = 'musical') {
            console.log('test19');
          }
          if (genre = 'short') {
            console.log('test20');
          }
          if (genre = 'sport') {
            console.log('test21');
          }
          if (genre = 'western') {
            console.log('test22');
          }
          if (genre = 'war') {
            console.log('test23');
          }
          if (genre = 'superhero') {
            console.log('test24');
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
