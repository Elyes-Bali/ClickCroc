console.clear();
const cors= require("cors");
const dotenv = require("dotenv");
const express = require("express");
const path = require("path");

const app = express();

// Configure ENV File & Require Connection File
dotenv.config({ path: "./config.env" });
require("./db/conn");
const port = process.env.PORT;

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));

app.use('/photoimgs', express.static(path.join(__dirname, 'photoimgs')));
app.use("/api/user", require ('./routes/User'))
app.use("/api/message", require('./routes/Message'))
app.use("/api/user/upload",require("./routes/PhotoImgsUpload"));
app.use("/api/offer/upload",require("./routes/PhotoImgsUpload"));
app.use("/api/offer",require ('./routes/Offers') );
app.use("/api/wish",require ('./routes/Wish') );
app.use("/api/sendemail", require('./routes/RouteMessage'));
app.use("/api/comment", require('./routes/Comments'));
app.use("/api/blog", require('./routes/Blog'));
app.use("/api/blog/upload",require("./routes/PhotoImgsUpload"));
app.use("/api/categ", require('./routes/Categorie'));
app.use("/api/gamme", require('./routes/Gamme'));
app.use("/api/family", require('./routes/Famille'));




 
// Run server
app.listen(port, () => {
    console.log("Server is Listening");
  });