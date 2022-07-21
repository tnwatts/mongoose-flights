const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create
}

function newTicket (req, res) {
    flightId = req.params.id;
    // Flight.findById(req.params.id, function(err, flight){
        res.render('tickets/new', {title: "ADD TICKET", flightId});
    // })
}

function create (req, res) {
    const ticket = new Ticket(req.body);
    Flight.findById(req.params.id , function(err, flight){
        ticket.flight = flight;
        ticket.save(function(err) {
            console.log(err);
            
            if (err) return res.redirect('/flights');
            res.redirect(`/flights/${flight._id}`);
        })
    })

}