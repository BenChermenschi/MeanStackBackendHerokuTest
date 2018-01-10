const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var mongooseUniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

var parttypeSchema = new Schema({
    name:{type:String,type:String,required:true,unique:true}
});

parttypeSchema.plugin(mongooseUniqueValidator);
//exporting botscheme
const parttypes = module.exports = mongoose.model("Parttype",parttypeSchema);

module.exports.getParttypes = function (callback) {
    console.log('grabbing all parttypes');
    parttypes.find({},callback);
}

module.exports.getParttypesById = function (id,callback) {
    console.log('searching Parttype by id : ' + id);
    parttypes.find({_id: {$in: id}},callback);
}
/*
module.exports.save = function (parttype,callback) {
    console.log('WARNING ILLEGAL HANDLING : CREATING PARTTYPE!');
    parttype.save(callback);

}*/