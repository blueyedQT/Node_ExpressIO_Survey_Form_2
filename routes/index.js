module.exports = function Route(app){
	app.get('/', function(req, res){
		res.render('index', {title: 'Survey Form'});
	});
	app.post('/result', function(req, res){
		var user = {};
		user.name = req.body.name;
		user.location = req.body.location;
		user.language = req.body.language;
		user.comment = req.body.comment;
		user.title = 'Survey Form';
		res.render('result', user);
	});
	app.get('/result', function(req, res){
		res.render('result', {title: 'Survey Form'});
	});
}
