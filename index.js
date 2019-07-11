const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()

require('./db')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//messages
app.post('/api/messages', require('./controllers/post_message'))
app.get('/api/messages', require('./controllers/get_messages'))

//channels
app.post('/api/channels', require('./controllers/post_channel'))
app.get('/api/channels', require('./controllers/get_channels'))

//signup
app.post('/api/signup', require('./controllers/signup'))


app.listen((process.env.PORT), (err) => {
	if (err) {
		console.log('ERROR', err);
	} else {
		console.log(`Ready for Port ${process.env.PORT}, baby`);
	}
})
