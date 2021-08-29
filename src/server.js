const express = require('express')

const app = express()
const port = 80
// 1번 방법
app.get('/', async (req, res) => {
	res.send('bye')
})
// 2번 방법
app.get('/socket-close', async (req, res) => {
	res.socket.end(
		[
			'HTTP/1.1 200 OK',
			'Content-Type: text/plain; charset=utf-8',
			'Content-Length: 4',
			`Date: ${new Date().toGMTString()}`,
			'Connection: keep-alive',
			'Keep-Alive: timeout=5',
			'',
			'bye!',
		].join('\n'),
	)
})
// 3번 방법
let socket = null
app.get('/socket-destroy', async (req, res) => {
	socket = res.socket

	res.send('bye')
	setTimeout(() => {
		console.log('destroyed: ', socket.destroyed)
		if (!socket.destroyed) socket.destroy()
	}, 1500) // for keep-alive packet
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
