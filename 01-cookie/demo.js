const http = require('http')

http.createServer((req, res) => {
        if (req.url === '/favicon.ico') {
            console.log(1)
            res.end('')
            return
        }
        console.log('cookie:', req.headers.cookie)
        console.log(2)
        let overTime = new Date()
        res.setHeader('Set-Cookie', 'cookie=abcd1234;HttpOnly')
        res.end('hello demo')
    })
    .listen(3002)