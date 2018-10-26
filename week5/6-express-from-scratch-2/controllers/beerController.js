const Beer = require('../models/beer');

function beersIndex(req, res) {
  Beer.find().then(beers => {
    // beers is an array :( Need to make an object:
    const beerObj = {
      beers: beers
    };
    res.render('beers/index', beerObj);
  });
}

function beersShow(req, res) {
  // First find the beer in the database
  Beer.findById(req.params.beerId)
    .then(beer => {
      res.render('beers/show', beer);
    });
}

function beersNew(req, res) {
  res.render('beers/new');
}

function beersCreate(req, res) {
  Beer.create(req.body)
    .then(beer => {
      res.redirect(`/beers/${beer.id}`);
    });
}

function beersEdit(req, res) {
  // Edit form is prepopulated so we need to find the beer First
  Beer.findById(req.params.beerId)
    .then(beer => {
      res.render('beers/edit', beer);
    });
}

function beersUpdate(req, res) {
  // Find the beer, then update it
  Beer.findByIdAndUpdate(req.params.beerId, req.body)
    .then(beer => res.redirect(`/beers/${beer._id}`));
}

module.exports = {
  index: beersIndex,
  show: beersShow,
  new: beersNew,
  create: beersCreate,
  edit: beersEdit,
  update: beersUpdate
};
