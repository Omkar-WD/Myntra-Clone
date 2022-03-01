require("dotenv").config();
const mongoose = require("mongoose");
module.exports = () => {
  return mongoose.connect(
    `mongodb+srv://omkar:15018000@cluster0.sthef.mongodb.net/myntraClone?retryWrites=true&w=majority`
  );
};
