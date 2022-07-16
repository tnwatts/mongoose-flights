const mongoose = require('mongoose');

const flightsSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: ['America', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Number,
        default: function() {return (new Date().getFullYear()+1);
        }
    }, 
})