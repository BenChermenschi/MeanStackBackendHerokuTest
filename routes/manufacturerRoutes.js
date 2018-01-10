const express= require('express');
const manufacturerRouter = express.Router();

manufacturerController = require('../controllers/manufacturerController');

//LOOK AT/ search for
manufacturerRouter.get('/',manufacturerController.getAllManufacturers);
manufacturerRouter.get('/all',manufacturerController.getAllManufacturers);
manufacturerRouter.get('/name/:name',manufacturerController.getManufacturerAtmanufacturerName);
manufacturerRouter.get('/:id',manufacturerController.getManufacturerAtId);
manufacturerRouter.get('/prefix/:prefix',manufacturerController.getManufacturerAtPrefix);

//create
manufacturerRouter.put('/',manufacturerController.putManufacturer);

//update
manufacturerRouter.post('/:id',manufacturerController.postUpdateManufacturerAtId);

//delete
manufacturerRouter.delete('/:id',manufacturerController.deleteManufacturerAtId);





module.exports = manufacturerRouter;