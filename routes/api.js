const express = require("express");
const router = express.Router();

const CarPost = require("../models/carPosts");

//Routes
router.get("/", (req, res) => {
  CarPost.find({})
    .then((data) => {
      console.log("Data", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("Error", error);
    });
});

//Routes
router.post("/save", (req, res) => {
  const data = req.body;

  const newCarPost = new CarPost(data);

  //.save
  newCarPost.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server errors" });
      return;
    }
    //Carpost
    return res.json({
      msg: "Your Data has been saved!!!",
    });
  });
});

//Routes
router.put("/edit/:id", function (req, res) {
  CarPost.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $set: {
        owner: req.body.owner,
        address: req.body.address,
        make: req.body.make,
        model: req.body.model,
        registration: req.body.registration,
      },
    },
    { upsert: true },
    function (err, newCarPost) {
      if (err) {
        console.log("error occured");
      } else {
        console.log(newCarPost);
        res.status(204);
      }
    }
  );
});

//Routes
router.delete("/:id", function (req, res) {
  CarPost.findOneAndDelete(
    {
      _id: req.params.id,
    },

    function (err, post) {
      if (err) {
        console.log("error deleting");
      } else {
        console.log(post);
        res.status(204);
      }
    }
  );
});

module.exports = router;
