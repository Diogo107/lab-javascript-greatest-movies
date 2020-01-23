/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
  var newArray = [...array].sort(compareYear);
  function compareYear(a, b) {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      if (a.title === b.title) {
        return 0;
      }
    }
  }

  return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
  var directorMovie = array.filter(function(movie) {
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
  });
  return directorMovie.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
  //sort
  var sortTwenty = [...array].sort(compareTitle);
  function compareTitle(a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    if (a.title === b.title) {
      return 0;
    }
  }
  //Slice
  sortTwenty.slice(0, 19);

  return sortTwenty;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage() {}
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate() {}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg() {}
