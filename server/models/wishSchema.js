const mongoose = require('mongoose');

const wishSchema = new mongoose.Schema({
    ownerId : {
        type : String,
        
        
    },
    productId : {
        type : String,
        
        
    },
    prodname : {
        type : String,
        
    },
    brande : {
        type : String,
        
    },
    price : {
        type : Number,
       
        
    },
    images: [Object],
    
},);
module.exports = WishInfo =  mongoose.model("WISH", wishSchema);