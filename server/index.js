const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

const server = express();
const port = 3000;

// cors, makes it work in development locally
server.use(cors());

// body parser middleware
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// routes
server.get('/', (req, res) => res.send('Hello World!'));
server.use('/', routes);

server.listen(port, () =>
  console.log(`Express server is running on port: ${port}...`)
);
