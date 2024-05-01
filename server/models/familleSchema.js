const mongoose = require ('mongoose');


//User Schema Or Document Structure
const familleSchema = new mongoose.Schema({
    family : {
        type : String,
        
    },
    
})



module.exports = Family = new mongoose.model("family", familleSchema);