var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes');
var port = process.env.PORT ||8080;
var app = express();
var fileServer = express.static('public');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(fileServer);

console.log(routes);
routes(app);

app.listen(port, function(){
    console.log(port);
});

