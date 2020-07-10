const net = require('net')

// Create a server object
const server = net.createServer(socket => {
  socket.on('data', (data) => {
    console.log(data.toString())
  })

  socket.write('SERVER: Hello! this is server speaking. <br>');

  socket.end('SERVER: Closing connection now. <br>')
}).on('error', err => {
  console.log(err)
})

server.listen(9898, () => {
  console.log('opened server on', server.address().port)
})