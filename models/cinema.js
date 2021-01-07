const Cinema = function (films) {
  this.films = films;
};


// list of film titles
// we have array of objects
// we need to access each object in the array
// we need to acces the title of each object
// we need to return the title of each object
// into an array

Cinema.prototype.foundTitles = function() {
  const titles = this.films.map((film) => {
    return film.title;
  });

  return titles;
}

Cinema.prototype.searchByTitle = function(filmTitle) {
  const foundFilms = this.films.filter((film) => {
    return filmTitle === film.title;
  });
  return foundFilms[0]; //could use find instead
};

module.exports = Cinema;