module.exports = function Route(app){
	app.get('/', function(req, res){
		res.render('index', {title: 'Survey Form'});
	});
	app.io.route('posting_form', function(req) {
		console.log(req.data.value);
		var message = 'You emitted the following information to the server: </br>'+
					  'Name: '+req.data.name+'</br>'+
					  'Location: '+req.data.location+'</br>'+
					  'Language: '+req.data.language+'</br>'+
					  'Comments: '+req.data.comment;
		console.log(message);
		req.io.emit('updated_message', message);
	});
}
