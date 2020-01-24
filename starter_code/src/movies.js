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
  return (title = array
    .map(title => title.title)
    .sort()
    .slice(0, 20));
}
/* const  orderAlphabetically = array => {
  return order = array.map(title)
}*/

/*//sort
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
  sortTwenty.slice(20, 250);

  return sortTwenty;
}*/

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = array => {
  if (array.length === 0) {
    return 0;
  }
  // usar o filter antes de descobrir a soma
  const rates = array.map(movie => movie.rate);
  const sumOfAllRates = rates.reduce((accumulator, rate) => {
    if (typeof rate === 'number') {
      return accumulator + rate;
    } else {
      return accumulator;
    }
  }, 0);
  const averageRate = sumOfAllRates / rates.length;
  return Number(averageRate.toFixed(2));
};

//function ratesAverage() {}

// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = array => {
  const dramaMovies = array.filter(movie => movie.genre.includes('Drama'));
  const averageDramaMovieRate = ratesAverage(dramaMovies);
  return averageDramaMovieRate;
};

//function dramaMoviesRate() {}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = array => {
  return array.map(movie => {
    const durationAsString = movie.duration;

    let duration = 0;

    for (let value of durationAsString.split(' ')) {
      const number = parseInt(value);
      if (value.includes('h')) {
        duration += number * 60;
      } else if (value.includes('min')) {
        duration += number;
      }
    }

    return {
      ...movie,
      duration
    };
  });
};

//function turnHoursToMinutes() {}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
/*const bestYearAvg = array => {
  const movieAverageRateByYear = array.reduce((accumulator, movie) => {
    const yearOfMovie = movie.year;
    const rateOfMovie = movie.rate;

    if (typeof acuumulator [yearOfMovie] === 'undefined'){
     accumulator [yearOfMovie] = [rateOfMovie];
    } else {
    acumulator [yearOfMovie].push(rateOfMovie);
    }

    return accumulator;
  })
}


for (let year in movieAverageRateByYear) {
  const movieAverageRateByYear = movieAverageRateByYear[year]..reduce(
    (accumulator, rate, inderx, originalArray) => accumulator + rate/originalArray.length, 0
  )
}*/
