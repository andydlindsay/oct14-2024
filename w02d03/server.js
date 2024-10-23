const net = require('net');

const server = net.createServer(); // creates a TCP server
const port = 3001;

// set aside space in memory to hold all of our connections
const connections = [];

// listen for a new connection to be made
server.on('connection', (connection) => {
  // add this connection to our collection of connections
  connections.push(connection);
  // console.log(connections.length);

  console.log('someone has connected to the server');

  // console.log('connection', connection); // Socket

  // send a welcome message to the client
  connection.write('welcome to the server!');

  connection.username = 'alice';

  // set the encoding on the connection
  connection.setEncoding('utf-8');

  // listen for the client sending data
  connection.on('data', (data) => {
    console.log('client says:', data);

    // echo this message out to all connected clients
    for (const conn of connections) {
      if (conn !== connection) {
        // send the message to the client
        conn.write(`${connection.username} says: ${data}`);
      }
    }
  });
});

// start the server
server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
