const http = require('http')

http.createServer((req, res) => {
        if (req.url === '/favicon.ico') {
            res.end('')
            return
        }
        console.log('cookie:', req.headers.cookie)


        res.setHeader('Set-Cookie', 'cookie1=abcde;')
        res.end('hello')
    })
    .listen(3001)