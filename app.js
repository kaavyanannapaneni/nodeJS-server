const http = require('http')

function handleRequest(request, response) {
  if (request.url === '/') {
    response.statusCode = 200
    response.end('<h1>Hello World!</h1>')
  } else if (request.url === '/date') {
    response.statusCode = 200
    response.end('<h1>' + new Date().toISOString() + '</h1>')
  }
}
const server = http.createServer(handleRequest)

server.listen(3000)
