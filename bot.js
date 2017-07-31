var watson = require('watson-developer-cloud');
var request=require('request');
var utf8 = require('utf8');

var express = require('express')
var app = express()
var bodyParser = require('body-parser');

// module.exports = botBuilder(function(message){
// 	console.log('got text',message.text);
// 	console.log('full request', JSON.stringify(message.orignalRequest));

// 	// THE RETURN MESSAGE WE SEND
// 	return 'Thanks for sending' + message.text + '!' +
// 		' Your message is very important to us!';
	
// });

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })

app.use(bodyParser.urlencoded({ extended: true })); 

//app.use(express.bodyParser());

app.post('/myaction', function(req, res) {
  res.send('You sent the name "' + req.query.id + '".');
  console.log(req.body);
});

app.get('/',function(req,res){
	res.sendFile(__dirname+ '/public/index1.html');
});

app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});


// var my_text = 'Hello';
// var text ='';

// var conversation = watson.conversation({
// 	username: '7dca5c07-2bdf-4a2c-bcb7-67c261c7283a',
// 	password: 'dtqgulYFS2s5',
// 	version: 'v1',
// 	version_date: '2016-09-20'
// });

// var context = {};

// function prompt(question,callback){
// 	var stdin = process.stdin,
// 	stdout = process.stdout;

// 	stdin.resume();
// 	stdout.write(question);

// 	stdin.once('data',function(data) {
// 		callback(data.toString().trim());
// 	});
// }

// function convMessage(msg) {

// 	// ***SENT STRING WHICH WILL BE WRITTEN IN HINDI WILL BE TRANSLATED TO ENGLISH BELOW ***
// 	// module.exports = botBuilder(function(message){
// 	// 	console.log('got text',message.text);
// 		// var msg_messenger = message.text;
// 		var msg_messenger = msg
// 		// console.log('full request', JSON.stringify(message.orignalRequest));




// 	var my_text = utf8.encode(msg_messenger);
// 	request(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170209T172140Z.90b27fa540a7ff2e.7bbefbb5272ed6856eb4fb24dac94838b60442df&text=${my_text}&lang=hi-en&format=plain`, function (error, response, body) {
//  	if (!error && response.statusCode == 200) {
//     	var parsedResponse = JSON.parse(response.body);
//     	text = parsedResponse['text'][0];
    	
//     	// ****SENDING MY MESSAGE TO WATSON ****
//     	conversation.message({
// 		workspace_id: '4382aedb-14c0-409d-947f-a26c31a1615c',
// 		input:{'text': text},
// 		context: context }, function(err,response){
// 		if(err){
// 			console.log('error:',err);
// 		} else{

// 		// ****CONVERTING INCOMING MESSAGE FROM WATSON*****
// 		var convert_to_hindi = response.output.text[0];
// 		request(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170209T172140Z.90b27fa540a7ff2e.7bbefbb5272ed6856eb4fb24dac94838b60442df&text=${convert_to_hindi}&lang=hi&format=plain`, function (error, response, body) {
//  		if (!error && response.statusCode == 200) {
//     	var parsedResponse = JSON.parse(response.body);
//     	hindi_converted_text = parsedResponse['text'][0];
    	
    	
// 		// return hindi_converted_text;
// 		// excuse.get();

// 		console.log('Watson: ' + hindi_converted_text)

// 		prompt('You:', function(input){
// 			convMessage(input);
// 		});

// 		context = response.context;

// 		}});
// 			}
			
// 		})}});
// }

// convMessage('नमस्कार');