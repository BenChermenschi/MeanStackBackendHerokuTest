const express= require('express');
const partRouter = express.Router();

partController = require('../controllers/partController');

//LOOK AT/ search for
partRouter.get('/',partController.getAllParts);
partRouter.get('/all',partController.getAllParts);
partRouter.get('/name/:partname',partController.getPartAtPartName);
partRouter.get('/id/:id',partController.getPartAtId);
partRouter.get('/manufacturer/:manufacturer',partController.getPartAtManufacturer);

//create
partRouter.put('/add',partController.putPart);

//update
partRouter.post('/:id',partController.postUpdatePartAtId);

//delete
partRouter.delete('/:id',partController.deletePartAtId);





module.exports = partRouter;