const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+file.originalname)
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

const upload = multer({
  storage,
  fileFilter,
});

const server = express();
const port = 3000;

// cors, makes it work in development locally
server.use(cors());

// body parser middleware
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// routes
server.get('/', (req, res) => res.send('Hello World!'));
server.post('/upload', upload.single('file'), async (req, res, next) => {
  if (req.file) {
    const pathName = req.file.path;
    res.sendStatus(200);
  }
});
server.use('/', routes);

server.listen(port, () =>
  console.log(`Express server is running on port: ${port}...`)
);
