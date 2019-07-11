const express = require('express')

const app = express()

app.listen((4000), (err) => {
	if (err) {
		console.log('ERROR', err);
	} else {
		console.log('Ready for Port 4000, baby');
	}
})
