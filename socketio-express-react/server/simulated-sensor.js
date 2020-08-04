let socket = require('socket.io-client')('http://127.0.0.1:4001')

// start speed at 0
let speed = 0;

// Simulating reading data every 100 
setInterval(() => {
  console.log('se dispara', speed)
  // Somee sudo-randomnes to change th evalues but not to drastically
  let nextMin = (speed - 2) > 0 ? speed - 2 : 2;
  let nextMax = speed + 5 < 140 ? speed + 5 : Math.random() * (130 - 5 + 1) + 5;
  speed = Math.floor(Math.random() * (nextMax - nextMin + 1) + nextMin)

  // We emit the data. No need to JSON seralization!
  socket.emit('data que entra', speed)
}, 1000);