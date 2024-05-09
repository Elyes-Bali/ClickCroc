const express = require("express");
const router = express.Router();
const Brand = require("../models/brandSchema");

router.post("/create", async (req, res) => {
    console.log(req.body)
    try {
      const {brand} = req.body;
    
    
      const sendMsg = new Brand({
        brand: brand,
     
      });
      const created = await sendMsg.save();
      console.log(created);
      res.status(200).send("Sent");
    } catch (error) {
      res.status(400).send(error);
    }
  });


  router.put("/edite/:id", async (req, res) => {
    try {
      const result = await Brand.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: { ...req.body } }
      );
      res.send("Brand updated");
    } catch (error) {
      res.status(400).send({ message: "No Brand with this id" });
    }
  });
 
  router.get("/allbrands", async (req, res) => {
    try {
      const result = await Brand.find();
      res.status(200).send({ mesg: result });
    } catch (error) {
      console.log(error);
    }
  });

  router.delete("/delbrand/:id", async(req,res)=>{
     try {
         const result =await Brand.deleteOne({_id:req.params.id});
      res.status(200).send({msg:"Brand deleted successfuly"})
     } catch (error) {
        console.log(error);
     }
  })


module.exports = router;
