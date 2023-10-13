let allMovies = [];

// Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
  constructor(title, rating, haveWatched) {
    this.title = title;
    this.rating = rating;
    this.haveWatched = haveWatched;
  }
}

// Add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
  allMovies.push(movie);
  console.log("A new movie is added");
};

// Iterate through all elements of allMovies array
// Display the total number of movies in allMovies array
let printMovies = () => {
  console.log("Printing all movies....");
  for (const movie of allMovies) {
    console.log(`${movie.title}, rating of ${movie.rating}, havewatched: ${movie.haveWatched}`);
  }
  console.log(`\nYou have ${allMovies.length} movies in total`);
};

// Display only the movies that have a rating higher than the specified rating
// Display the total number of matches
let highRatings = (rating) => {
  console.log(`printing movies that have a rating higher than ${rating}`);
  let matches = 0;
  for (const movie of allMovies) {
    if (movie.rating > rating) {
      console.log(`${movie.title} has a rating of ${movie.rating}`);
      matches++;
    }
  }
  console.log(`\nIn total, there are ${matches} matches`);
};

// Toggle the 'haveWatched' property of the specified movie
let changeWatched = (title) => {
  console.log("changing the status of the movie...");
  for (const movie of allMovies) {
    if (movie.title === title) {
      movie.haveWatched = !movie.haveWatched;
    }
  }
};

////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();

/*replace console.log with display on web page*/
console.log("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();
/*replace console.log with display on web page*/
console.log("----------------");

highRatings(3.5);