require("dotenv").config();
require("./models/db");
require("./config/passportConfig");
const routesIndex = require("./routes/index_router");
const routesBook = require('./routes/books_router');

const express = require("express");
const app = express();
const cors = require("cors");
const redis = require("redis");
const passport = require("passport");
const session = require("express-session");
const redisStore = require("connect-redis")(session);
const client = redis.createClient({ host: "localhost", port: 6379 });
const bodyParser = require("body-parser");

client.on("error", function(err) {
  console.log("could not establish a connection with redis. " + err);
});

client.on("connect", function() {
  console.log("connected to redis successfully");
});

//Static files
app.use(express.static('./uploads'));

app
  .use(express.json())
  .use(
    "/",
    session({
      name: "_redisDemo",
      secret: process.env.SESH_SECRET,
      resave: false,
      saveUninitialized: false,
      rolling: true,
      store: new redisStore({ client }),
      cookie: { maxAge: 60000 } // Set to secure:false and expire in 1 minute for demo purposes
    })
  )
  .use(passport.initialize())
  .use(passport.session());

app.use("/", routesIndex);
app.use("/", routesBook);


//global error handler
app.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    var valErrors = [];
    Object.keys(err.errors).forEach(key =>
      valErrors.push(err.errors[key].message)
    );
    res.status(422).send(valErrors);
  } else {
    console.log(err);
  }
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`Listening on PORT : ${process.env.PORT}`)
);
