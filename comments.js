// Create web server
// Create a web server that listens for requests on port 8080. When a request is received, it should return a JSON response with a status code of 200 and the following body:
//
// {
//   "status": "success",
//   "message": "Comments route"
// }
// The server should return the appropriate Content-Type header in the response.
//
// Hint: You can use the http module to create the server, and the JSON.stringify method to convert an object to a string.

// Requirements
// You will need to use the http module to create the server, and the JSON.stringify method to convert an object to a string.

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'success', message: 'Comments route' }));
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});