const express = require('express')

const app = express()

require('dotenv').config()

app.listen((process.env.PORT), (err) => {
	if (err) {
		console.log('ERROR', err);
	} else {
		console.log(`Ready for Port ${process.env.PORT}, baby`);
	}
})
