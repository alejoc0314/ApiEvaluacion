const { Router } = require('express');

const route = Router();

const { roboGet, roboGetOne, roboPost, roboPut, roboDelete } = require('../controllers/roboController.js');

route.get('/', roboGet);

route.get('/getOne', roboGetOne);

route.post('/', roboPost);

route.put('/:_id', roboPut);

route.delete('/', roboDelete);


module.exports = route;