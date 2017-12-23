const pg = require('pg');

const database_url = "postgres://localhost/ers";
const client = new pg.Client(process.env.DATABASE_URL || database_url);
console.log(client);

const connect = () => {
  client.connect((err) => {
    if (err) {
      console.error("Couldn't connect to the database...");
    }
  })
}

module.exports = {
  connect
};

