const db_message = require('../models/message')

module.exports = (req, res) => {
	db_message.find({}).sort('-date').populate({
		path: 'channel',
		select: 'name'
	}).then((data) => {
		res.send(data)
	}).catch((err) => {
		res.send(err)
	})
}
