const mongoose = require('mongoose');
const Location = mongoose.model('Location');

module.exports = {
    all: function(req, res) {
        Location.find({}, function(err, location) {
            if(err) {
                console.log('Something went wrong when getting locations');
                res.json({messgae: 'Error', error: err});
            } else {
                res.json({message: 'Success', data: location});
            }
        });
    }, 
    one: function(req, res) {
        Location.findById(req.params.id, function(err, location) {
            if(err) {
                console.log('Something went wrong when getting a location by id');
                res.json({messgae: 'Error', error: err});
            } else {
                res.json({message: 'Success', data: location});
            }
        });
    },
    new: function(req, res) {
        const loc = new Location(req.body)
        loc.save(function(err) {
            if(err) {
                console.log('Something went wrong when adding a location');
                res.json({message: 'Error', error: err});
            } else {
                Location.find({_id: loc._id}, function(err, location) {
                    if (err) {
                        console.log('Something went wrong when getting a location by id');
                        res.json({messgae: 'Error', error: err});
                    } else {
                        res.json({message: 'Success', data: location});
                    }
                });
            }
        });
    },
    edit: function(req, res) {
        Location.findByIdAndUpdate(req.params.id, req.body, function(err, location) {
            if(err) {
                console.log("Something went wrong when editing a location by id")
                res.json({messgae: 'Error', error: err});
            } else {
                res.json({message: 'Success', data: location});
            }
        });
    }, 
    remove: function(req, res) {
        Location.findByIdAndRemove(req.params.id, function(err, location) {
            if(err) {
                console.log("Something went wrong when remove a location by id")
                res.json({messgae: 'Error', error: err});
            } else {
                res.json({message: 'Success', data: location});
            }
        });
    }
};