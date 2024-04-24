const express = require("express");
const router = express.Router();
const BlogSchema = require("../models/blogSchema");

router.post("/create", async (req, res) => {
  try {
    // Get body or Data
    const { title,content,ownerId,pic } = req.body;
    // console.log(name,email,title,linkedin,github,phone,project,project1,project2,
    //   languages,languages1,languages2,college,summary)

    const createblogSchema = new BlogSchema({
        title,content,ownerId,pic 
    });

    const created = await createblogSchema.save();

    res.send({ msg: "Saved succefully" });

    console.log(created);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/allblogs", async (req, res) => {
  try {
    const result = await BlogSchema.find();
    res.status(200).send({ offers: result });
  } catch (error) {
    console.log(error);
  }
});

router.put("/edite/:id", async (req, res) => {
  // console.log(req.body);
  try {
    const result = await BlogSchema.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send("Blog updated");
  } catch (error) {
    res.status(400).send({ message: "No Blog with this id" });
  }
});
router.get('/getone/:id', async(req,res)=>{
  // console.log(req.params.id)
  try {
  const result = await BlogSchema.findOne({_id:req.params.id});
  // console.log(result);
  res.status(200).send({ofer : result});
  }catch (error) {
    res.status(400).send({ message: "No blog with this id" });
  
}
})

router.delete("/delblog/:id", async(req,res)=>{
  try {
      const result =await BlogSchema.deleteOne({_id:req.params.id});
   res.status(200).send({msg:"blog deleted successfuly"})
  } catch (error) {
     console.log(error);
  }
})
module.exports = router;