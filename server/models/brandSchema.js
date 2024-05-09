const mongoose = require ('mongoose');


//User Schema Or Document Structure
const brandSchema = new mongoose.Schema({
    brand : {
        type : String,
        
    },
})



module.exports = Brand = new mongoose.model("brand", brandSchema);