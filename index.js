// Invoke applications
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

// Set PORT
const PORT = process.env.PORT || 3001;

// Initialize express
const app = express();

// Set Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Database connection
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
