const mongoose = require ('mongoose');


//User Schema Or Document Structure
const categorieSchema = new mongoose.Schema({
    category : {
        type : String,
        
    },
})



module.exports = Category = new mongoose.model("category", categorieSchema);