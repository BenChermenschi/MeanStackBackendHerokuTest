/*var express = require('express');
var router = express.Router();



var botRouter = require('./routes/botRoutes');
var partRouter = require('./routes/partRoutes');
var manufacturerRouter = require('./routes/manufacturerRoutes');
var parttypeRouter = require('./routes/parttypeRoutes');
var userRouter = require('./routes/userRoutes');

//teach the router the routes to use
router.use('/bot',botRouter);
//router.use('/part',partRouter);
//router.use('/manufacturer',manufacturerRouter);
//router.use('/parttype',parttypeRouter);
//router.use('/user',userRouter); // optional if there is time



module.exports = router;*/


//importing models
const Bot = require('./models/botmodel');
const Part = require('./models/partmodel');
const Parttype = require('./models/parttypemodel');
const Manufacturer = require('./models/manufacturermodel');

module.exports = function (app) {
    const routerprefix = '/api';

    const botRouter = require('./routes/botRoutes');
    const partRouter = require('./routes/partRoutes');
    const manufacturerRouter = require('./routes/manufacturerRoutes');
    const parttypeRouter = require('./routes/parttypeRoutes');
    //const userRouter = require('./routes/userRoutes');

    app.use( routerprefix+ '/bot',botRouter);
    app.use(routerprefix+'/part',partRouter);
    app.use(routerprefix+'/manufacturer',manufacturerRouter);
    app.use(routerprefix+'/parttype',parttypeRouter);
    //app.use(routerprefix+'/user')
    //TODO zien dat uw routes werken met id verwijzingen naar objecten,
    //TODO zien dat je data kunt uitlezen
    //TODO zien dat je data kunt wegschrijven
    //TODO zien dat je data kunt wijzigen
    //TODO zien dat je data kunt verwijderen
    //TODO frontend daarna schrijven

}

