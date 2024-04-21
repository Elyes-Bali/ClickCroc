const express = require("express");
const router = express.Router();
const wishSchema = require("../models/wishSchema");

router.post("/create", async (req, res) => {
  try {
    // Get body or Data
    const { ownerId, productId,prodname,brande,price,images } = req.body;

    const createwishSchema = new wishSchema({
      ownerId,
      productId,
      prodname,
      brande,
      price,
      images
    });

    const created = await createwishSchema.save();

    res.send({ msg: "Saved succefully" });

    console.log(created);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/allwish", async (req, res) => {
  try {
    const result = await wishSchema.find();
    res.status(200).send({ wish: result });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delwish/:id", async (req, res) => {
  try {
    const result = await wishSchema.deleteOne({ _id: req.params.id });
    res.status(200).send({ msg: "product deleted successfuly" });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
