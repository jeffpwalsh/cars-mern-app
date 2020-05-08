const mongoose = require("mongoose");

//Schema
const Schema = mongoose.Schema;
const CarPostSchema = new Schema({
  owner: {
    type: String,
    required: true,
  },
  address: String,
  model: String,
  make: String,
  registration: String,
});

//Model
const CarPost = mongoose.model("cars", CarPostSchema);

module.exports = CarPost;
