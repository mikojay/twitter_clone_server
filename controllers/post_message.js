const db_message = require('../models/message')


module.exports = (req, res) => {
	db_message.create({
		author: 'Chang Chang',
		body: 'Hello World',
		date: '11. Jul 2019',
		hashtag: '#coding'
	}).then((data) => {
		res.send(data)
	}).catch((err) => {
		res.send(err)
	})
}
