var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var watson = require('watson-developer-cloud');
var request=require('request');
var utf8 = require('utf8');

app.get('/marathi', function(req, res){
  res.sendFile(__dirname + '/index_marathi.html');
});

app.get('/hindi', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/punjabi', function(req, res){
  res.sendFile(__dirname + '/index_punjabi.html');
});

app.get('/kannada', function(req, res){
  res.sendFile(__dirname + '/index_kannada.html');
});

app.get('/bengali', function(req, res){
  res.sendFile(__dirname + '/index_bengali.html');
});

app.get('/gujrati', function(req, res){
  res.sendFile(__dirname + '/index_gujrati.html');
});

app.get('/malyalam', function(req, res){
  res.sendFile(__dirname + '/index_malyalam.html');
});

app.get('/telgu', function(req, res){
  res.sendFile(__dirname + '/index_telgu.html');
});

app.get('/urdu', function(req, res){
  res.sendFile(__dirname + '/index_urdu.html');
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/languages.html');
});

app.get('/india.jpg', function(req, res){
  res.sendFile(__dirname + '/india.jpg');
});



io.on('connection', function(socket){
  console.log('a user connected');
  // socket.on('disconnect', function(){
  //   console.log('user disconnected');
  });
// });

// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     console.log('message: ' + msg);
//   });
// });



http.listen(3000, function(){
  console.log('listening on *:3000');
});


var my_text = '';
var text ='';

var conversation = watson.conversation({
	username: '7dca5c07-2bdf-4a2c-bcb7-67c261c7283a',
	password: 'dtqgulYFS2s5',
	version: 'v1',
	version_date: '2016-09-20'
});

