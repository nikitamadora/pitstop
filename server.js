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

// app.get('/', (req, res) => {
//      res.sendFile('/views/index.html', {
//           root: __dirname + '/./'
//      });
// });

//-----------------------
//       Middleware
//-----------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//-----------------------
//     Views Routes
//-----------------------
// TODO Reactivate when we have stubbed out our routes/index.js AND our routes/views.js
app.use('/', routes.views);

//-----------------------
//      API Routes
//-----------------------
// TODO Reactivate when we have our routes/index.js AND routes/api.js
// app.use('/api/v1', routes.api);

//-----------------------
//      Start Server
//-----------------------
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));