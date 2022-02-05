var mongoose = require('mongoose');

var schema = mongoose.Schema({
    name:String,
    branch:String
})

module.exports = mongoose.model("engineers",schema)