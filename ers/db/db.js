const pg = require('pg');

const database_host = "localhost";
const config = {
    host: process.env.DATABASE_HOST || database_host,
    database: "ers",
    user: "ersAdmin",
    password: "dirtyRat",
};
const client = new pg.Client(config);

const connect = function() {
    client.connect(function(err) {
      if (err) {
        console.error("Couldn't connect to the database...", err);
      } else {
        console.log("Connect to", client.database, "database as", client.user)
      }
    })
};

module.exports = {
  connect
};

