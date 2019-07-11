const mongoose = require('mongoose')

const db = mongoose.connect('mongodb://localhost:27017/twitter', {useNewUrlParser: true}, (err) => {
	if (err) {
		console.log('Error:', err)
	} else {
		console.log('Connected to MongoDB')
	}
})

module.exports = mongoose
