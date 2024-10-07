const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const dbConfig = require("./config/dbconfig");

app.use(express.json());

const usersRoute = require("./routes/usersRoute");
const moviesRoute = require("./routes/moviesRoute");
const theatresRoute = require("./routes/theatresRoute");
const bookingsRoute = require("./routes/bookingRoute");

app.use("/api/users", usersRoute);
app.use("/api/movies", moviesRoute);
app.use("/api/theatres", theatresRoute);
app.use("/api/bookings", bookingsRoute);

const cors = require("cors");
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,"
  })
)

const port = process.env.PORT ||8080;

const path = require("path");
__dirname = path.resolve();



// render deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
app.listen(port, () =>
  console.log(`Node JS Server is running on port ${port}`)
);