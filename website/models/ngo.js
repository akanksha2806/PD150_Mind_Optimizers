var mongoose = require("mongoose");

var CampgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    address: String,
    email:String,
    phone: Number
});

module.exports = new mongoose.model("Campgrounds", CampgroundSchema);