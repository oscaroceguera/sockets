const express = require('express')
const http = require('http')
const socketIo = require('socket.io')

// port from enviroment variable or default  40001
const port = process.env.PORT || 4001

// setting up express and adding socketIo middleware
const app = express()
const server = http.createServer(app)
const io = socketIo(server)


// setting up a socket with namespace "connection" for new sockets
io.on('connection', socket => {
  console.log('New client connected')

  // Here we listen on a new namespace called "incoming data"
  socket.on('data que entra', data => {
  console.log('data', data)
    // Here we broadcast it out to all other sockets EXCLUDING the socket which sent us the data
    socket.broadcast.emit("data saliente", {num: data})
  })

  // A special namespace "disconnect" for when a client disconnects
  socket.on('disconnect', () => console.log('Client disconnected'))
})

server.listen(port, () => console.log(`Listening on port ${port}`))
