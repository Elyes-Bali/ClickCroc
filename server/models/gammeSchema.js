const mongoose = require("mongoose");

//User Schema Or Document Structure
const gammeSchema = new mongoose.Schema({
  gamme: {
    type: String,
  },
});

module.exports = Gamme = new mongoose.model("gamme", gammeSchema);
