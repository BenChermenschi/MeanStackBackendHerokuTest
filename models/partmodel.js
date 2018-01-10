const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var mongooseUniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

var partSchema = new Schema({
    partname:{type:String,required:true,unique:true},
    manufacturer:{type:Schema.Types.ObjectId, ref:'Manufacturer'},
    type:{type:String,required:true,unique:false,enum:["HEAD","ARM-R","ARM-L","BODY","LEGS"]},
    stats:{
        armorRating:{type:Number,required:true},
        damageRating:{type:Number,required:true}
    },
    description:{type:String,required:true},
    set:{type:String,required:false}
});

partSchema.plugin(mongooseUniqueValidator);
//exporting botscheme
const parts = module.exports = mongoose.model("Part",partSchema);

module.exports.getParts = function (callback) {
    console.log('cataloging all parts' + id);
    parts.find({},callback)
}

module.exports.getPartById = function (id,callback) {
    console.log('grabbing part at id :' + id);
    parts.find({_id: {$in: id}})
        .populate('manufacturer');
}

module.exports.save = function(part,callback){
    console.log('sending to db : ');
    console.log(part);

    part.save(callback);
}

