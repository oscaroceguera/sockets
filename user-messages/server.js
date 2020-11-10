const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const urlencodedParser = bodyParser.urlencoded({extended : false});
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname));
app.use(bodyParser.json());
 
let mensajes = [];
let usuarios = [];
 
app.get('/', function(req, res){
   res.sendFile(__dirname + '/index.html');
});
 
app.post('/enviar_mensaje', urlencodedParser, (req,res) => {
   mensajes.push(req.body);
   io.emit('mensaje');
   res.sendStatus(200);
});
 
app.get('/mensajes', (req,res)=>{
   res.send(JSON.stringify(mensajes));
});
 
io.on('connection', (socket)=>{   
 
   socket.on('configurarNombreUsuario', (datos)=>{ 
      usuarios.push(datos);
      socket.emit('configurarUsuario', {nombreusuario:datos}); 
   });
 
   socket.on('escribiendo', (datos)=>{
      io.emit('display', datos);
   });
 
});
 
http.listen(3000, function(){
   console.log('Servidor funcionando en el puerto 3000');
});