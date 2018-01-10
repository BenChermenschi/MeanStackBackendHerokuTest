const express= require('express');
const parttypeRouter = express.Router();

parttypeController = require('../controllers/parttypeController');

//LOOK AT/ search for
parttypeRouter.get('/all',parttypeController.getAllParttypes);
parttypeRouter.get('/name/:name',parttypeController.getParttypeAtParttypeName);
//botRouter.get('/id/:id',botController.getBotAtId);

/*
//create
parttypeRouter.put('/add',parttypeController.putParttype);

//update
botRouter.put('/modify/:id',botController.putModifyBotAtId);

//delete
botRouter.delete('/scrap/:id',botController.deleteBotAtId);

*/



module.exports = parttypeRouter;