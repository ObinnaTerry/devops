const http = require('http');

const hostname = '127.0.0.1'; // Localhost
const port = 3000;           // Port number

// Create the server
const server = http.createServer((req, res) => {
  res.statusCode = 200;                
  res.setHeader('Content-Type', 'text/plain'); 

  res.end('Hello, World!\n');
});

// Start the server and listen on the defined hostname and port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
