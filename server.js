const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");


const app = express();

const PORT = process.env.PORT || 8080;

//ROUTES
const routes = require("./routes/api");

//MONGO_DB COONECTION VIA APP URI
const MONGODB_URI =
  "mongodb+srv://jeffpwalsh:Hyperion1234@l3t5-hyperion-rj1h1.mongodb.net/test?retryWrites=true&w=majority";

//MONGO_DB CONNECTION
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is conected!!!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("tiny"));
app.use("/api", routes);

app.listen(PORT, console.log(`Server is running on ${PORT}`));
