
// dependencies
var express = require('express');
var routes = require('./controllers/controller.js');
var app = express();
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');

// Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//use body-parser
app.use(bodyParser.urlencoded({
  extended: false
}));

// make public a static dir
app.use(express.static('public'));

//use home route
app.use('/', routes);

// listen on port 8080
app.listen(process.env.PORT || 8080,function(){
  process.env.PORT == undefined? console.log("Try port 8080"):console.log("App listening on PORT" + process.env.PORT);
});
