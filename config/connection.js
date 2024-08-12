// Connect to server
const { connect, connection } = require("mongoose");

const connectionString = "mongodb://127.0.0.1:27017/nectarDB";

connect(connectionString);

module.exports = connection;
