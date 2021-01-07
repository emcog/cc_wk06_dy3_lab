const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    // console.log(films);
    assert.deepStrictEqual(actual, films);
  });
  
  it('should be able to get a list of film titles', function() {
    // read throgh MDN array methods and note make of suitable enumration
    const actual = cinema.foundTitles();
    filmTitles = ['Moonlight', 'Blade Runner 2049', 'Dunkirk', 'Black Panther', 'T2 Trainspotting'];
    assert.deepStrictEqual(actual, filmTitles);
  });
  
  it('should be able to find a film by title', function() {
    // could have used find method
    const actual = cinema.searchByTitle('Moonlight');
    // console.log(actual);
    assert.deepStrictEqual(actual, {title: 'Moonlight', genre: 'drama', year: 2016, length: 111 });
  });

  xit('should be able to filter films by genre', function() {
    const actual = cinema.searchByGenre('drama');
    assert.deepStrictEqual(actual, [{ title: 'Moonlight', genre: 'drama', year: 2016, length: 111 }, {title: 'T2 Trainspotting', genre: 'drama', year: 2017, length: 117 }]);
  });
  
  xit('should be able to check whether there are some films from a particular year');
  
  xit('should be able to check whether there are no films from a particular year');
  xit('should be able to check whether all films are over a particular length');
  xit('should be able to calculate total running time of all films');

});
