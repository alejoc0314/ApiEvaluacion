const express = require('express');
const { dbConnection } = require('../database/config');
const bodyParser = require('body-parser');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors({
      origin: 'http://localhost:8081'
    }))
    this.port = process.env.PORT;
    this.roboPath = '/api/robo';
    this.routes();
    this.middlewares();
    this.conectarDB();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('listening on port ' + this.port);
    });
  }

  middlewares() {
    this.app.use(express.static(__dirname + '/public'));
  }

  routes() {
    this.app.use(this.roboPath, require('../routes/robosRoutes.js'));
  }

  conectarDB() {
    dbConnection();
  }
}

module.exports = { Server };