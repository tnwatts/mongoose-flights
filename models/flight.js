const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: Date
})

const flightSchema = new Schema({
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
        type: Date,
        default: function() {
            let date = new Date();
            let year = date.getUTCFullYear();
            date.setUTCFullYear(year+1);
            return date;
        }
    }, 
    destinations: [destinationSchema]
})

module.exports = mongoose.model('Flight', flightSchema);