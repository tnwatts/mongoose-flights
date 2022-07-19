const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
    show
}

function show (req, res) {
    Flight.findById(req.params.id, function(err, flight){
        res.render('flights/show', {flight});
    });
}

function index(req,res){
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { flights });
    })
}

function newFlight(req,res){
    res.render('flights/new');
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) {
            console.log('err bitch');
            return res.redirect('/flights/new');
            }
    })
}
