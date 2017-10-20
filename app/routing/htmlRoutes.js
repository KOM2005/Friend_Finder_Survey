var path = require('path');
module.exports = function(app) {

	app.get('/', function(req, res) {
		// res.sendFile(path.join(__dirname, 'home.html'));
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

	app.get('/survey', function(req,res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
		// res.sendFile('survey.html', { root: './app/public' });
	})

	app.get('/logic.js', function(req,res) {

		res.sendFile('logic.js', { root: './' });
	})
};

