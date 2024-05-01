const express = require("express");
const router = express.Router();
const Gamme = require("../models/gammeSchema");

router.post("/create", async (req, res) => {
    console.log(req.body)
    try {
      const {gamme} = req.body;
    
    
      const sendMsg = new Gamme({
        gamme: gamme,
    
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
      const result = await Gamme.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: { ...req.body } }
      );
      res.send("Gamme updated");
    } catch (error) {
      res.status(400).send({ message: "No Gamme with this id" });
    }
  });

  router.get("/allgamme", async (req, res) => {
    try {
      const result = await Gamme.find();
      res.status(200).send({ mesg: result });
    } catch (error) {
      console.log(error);
    }
  });

  router.delete("/delgamme/:id", async(req,res)=>{
     try {
         const result =await Gamme.deleteOne({_id:req.params.id});
      res.status(200).send({msg:"gamme deleted successfuly"})
     } catch (error) {
        console.log(error);
     }
  })


module.exports = router;
