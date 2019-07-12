const mongoose = require('mongoose')

const db = mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true}, (err) => {
		console.log('Error:', err)
	} else {
		console.log('Connected to MongoDB')
	}
})

module.exports = mongoose
