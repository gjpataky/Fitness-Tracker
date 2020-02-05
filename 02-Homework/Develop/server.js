const express = require("express");
const logger = require("morgan");
var mongoose = require("mongoose");
var MONGODB_URI =
  process.env.MONGODB_URL ||
  "mongo ds061741.mlab.com:61741/heroku_5phjjkjj -u <dbuser> -p <dbpassword>";
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  family: 4 // Use IPv4, skip trying IPv6
};

const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(MONGODB_URI, options);

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
