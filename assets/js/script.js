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
          if ( ) {

          }



          Action = ['Manhattan', 'Aviation', 'Gimlet' ]
          Adventure = ['Blue Hurricane', 'Midnight Mint', 'Greyhound' ]
          Romance = ['Cosmopolitan', 'Lemon Drop', 'Adam & Eve' ]
          Fantasy = ['Dry Martini', 'Gin and Tonic', 'Imperial Cocktail'  ]
          Comedy = [ 'Banana Cream Pi', 'Flaming Lamborghini', 'Gin Basil Smash '  ]
          Drama = [ '57 Checy with a White License Plate', '747 Drink', '155 Belmont' ]
          Horror = ['Michelada', 'Apperol Spritz', 'Amaretto Fizz' ]
          Thriller = ['Gin Basil Smash', 'Broadside', ''  ]
          Sci-Fi = ['Espresso Martini', 'Hot Toddy', ''  ]
          Crime = ['Miama Vice', 'Dark Caipirinha', "Hunter's Moon" ]
          Animation = ['Mango Mojito', 'Lemon Elderflower Spritzer', 'Cream Soda'  ]
          Mystery = [ 'Adios Amigos Cocktail', 'Corpse Reviver', 'Death in the Afternoon' ]
          Biography = [ 'Gin Rickey', 'Addison', 'Mary Pickford' ]
          Documentary = ['Irish Curlding Cow', 'Mountain Bramble', "Duchamp's Punch"  ]
          Family = ['Absolutely Fabulous', 'Cherry Electric Lemonade', 'Applejack'  ]
          Film-Noir = [ 'Butterfly Effect', 'Afterglow', 'French Martini']
          History = ['Brooklyn', 'Malibu Twister', " A Gillian's Island"   ]
          Music = [ 'Funk and Soul', 'A1', 'Ace'  ]
          Musical = [ 'Jitterbug', 'Honey Bee', 'Lazy Coconut Paloma'  ]
          Short = [ 'Bahama Mama', 'Autumn Garibaldi', 'Figgy Thyme'  ]
          Sport = ['A True Amaretto Sour',"Arizona Stingers' ", '9 1/2 Weeks' ]
          Western = ['Bounty Hunter', 'Corn n Oil', "Cocktail Horse's Neck"  ]
          War = [ 'Absolutly Screwed Up', 'Army Special', 'Bombay Cassis' ]
          Superhero = ["Captain kidd's Punch", 'Aquamarine', 'Apple Karate'  ]











          
      
    
          
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
