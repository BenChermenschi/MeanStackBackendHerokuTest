var mongoose = require('mongoose');
var parttype = mongoose.model('Parttype');


//GET : all parttypes
exports.getAllParttypes = function(req,res,next){
    //grab all partypes
    parttype.find().exec(function (err,parttypes){
        //on fail
        if (err){
            return res.status(500).json({
                title:'Error occured',
                error:err
            });
        }
        //on success
        res.status(200).json({
            message: 'Success',
            obj: parttypes
        });
    });
}

//GET : parttype by name
exports.getParttypeAtParttypeName = function (req,res) {
    parttype.find({name:req.params.name}).exec(function (err,parttype) {
        //on fail
        if(err){
            return res.status(500).json({
                title:'Error occured',
                error:err
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: parttype
        }) ;
    });

}
/*
//WARNING ILLEGAL METHOD!!!!
//PUT : adding new parttype: ONLY FOR LATER VERSIONS
exports.putParttype = function (req,res) {
    var type = new parttype({
        name:'LEGS'
    });
    type.save();
}
*/

