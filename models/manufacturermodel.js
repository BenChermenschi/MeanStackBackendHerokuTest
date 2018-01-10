const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var mongooseUniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

var manufacturerSchema = new Schema({
    "name":{type:String,type:String,required:true,unique:true},
    "description":{type:String,type:String,required:true,unique:true},
    "prefix":{type:String,type:String,required:true,unique:true}
    //,"parts":[{type:mongoose.Schema.Types.ObjectId,ref:'Part'}]
});

manufacturerSchema.plugin(mongooseUniqueValidator);
//exporting botscheme
const manufacturers = module.exports = mongoose.model("Manufacturer",manufacturerSchema);

module.exports.getManufacturers = function (callback) {
    console.log('searching all Manufacturers');
    manufacturers.find({},callback);
}

module.exports.getManufacturersById = function (id,callback) {
    console.log('grabbing manufacturer by id : ' + id);
    manufacturers.find({_id: {$in: id}},callback);
}

module.exports.save = function(manufacturer,callback){
    console.log('manufacturermodel :  adding a new manufacturer to the db ');
    manufacturer.save(callback);
}

