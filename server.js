const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4200;

//-----------------------
//       Database
//-----------------------
const db = require('./models');

//-----------------------
//     Setup Routes
//-----------------------
const routes = require('./routes');

//-----------------------
//       Middleware
//-----------------------
app.use(bodyParser.json()); // parse JSON body from request
app.use(bodyParser.urlencoded({ extended: true })); // TODO say why you use this, read the doc

// app.use("/styles", express.static(__dirname + '/public'));
app.use(express.static('public'));

//-----------------------
//     Views Routes
//-----------------------
app.use('/', routes.views);

//-----------------------
//      API Routes
//-----------------------
app.use('/api/v1', routes.api);

//-----------------------
//      Start Server
//-----------------------
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));