const db_channel = require('../models/channel')

module.exports = (req, res) => {
	db_channel.create({
		name: '#coding'
	}).then((data) => {
		res.send(data)
	}).catch((err) => {
		res.send(err)
	})
}
