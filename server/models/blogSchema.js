const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  ownerId: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  pic: {
    type: String,
  },
});

module.exports = Blogs = new mongoose.model("blogs", BlogSchema);
