var bodyparser=require('body-parser')
var routes=require('./routes')
var swig = require('swig');
swig.setDefaults({ cache: false });
var express = require('express');
var app = express();

app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use(bodyparser.urlencoded());
app.use(bodyparser.json());

app.use(express.static(__dirname));

app.use(function(request, response, next){
	console.log("New request!!!!");
	console.log(request.method);
	console.log(request.path);
	next();
});

app.use('/', routes);

app.listen(3000, function(){
  console.log('listening on ' + 3000);
});

