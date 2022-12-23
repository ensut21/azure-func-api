const mongoose = require("mongoose");
let database;

const connect = () => {
  const url = process.env.COSMOS_CONNECTION_STRING;

  if (database) return;

  mongoose.connect(url);

  database = mongoose.connection;

  database.once("open", async () => {
    console.log("Connected to database");
  });

  database.on("error", (err) => {
    console.log(err);
    console.log("Error connecting to database");
  });
};

const disconnect = () => {
  if (!database) {
    return;
  }

  mongoose.disconnect();

  database.once("close", async () => {
    console.log("Diconnected  to database");
  });
};

module.exports = {
  connect,
  disconnect,
};
