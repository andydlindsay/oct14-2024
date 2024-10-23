// stdout => what is the standard output for our app (terminal)
// stdin => what is the standard input for our app (terminal)
// stdin and stdout are Sockets

// set encoding on the connection
process.stdin.setEncoding('utf-8');

// listen for someone typing
process.stdin.on('data', (data) => {
  console.log('you typed: ', data.trim());
});
