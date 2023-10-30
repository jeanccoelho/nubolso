const app = require('http').createServer();
const io = require('socket.io')(app);

io.on('connection', (socket) => {
  console.log('Um cliente se conectou');

  socket.on('mensagemParaServidor', (data) => {
    console.log('Mensagem do cliente: ' + data);
    // Aqui você pode manipular a mensagem recebida do cliente

    // Envia uma mensagem de volta para o cliente
    socket.emit('mensagemParaCliente', 'Mensagem recebida pelo servidor: ' + data);
  });

  socket.on('disconnect', () => {
    console.log('Um cliente se desconectou');
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor está ouvindo na porta ${PORT}`);
});
