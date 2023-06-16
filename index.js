require('dotenv').config();

const {Server} = require ('./models/server');

const {dbConnection} = require('./database/config');

const server = new Server();

server.listen();