const express = require('express');
require('dotenv').config();
var cors = require('cors')
const userRouter = require('./routes/user');
const coreRouter = require('./routes/core');
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/api/v1', userRouter);
app.use('/api/v1', coreRouter);
app.get('/', (req, res) => {
  res.redirect('/api/v1');
});
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

const options = { customCssUrl: 'https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.1/themes/3.x/theme-flattop.min.css', };

app.use('/api/v1/docs', function (req, res, next) {
  swaggerDocument.host = req.get('host');
  req.swaggerDoc = swaggerDocument;
  next();
}, swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

const PORT = process.env.HTTP_PORT || 3000;
var listener = app.listen(PORT, () => {
  console.log(listener.address().port + ' port is listening');
});

module.exports = app