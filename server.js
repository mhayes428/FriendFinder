const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const htmlRoute = require('./app/routing/htmlRoutes.js');
const apiRoutes = require('./app/routing/apiRoutes.js');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static(path.join(__dirname, 'app/public')));

htmlRoute(app);
apiRoutes(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });