let clients = [
    new WebSocket('ws://localhost:3000'),
    new WebSocket('ws://localhost:3000')
  ];
  clients.map(client => {
    client.on('message', msg => console.log(msg));
  });
  // Esperamos o cliente conectar com o servidor usando async/await
  await new Promise(resolve => clients[0].once('open', resolve));
  // Imprimi "Hello!" duas vezes, um para cada cliente
  clients[0].send('Hello!');