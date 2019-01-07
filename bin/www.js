const http = require('http');
const portfinder = require('portfinder');
const express = require('express');
let app = express();

portfinder.basePort = process.env.PORT || 3000;

portfinder.getPortPromise().then( port => {
  const rootRouter = require('../index');
  app.use('/', rootRouter);
  return port;
}).then((port) => {
  const server = http.createServer(app);
  server.listen(port, () => {
    console.log(`server is listening on port ${port}`);
  });
}).catch(err => {
  console.error(err);
});