const express = require("express");
const router = express.Router();
const Category = require("../models/categorieSchema");

router.post("/create", async (req, res) => {
    console.log(req.body)
    try {
      const {category} = req.body;
    
    
      const sendMsg = new Category({
        category: category,
     
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
      const result = await Category.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: { ...req.body } }
      );
      res.send("Category updated");
    } catch (error) {
      res.status(400).send({ message: "No Category with this id" });
    }
  });
 
  router.get("/allcateg", async (req, res) => {
    try {
      const result = await Category.find();
      res.status(200).send({ mesg: result });
    } catch (error) {
      console.log(error);
    }
  });

  router.delete("/delcateg/:id", async(req,res)=>{
     try {
         const result =await Category.deleteOne({_id:req.params.id});
      res.status(200).send({msg:"category deleted successfuly"})
     } catch (error) {
        console.log(error);
     }
  })


module.exports = router;
