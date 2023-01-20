const http = require('http')

const requestListener = (req, res) => {
    const { method } = req

    res.setHeader('Content-Type', 'text/html')
    res.statusCode = 200

    let body = []

    if (method === 'GET') {
        res.end('<h1>GET</h1>')
    }

    if (method === 'POST') {

        req.on('data', (chunk) => {
            body.push(chunk)
        })

        req.on('end', () => {
            body = Buffer.concat(body).toString()
            const { name } = JSON.parse(body)
            res.end(`<h1>Hai, ${body}</h1>`)
        })
    }

    if (method === 'PUT') {
        res.end('<h1>PUT</h1>')
    }

    if (method === 'DELETE') {
        res.end('<h1>DELETE</h1>')
    }
}

const port = 8000
const host = 'localhost'

const server = http.createServer(requestListener)

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`)
})