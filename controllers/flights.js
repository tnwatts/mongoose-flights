const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show
}

function show (req, res) {
    Flight.findById(req.params.id, function(err, flight){
        // console.log(flight);
        Ticket.find({flight: flight._id}, function(err, tickets){
            res.render('flights/show', {title: "Details", flight, tickets} );
        });
    });
}

function index(req,res){
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: "ALL FLIGHTS", flights });
    })
}

function newFlight(req,res){
    res.render('flights/new', {title: "ADD FLIGHT"});
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) {
            return res.redirect('/flights/new');
            }
    })
}
