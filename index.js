const express = require('express')
require('dotenv').config()
const app = express()

require('./db')
//messages
app.post('/api/messages', require('./controllers/post_message'))
app.get('/api/messages', require('./controllers/get_messages'))

//channels
app.post('/api/channels', require('./controllers/post_message'))
app.get('/api/channels', require('./controllers/get_messages'))


app.listen((process.env.PORT), (err) => {
	if (err) {
		console.log('ERROR', err);
	} else {
		console.log(`Ready for Port ${process.env.PORT}, baby`);
	}
})
