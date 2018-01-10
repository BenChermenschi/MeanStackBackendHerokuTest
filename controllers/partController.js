var mongoose = require('mongoose');
var Part = mongoose.model('Part');
var Parttype = mongoose.model('Parttype');
var Manufacturer = mongoose.model('Manufacturer');



//GET : all parts
exports.getAllParts = function(req,res,next){
    //grab all Parts
    Part.find().populate('manufacturer').exec(function (err,Parts){

        //on fail
        if (err){
            console.log(err)
            return res.status(500).json({
                title:'Error occured',
                error:err
            });
        }else {
            //on success
            console.log(Parts);
            res.status(200).json({
                message: 'Success',
                obj: Parts
            });
        }



    });
}

//GET : Part by Partname
exports.getPartAtPartName = function (req,res) {
    Part.find({partname:req.params.partname}).populate('manufacturer').exec(function (err,Part) {
        //on fail
        if(err){
            return res.status(500).json({
                title:'Error occured',
                error:err
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: Part
        }) ;
    });

}

//GET : Part by id
exports.getPartAtId= function (req,res) {
    console.log("searching parts for _id : ");
    console.log(req.params.id);
    Part.find({_id:req.params.id}).populate('manufacturer').exec(function (err,Part) {
        //on fail
        if(err){
            return res.status(500).json({
                title:'Error occured',
                error:err
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: Part
        }) ;
    });

}

//GET : Part by manufacturer
exports.getPartAtManufacturer = function (req,res) {
    Part.find({manufacturer:req.params.manufacturer}).populate('manufacturer').exec(function (err,Part) {
        //on fail
        if(err){
            return res.status(500).json({
                title:'Error occured',
                error:err
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: Part
        }) ;
    });
}

exports.putPart = function (req,res) {
    //save

    var onderdeel = new Part({
        'manufacturer':req.body.manufacturer,
        'partname':req.body.partname,
        'type':req.body.type,
        'stats':{
        'armorRating':req.body.stats.armorRating,
        'damageRating':req.body.stats.damageRating
        },
        'description':req.body.description,
        'set':req.body.set
    });
    console.log("onderdeel gemaakt");
    console.log(onderdeel);
    onderdeel.save(function (err,part) {
        if(err){
            console.log(err);
            res.send(err);
        }else{
            res.json(part);
        }
    });

}

//delete : delete part
exports.deletePartAtId=function (req,res) {
    console.log("remove request part arrived");
    Part.remove({_id:req.params.id},function (err,onderdeel) {
        console.log("request : ");
        console.log(req.params.id);
        if (err){
            console.log(err);
            res.send(err);}
        else {
            console.log("request fulfilled");
            res.json({message:'Request fulfilled : item removed'});
        }
    })
}

//post : update
exports.postUpdatePartAtId = function(req,res){
    Part.findOneAndUpdate({_id:req.params.id},req.body,{new:true},function(err,onderdeel)  {
        if(err){
            console.log(err);
            res.status(500).send({message:"could not find manufacturer at id : " + req.params.id});
        }else{
            console.log("updating part : ");
            console.log(onderdeel);
            res.json(onderdeel);
        }

    })
}
