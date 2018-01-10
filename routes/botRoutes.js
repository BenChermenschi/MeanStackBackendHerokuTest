const express= require('express');
const botRouter = express.Router();

botController = require('../controllers/botController');

//LOOK AT/ search for
botRouter.get('/',botController.getAllBots);
botRouter.get('/name/:name',botController.getBotAtBotName);
botRouter.get('/:id',botController.getBotAtId);
botRouter.get('/creator/:creator',botController.getBotAtCreator);

//create
botRouter.put('/',botController.putBot);

//update
botRouter.post('/:id',botController.postUpdateBotAtId);

//delete
botRouter.delete('/:id',botController.deleteBotAtId);





module.exports = botRouter;