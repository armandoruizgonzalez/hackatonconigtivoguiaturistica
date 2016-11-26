// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();


// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 8080; // set our port



// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'HOLA BIENVENIDO A LA API DE SITIOS!' });	
});

//test entrega todos los sitios  (accessed at GET http://localhost:8080/api/sitios/)
router.get('/sitios', function(req, res) {
	res.json(
			{ 
				"arrayTipos":[
				{
					nombre: 'POLLERIAR',
					direccion:'',
					telefono:'',
					imagenurl:'',
					descripcion: '',
					id: '1',
					tipo :'card'
				},
				{
					nombre: 'PIZZERIAS',
					direccion:'',
					telefono:'',
					imagenurl:'',
					descripcion: '',
					id: '2',
					tipo :'card'
				},
				{
					nombre: 'BARES',
					direccion:'',
					telefono:'',
					imagenurl:'',
					descripcion: '',
					id: '3',
					tipo :'card'
				},
				{
					nombre: 'RESTAURANTES',
					direccion:'',
					telefono:'',
					imagenurl:'',
					descripcion: '',
					id: '4',
					tipo :'card'
				}]
			});	
});


//test entrega todos los sitios especificos de un tipo (accessed at GET http://localhost:8080/api/sitiosportipo/1)
router.get('/sitiosportipo/:tipo_id', function(req, res) {
	if(req.params.tipo_id === '1'){//pollerias
		res.json({ 
			"arrayTipos":[
				{
					nombre: 'KOKORICO',
					direccion:'cll 2b sur',
					telefono:'321 556 98',
					imagenurl:'http://ccbuenavistamonteria.com/wp-content/uploads/2014/10/logo-kokoriko.jpg',
					descripcion: 'EL mejor pollo de la ciudad',
					tipo :'card',
					id: '1',
				},
				{
					nombre: 'FRISBY',
					direccion:'Cr 21',
					telefono:'321 ewew 98',
					imagenurl:'https://frisby.com.co/assets/frisby-f44bdf48768f89035cbad379ff178cfa.png',
					descripcion: 'El pollo frito',
					tipo :'card',
					id: '2',
				}]
			});
	}
	
	if(req.params.tipo_id === '2'){//pizerias
		res.json({ 
			"arrayTipos":[
				{
					nombre: 'PICCOLO',
					direccion:'CR 2b sur',
					telefono:'321 POB 98',
					imagenurl:'http://www.pizzaspiccolo.com.co/wp-content/uploads/2016/04/Logo.png',
					descripcion: 'La pizza de tus sueños',
					tipo :'card',
					id: '1',
				},
				{
					nombre: 'PIZZA DOBLE PIZZA',
					direccion:'CR 21',
					telefono:'321 LAURES 98',
					imagenurl:'http://www.doblepizza.com/pizza_cupones_domicilios/img/logo.png',
					descripcion: 'somos la mejor',
					tipo :'card',
					id: '2',
				}]
			});
	}
	
});

//test entrega todos los sitios especificos de un tipo (accessed at GET http://localhost:8080/api/sitiosespecifico/1/1)
router.get('/sitiosespecifico/:tipo_id/:prod_id', function(req, res) {
	if(req.params.tipo_id === '1' && req.params.prod_id === '1'){//pollerias
		res.json({ 
			"arrayTipos":[
				{
					nombre: 'KOKORICO',
					direccion:'cll 2b sur',
					telefono:'321 556 98',
					imagenurl:'http://ccbuenavistamonteria.com/wp-content/uploads/2014/10/logo-kokoriko.jpg',
					descripcion: 'EL mejor pollo de la ciudad',
					tipo :'card',
					id: '1'
				},
				]
			});
	}
	if(req.params.tipo_id === '1' && req.params.prod_id === '2'){//pollerias
		res.json({ 
			"arrayTipos":[
				{
					nombre: 'FRISBY',
					direccion:'Cr 21',
					telefono:'321 ewew 98',
					imagenurl:'https://frisby.com.co/assets/frisby-f44bdf48768f89035cbad379ff178cfa.png',
					descripcion: 'El pollo frito',
					tipo :'card',
					id: '2',
				},
				]
			});
	}
	
	if(req.params.tipo_id === '2' && req.params.prod_id === '1'){//pollerias
		res.json({ 
			"arrayTipos":[
				{
					nombre: 'PICCOLO',
					direccion:'CR 2b sur',
					telefono:'321 POB 98',
					imagenurl:'http://www.pizzaspiccolo.com.co/wp-content/uploads/2016/04/Logo.png',
					descripcion: 'La pizza de tus sueños',
					tipo :'card',
					id: '1',
				},
				]
			});
	}
	
	if(req.params.tipo_id === '2' && req.params.prod_id === '2'){//pollerias
		res.json({ 
			"arrayTipos":[
				{
					nombre: 'PIZZA DOBLE PIZZA',
					direccion:'CR 21',
					telefono:'321 LAURES 98',
					imagenurl:'http://www.doblepizza.com/pizza_cupones_domicilios/img/logo.png',
					descripcion: 'somos la mejor',
					tipo :'card',
					id: '2'
				},
				]
			});
	}
	//res.json({ message: 'MANDE UN LUGAR ESPECIFICO ' + req.params.tipo_id });	
});

// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
