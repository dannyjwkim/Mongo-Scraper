var express = require('express');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');
var mongoose = require('mongoose');
var methodOverride = require('method-override')

var app = express();
var PORT = process.env.PORT || 8080;

var routes = require('./controllers/controller.js');


// Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Use body-parser
app.use(bodyParser.urlencoded({
  extended: false
}));

// Access the public folder files statically
app.use(express.static('public'));

// Database configuration with mongoose
// mongoose.connect('mongodb://localhost/mongoscraper');
// Need heroku deploy link
mongoose.connect('mongodb://heroku_x3qb2xqr:9g9fjl4r9m2gpea5uujnfseg2u@ds023912.mlab.com:23912/heroku_x3qb2xqr');
var db = mongoose.connection;

// Show any mongoose errors
db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

// Once logged in to the db through mongoose, log a success message
db.once('open', function() {
  console.log('Mongoose connection successful.');
});

// Use home route
app.use('/', routes);

// Listen on port 8080
app.listen(PORT,function(){
  console.log("App listening on PORT: " + PORT);
});
