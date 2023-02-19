const http = require('http');
const app = require('./app').default;

// Get port from environment and store in Express.
// TODO: H2 + TLS.
const port = parseInt(process.env.PORT, 10) || 3000;
app.set('port', port);

//const server = http.createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(port);
server.on('listening', () => {
  const addr = server.address();
  console.log(`Listening on port ${addr.port}`);
});
server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  // Handle specific listen errors with friendly messages.
  switch (error.code) {
  case 'EACCES':
    console.error(`Port ${port} requires elevated privileges`);
    process.exit(1);
    break;
  case 'EADDRINUSE':
    console.error(`Port ${port} is already in use`);
    process.exit(1);
    break;
  default:
    throw error;
  }
});