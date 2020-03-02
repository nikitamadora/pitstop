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
// TODO Reactivate after routes/index.js file is completed
const routes = require('./routes');

//-----------------------
//       Middleware
//-----------------------
app.use(bodyParser.json()); // parse JSON body from request
app.use(bodyParser.urlencoded({ extended: true })); // TODO say why you use this, read the doc

//-----------------------
//     Views Routes
//-----------------------
// TODO Reactivate when we have stubbed out our routes/index.js AND our routes/views.js
app.use('/', routes.views);

//-----------------------
//      API Routes
//-----------------------
// TODO Reactivate when we have our routes/index.js AND routes/api.js
 app.use('/api/v1', routes.api); // Mount our route APIs under /api/v1

//-----------------------
//      Start Server
//-----------------------
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));