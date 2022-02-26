const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://omkar:omkar@cluster0.xxd60.mongodb.net/myntraClone?retryWrites=true&w=majority"
  );
};
