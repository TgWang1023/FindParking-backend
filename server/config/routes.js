const locations = require('../controllers/locations.js');

module.exports = function(app){
    app.get('/locations', function(req, res){
        locations.all(req, res);
    });
    app.get('/locations/:id', function(req, res){
        locations.one(req, res);
    });
    app.post('/locations', function(req, res){
        locations.new(req, res);
    });
    app.put('/locations/:id', function(req, res){
        locations.edit(req, res);
    });
    app.delete('/locations/:id', function(req, res){
        locations.remove(req, res);
    });
};