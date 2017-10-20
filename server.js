const bodyParser = require('body-parser');
const express = require('express');
const path = require("path");
const app = express();
const PORT = 8080;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})
