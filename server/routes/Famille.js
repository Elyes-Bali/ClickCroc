const express = require("express");
const router = express.Router();
const Family = require("../models/familleSchema");

router.post("/create", async (req, res) => {
    console.log(req.body)
    try {
      const {family} = req.body;
    
    
      const sendMsg = new Family({
        family: family,
      
      });
      const created = await sendMsg.save();
      console.log(created);
      res.status(200).send("created");
    } catch (error) {
      res.status(400).send(error);
    }
  });

  router.put("/edite/:id", async (req, res) => {
    try {
      const result = await Family.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: { ...req.body } }
      );
      res.send("Family updated");
    } catch (error) {
      res.status(400).send({ message: "No Family with this id" });
    }
  });
  
 
  router.get("/allfamilies", async (req, res) => {
    try {
      const result = await Family.find();
      res.status(200).send({ mesg: result });
    } catch (error) {
      console.log(error);
    }
  });

  router.delete("/delfamily/:id", async(req,res)=>{
     try {
         const result =await Family.deleteOne({_id:req.params.id});
      res.status(200).send({msg:"family deleted successfuly"})
     } catch (error) {
        console.log(error);
     }
  })



module.exports = router;