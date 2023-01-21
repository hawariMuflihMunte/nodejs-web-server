/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const http = require('http');
const app = require('./app');

const port = 8000;
const host = 'localhost';

const server = http.createServer(app);

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
