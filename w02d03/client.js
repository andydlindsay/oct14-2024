const net = require('net');

const config = {
  host: 'localhost',
  port: 3001
};

const connection = net.createConnection(config); // gives us a Socket

// set the encoding on the connection
connection.setEncoding('utf-8');

// send data to the server
// connection.write('it is nice to be here');

// listen for incoming communication
connection.on('data', (data) => {
  console.log('the server says:', data);
});

// set the encoding on stdin
process.stdin.setEncoding('utf-8');

// listen for input from the terminal (stdin)
process.stdin.on('data', (data) => {
  // console.log('data', data);
  connection.write(data.trim());
});
