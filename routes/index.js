module.exports = function Route(app){
	app.get('/', function(req, res){
		res.render('index', {title: 'Survey Form'});
	});
	app.io.route('posting_form', function(req) {
		var message = 'You emitted the following information to the server: </br>'+
					  'Name: '+req.data.name+'</br>'+
					  'Location: '+req.data.location+'</br>'+
					  'Language: '+req.data.language+'</br>'+
					  'Comments: '+req.data.comment+'</br></br>';
		req.io.emit('updated_message', message);
		var rand = Math.floor(Math.random()*1000)+1;
		var rand_message = 'Your lucky number emitted by the server is: '+rand;
		req.io.emit('random_number', rand_message);
	});
}
