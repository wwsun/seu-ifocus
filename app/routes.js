var express = require('express');
var router = express.Router();

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	router.get('/', function(req, res) {
		res.sendfile('./public/index.html');
	});

    app.use('/', router);

};