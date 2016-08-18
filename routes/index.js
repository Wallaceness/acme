var express=require('express');
var router=express.Router();
var models=require('../product.model.js')

router.get('/', function(request, response, next){
	response.render('index');
})

router.get('/products', function(request, response){
	response.render('products', {
		templateProducts: models.getProducts()
	});
})

router.get('/products/add', function(request, response){
	response.render('add');
})

router.post('/products/add', function(request, response){
	var name=request.body.name;
	name={name:name};
	console.log(name);
	models.addProduct(name);
	response.redirect('/products')
})

module.exports=router;