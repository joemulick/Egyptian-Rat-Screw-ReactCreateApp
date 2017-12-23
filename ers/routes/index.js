module.exports = function(io) {
  var express = require('express');
  var router = express.Router();

  /* GET home page. */
  router.get('/', function(req, res, next) {
    console.log("I'm being gotten");
    res.render('index', { title: 'Express' });
  });

  /* socket.io connection */
  io.on('connection', function(socket) {
    console.log("connected to index route");
  })

  return router;
}
