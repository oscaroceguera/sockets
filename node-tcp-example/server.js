const net = require('net')

const server = net.createServer(socket => {
  socket.write('echo server\r\n');
  socket.pipe(socket)
})

server.listen(1337, '127.0.0.1')