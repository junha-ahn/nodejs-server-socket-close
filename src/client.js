const axios = require('axios')
const http = require('http')
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const httpAgent = new http.Agent({ keepAlive: true })
const instance = axios.create({
	baseURL: 'http://server:80',
	httpAgent,
})

const run = async () => {
	await sleep(1000 * 10)
	const result = await instance.get('/socket-destroy')
	console.log(new Date(), 'once: ', result.data, result.headers)
	await sleep(1000 * 60)
}

run()
