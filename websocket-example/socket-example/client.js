const net = require('net')

const client = net.createConnection({ port: 9898 }, () => {
  console.log('CLIENT: I connected to the server.')
  client.write('CLIENT: hello this is cliient!')
})

client.on('data', data => {
  console.log(data.toString())
  client.end()
})

client.on('end', () => {
  console.log('CLIENTE: I disconnected from the server')
})