var context = {};


 
io.on('connection', function(socket){
			socket.on('chat message', function(msg){
			io.emit('chat message', 'YOU: '+ msg);
			var msg_messenger = msg;
			var my_text = utf8.encode(msg_messenger);
			request(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170209T172140Z.90b27fa540a7ff2e.7bbefbb5272ed6856eb4fb24dac94838b60442df&text=${my_text}&lang=hi-en&format=plain`, function (error, response, body) {
 			if (!error && response.statusCode == 200) {
    		var parsedResponse = JSON.parse(response.body);
    		text = parsedResponse['text'][0];
    	
	    	// ****SENDING MY MESSAGE TO WATSON ****
	    	conversation.message({
			workspace_id: '4382aedb-14c0-409d-947f-a26c31a1615c',
			input:{'text': text},
			context: context }, function(err,response){
			if(err){
				console.log('error:',err);
			} else{

			// ****CONVERTING INCOMING MESSAGE FROM WATSON*****
			var convert_to_hindi = response.output.text[0];
			request(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170209T172140Z.90b27fa540a7ff2e.7bbefbb5272ed6856eb4fb24dac94838b60442df&text=${convert_to_hindi}&lang=hi&format=plain`, function (error, response, body) {
	 		if (!error && response.statusCode == 200) {
	    	var parsedResponse = JSON.parse(response.body);
	    	hindi_converted_text = parsedResponse['text'][0];

	    	// console.log('Watson: ' + hindi_converted_text)

	    	io.emit('chat message','DOMINOZ: ' +hindi_converted_text);
	    	console.log(hindi_converted_text);
	  		context = response.context;


  	}})}})}})})});

  	io.on('connection', function(socket){
	socket.on('chat message marathi', function(msg1){
	
	
	
			io.emit('chat message marathi','YOU : '+ msg1);
			var msg_messenger = msg1;
			var my_text = utf8.encode(msg_messenger);
			request(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170209T172140Z.90b27fa540a7ff2e.7bbefbb5272ed6856eb4fb24dac94838b60442df&text=${my_text}&lang=mr-en&format=plain`, function (error, response, body) {
 			if (!error && response.statusCode == 200) {
    		var parsedResponse = JSON.parse(response.body);
    		text = parsedResponse['text'][0];
    	
	    	// ****SENDING MY MESSAGE TO WATSON ****
	    	conversation.message({
			workspace_id: '4382aedb-14c0-409d-947f-a26c31a1615c',
			input:{'text': text},
			context: context }, function(err,response){
			if(err){
				console.log('error:',err);
			} else{

			// ****CONVERTING INCOMING MESSAGE FROM WATSON*****
			var convert_to_hindi = response.output.text[0];
			request(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170209T172140Z.90b27fa540a7ff2e.7bbefbb5272ed6856eb4fb24dac94838b60442df&text=${convert_to_hindi}&lang=mr&format=plain`, function (error, response, body) {
	 		if (!error && response.statusCode == 200) {
	    	var parsedResponse = JSON.parse(response.body);
	    	hindi_converted_text = parsedResponse['text'][0];

	    	// console.log('Watson: ' + hindi_converted_text)

	    	io.emit('chat message marathi', 'DOMINOZ : '+ hindi_converted_text);
	    	console.log(hindi_converted_text);
	  		context = response.context;


  	}})}})}})})});


  	io.on('connection', function(socket){
	socket.on('chat message punjabi', function(msg1){
	console.log('True punjabi');
	
	
			io.emit('chat message punjabi', msg1);
			var msg_messenger = msg1;
			var my_text = utf8.encode(msg_messenger);
			request(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170209T172140Z.90b27fa540a7ff2e.7bbefbb5272ed6856eb4fb24dac94838b60442df&text=${my_text}&lang=pa-en&format=plain`, function (error, response, body) {
 			if (!error && response.statusCode == 200) {
    		var parsedResponse = JSON.parse(response.body);
    		text = parsedResponse['text'][0];
    	
	    	// ****SENDING MY MESSAGE TO WATSON ****
	    	conversation.message({
			workspace_id: '4382aedb-14c0-409d-947f-a26c31a1615c',
			input:{'text': text},
			context: context }, function(err,response){
			if(err){
				console.log('error:',err);
			} else{

			// ****CONVERTING INCOMING MESSAGE FROM WATSON*****
			var convert_to_hindi = response.output.text[0];
			request(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170209T172140Z.90b27fa540a7ff2e.7bbefbb5272ed6856eb4fb24dac94838b60442df&text=${convert_to_hindi}&lang=pa&format=plain`, function (error, response, body) {
	 		if (!error && response.statusCode == 200) {
	    	var parsedResponse = JSON.parse(response.body);
	    	hindi_converted_text = parsedResponse['text'][0];

	    	// console.log('Watson: ' + hindi_converted_text)

	    	io.emit('chat message punjabi', hindi_converted_text);
	    	console.log(hindi_converted_text);
	  		context = response.context;


  	}})}})}})})});	

  	io.on('connection', function(socket){
	socket.on('chat message kannada', function(msg1){
	console.log('True kannada');
	
	
			io.emit('chat message kannada', msg1);
			var msg_messenger = msg1;
			var my_text = utf8.encode(msg_messenger);
			request(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170209T172140Z.90b27fa540a7ff2e.7bbefbb5272ed6856eb4fb24dac94838b60442df&text=${my_text}&lang=kn-en&format=plain`, function (error, response, body) {
 			if (!error && response.statusCode == 200) {
    		var parsedResponse = JSON.parse(response.body);
    		text = parsedResponse['text'][0];
    	
	    	// ****SENDING MY MESSAGE TO WATSON ****
	    	conversation.message({
			workspace_id: '4382aedb-14c0-409d-947f-a26c31a1615c',
			input:{'text': text},
			context: context }, function(err,response){
			if(err){
				console.log('error:',err);
			} else{

			// ****CONVERTING INCOMING MESSAGE FROM WATSON*****
			var convert_to_hindi = response.output.text[0];
			request(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170209T172140Z.90b27fa540a7ff2e.7bbefbb5272ed6856eb4fb24dac94838b60442df&text=${convert_to_hindi}&lang=kn&format=plain`, function (error, response, body) {
	 		if (!error && response.statusCode == 200) {
	    	var parsedResponse = JSON.parse(response.body);
	    	hindi_converted_text = parsedResponse['text'][0];

	    	// console.log('Watson: ' + hindi_converted_text)

	    	io.emit('chat message kannada', hindi_converted_text);
	    	console.log(hindi_converted_text);
	  		context = response.context;


  	}})}})}})})});	  	

  	io.on('connection', function(socket){
	socket.on('chat message bengali', function(msg1){
	console.log('True bengali');
	
	
			io.emit('chat message bengali', msg1);
			var msg_messenger = msg1;
			var my_text = utf8.encode(msg_messenger);
			request(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170209T172140Z.90b27fa540a7ff2e.7bbefbb5272ed6856eb4fb24dac94838b60442df&text=${my_text}&lang=bn-en&format=plain`, function (error, response, body) {
 			if (!error && response.statusCode == 200) {
    		var parsedResponse = JSON.parse(response.body);
    		text = parsedResponse['text'][0];
    	
	    	// ****SENDING MY MESSAGE TO WATSON ****
	    	conversation.message({
			workspace_id: '4382aedb-14c0-409d-947f-a26c31a1615c',
			input:{'text': text},
			context: context }, function(err,response){
			if(err){
				console.log('error:',err);
			} else{

			// ****CONVERTING INCOMING MESSAGE FROM WATSON*****
			var convert_to_hindi = response.output.text[0];
			request(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170209T172140Z.90b27fa540a7ff2e.7bbefbb5272ed6856eb4fb24dac94838b60442df&text=${convert_to_hindi}&lang=bn&format=plain`, function (error, response, body) {
	 		if (!error && response.statusCode == 200) {
	    	var parsedResponse = JSON.parse(response.body);
	    	hindi_converted_text = parsedResponse['text'][0];

	    	// console.log('Watson: ' + hindi_converted_text)

	    	io.emit('chat message bengali', hindi_converted_text);
	    	console.log(hindi_converted_text);
	  		context = response.context;


  	}})}})}})})});	    	

  	io.on('connection', function(socket){
	socket.on('chat message gujrati', function(msg1){
	console.log('True gujrati');
	
	
			io.emit('chat message gujrati', msg1);
			var msg_messenger = msg1;
			var my_text = utf8.encode(msg_messenger);
			request(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170209T172140Z.90b27fa540a7ff2e.7bbefbb5272ed6856eb4fb24dac94838b60442df&text=${my_text}&lang=gu-en&format=plain`, function (error, response, body) {
 			if (!error && response.statusCode == 200) {
    		var parsedResponse = JSON.parse(response.body);
    		text = parsedResponse['text'][0];
    	
	    	// ****SENDING MY MESSAGE TO WATSON ****
	    	conversation.message({
			workspace_id: '4382aedb-14c0-409d-947f-a26c31a1615c',
			input:{'text': text},
			context: context }, function(err,response){
			if(err){
				console.log('error:',err);
			} else{

			// ****CONVERTING INCOMING MESSAGE FROM WATSON*****
			var convert_to_hindi = response.output.text[0];
			request(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170209T172140Z.90b27fa540a7ff2e.7bbefbb5272ed6856eb4fb24dac94838b60442df&text=${convert_to_hindi}&lang=gu&format=plain`, function (error, response, body) {
	 		if (!error && response.statusCode == 200) {
	    	var parsedResponse = JSON.parse(response.body);
	    	hindi_converted_text = parsedResponse['text'][0];

	    	// console.log('Watson: ' + hindi_converted_text)

	    	io.emit('chat message gujrati', hindi_converted_text);
	    	console.log(hindi_converted_text);
	  		context = response.context;


  	}})}})}})})});	    

  	io.on('connection', function(socket){
	socket.on('chat message malyalam', function(msg1){
	console.log('True malyalam');
	
	
			io.emit('chat message malyalam', msg1);
			var msg_messenger = msg1;
			var my_text = utf8.encode(msg_messenger);
			request(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170209T172140Z.90b27fa540a7ff2e.7bbefbb5272ed6856eb4fb24dac94838b60442df&text=${my_text}&lang=ml-en&format=plain`, function (error, response, body) {
 			if (!error && response.statusCode == 200) {
    		var parsedResponse = JSON.parse(response.body);
    		text = parsedResponse['text'][0];
    	
	    	// ****SENDING MY MESSAGE TO WATSON ****
	    	conversation.message({
			workspace_id: '4382aedb-14c0-409d-947f-a26c31a1615c',
			input:{'text': text},
			context: context }, function(err,response){
			if(err){
				console.log('error:',err);
			} else{

			// ****CONVERTING INCOMING MESSAGE FROM WATSON*****
			var convert_to_hindi = response.output.text[0];
			request(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170209T172140Z.90b27fa540a7ff2e.7bbefbb5272ed6856eb4fb24dac94838b60442df&text=${convert_to_hindi}&lang=ml&format=plain`, function (error, response, body) {
	 		if (!error && response.statusCode == 200) {
	    	var parsedResponse = JSON.parse(response.body);
	    	hindi_converted_text = parsedResponse['text'][0];

	    	// console.log('Watson: ' + hindi_converted_text)

	    	io.emit('chat message malyalam', hindi_converted_text);
	    	console.log(hindi_converted_text);
	  		context = response.context;


  	}})}})}})})});	    

  	io.on('connection', function(socket){
	socket.on('chat message telgu', function(msg1){
	console.log('True telgu');
	
	
			io.emit('chat message telgu', msg1);
			var msg_messenger = msg1;
			var my_text = utf8.encode(msg_messenger);
			request(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170209T172140Z.90b27fa540a7ff2e.7bbefbb5272ed6856eb4fb24dac94838b60442df&text=${my_text}&lang=te-en&format=plain`, function (error, response, body) {
 			if (!error && response.statusCode == 200) {
    		var parsedResponse = JSON.parse(response.body);
    		text = parsedResponse['text'][0];
    	
	    	// ****SENDING MY MESSAGE TO WATSON ****
	    	conversation.message({
			workspace_id: '4382aedb-14c0-409d-947f-a26c31a1615c',
			input:{'text': text},
			context: context }, function(err,response){
			if(err){
				console.log('error:',err);
			} else{

			// ****CONVERTING INCOMING MESSAGE FROM WATSON*****
			var convert_to_hindi = response.output.text[0];
			request(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170209T172140Z.90b27fa540a7ff2e.7bbefbb5272ed6856eb4fb24dac94838b60442df&text=${convert_to_hindi}&lang=te&format=plain`, function (error, response, body) {
	 		if (!error && response.statusCode == 200) {
	    	var parsedResponse = JSON.parse(response.body);
	    	hindi_converted_text = parsedResponse['text'][0];

	    	// console.log('Watson: ' + hindi_converted_text)

	    	io.emit('chat message telgu', hindi_converted_text);
	    	console.log(hindi_converted_text);
	  		context = response.context;


  	}})}})}})})});	    

  	io.on('connection', function(socket){
	socket.on('chat message urdu', function(msg1){
	console.log('True urdu');
	
	
			io.emit('chat message urdu', msg1);
			var msg_messenger = msg1;
			var my_text = utf8.encode(msg_messenger);
			request(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170209T172140Z.90b27fa540a7ff2e.7bbefbb5272ed6856eb4fb24dac94838b60442df&text=${my_text}&lang=ur-en&format=plain`, function (error, response, body) {
 			if (!error && response.statusCode == 200) {
    		var parsedResponse = JSON.parse(response.body);
    		text = parsedResponse['text'][0];
    	
	    	// ****SENDING MY MESSAGE TO WATSON ****
	    	conversation.message({
			workspace_id: '4382aedb-14c0-409d-947f-a26c31a1615c',
			input:{'text': text},
			context: context }, function(err,response){
			if(err){
				console.log('error:',err);
			} else{

			// ****CONVERTING INCOMING MESSAGE FROM WATSON*****
			var convert_to_hindi = response.output.text[0];
			request(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170209T172140Z.90b27fa540a7ff2e.7bbefbb5272ed6856eb4fb24dac94838b60442df&text=${convert_to_hindi}&lang=ur&format=plain`, function (error, response, body) {
	 		if (!error && response.statusCode == 200) {
	    	var parsedResponse = JSON.parse(response.body);
	    	hindi_converted_text = parsedResponse['text'][0];

	    	// console.log('Watson: ' + hindi_converted_text)

	    	io.emit('chat message urdu', hindi_converted_text);
	    	console.log(hindi_converted_text);
	  		context = response.context;


  	}})}})}})})});	      	  	  	  	



			
    
    
    

	

	
    	
    	
		// return hindi_converted_text;
		// excuse.get();


		



	