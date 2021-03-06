var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');


/* GET users listing. */
router.get('/', flightsCtrl.index);

// GET  SHOW NEW FORM
router.get('/new', flightsCtrl.new);

//POST create new flight
router.post('/', flightsCtrl.create);

//GET show flight details
router.get('/:id', flightsCtrl.show);




module.exports = router;
