import json
import requests
from watson_developer_cloud import ConversationV1

choice = 1
counter = 0
# context = {}
workspace_id = '4382aedb-14c0-409d-947f-a26c31a1615c'
# conversation_id = []


conversation = ConversationV1('2016-09-20', username = '7dca5c07-2bdf-4a2c-bcb7-67c261c7283a', password = 'dtqgulYFS2s5', url = 'https://gateway.watsonplatform.net/conversation/api')


while(choice!=0):
	choice = raw_input('Enter choice')
	my_text = raw_input('You:')
	

	# english_string = requests.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170209T172140Z.90b27fa540a7ff2e.7bbefbb5272ed6856eb4fb24dac94838b60442df&text='+ my_text+'&lang=hi-en&format=plain')
	# english_string_json = english_string.json()
	# english_string_json_text = english_string_json['text']
	# english_string_json_text_unicode = english_string_json_text[0].encode("utf-8",errors="ignore")

	# print english_string_json_text_unicode

	
	if counter==0:
		parameters = {'text': my_text
						# 'conversation_id': conversation_id}
						# 'context':context
						}
	else:
		parameters = {'text': my_text,
					# 'conversation_id': conversation_id}
						'context':context}
	counter+=1						
		


	response = conversation.message(workspace_id = workspace_id, message_input = parameters)

	

	print(json.dumps(response, indent=2))
	x = response['output']
	text = str(x['text'])
	context = response['context']
	print type(response['context'])
	conversation_id = context['conversation_id']

	print 'Watson :' + text[3:-2]	
	# hindi_string = requests.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170209T172140Z.90b27fa540a7ff2e.7bbefbb5272ed6856eb4fb24dac94838b60442df&text='+text +'&lang=hi&format=plain')
	# hindi_string_json = hindi_string.json()
	# hindi_string_json_text = hindi_string_json['text']
	# hindi_string_json_text_unicode = hindi_string_json_text[0].encode("utf-8",errors="ignore")
	
	# print 'Watson :' + hindi_string_json_text_unicode[1:-1]
