module.exports = function(mongoose){
    const locationSchema = new mongoose.Schema({
        address: {type: String},
        num_spots: {type: Number},
        rate: {type: String},
        contact: {type: String}, 
        description: {type: String},
        isPublic: {type: Boolean},
        latitude: {type: Number},
        longitude: {type: Number}
    }, {timestamp: true}); 
    mongoose.model('Location', locationSchema);
}