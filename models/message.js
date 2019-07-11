const db = require('../db')

const db_message = db.model('message', {
	author: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now()
	},
	body: {
		type: String,
		required: [true, 'Message Body is required']
	},
	hashtag: {
		type: String,
	}
})

module.exports = db_message
