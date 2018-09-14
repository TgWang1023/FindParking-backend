module.exports = function(){
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/parking');
    require('../models/location.js')(mongoose);
};