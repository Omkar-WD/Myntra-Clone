require("dotenv").config();
const mongoose = require("mongoose");
const dataBase = `mongodb+srv://${process.env.Mongo_Email}:${process.env.Mongo_Password}@cluster0.sthef.mongodb.net/${process.env.Mongo_DataBase}?retryWrites=true&w=majority`;
const database = (module.exports = () => {
  return mongoose.connect(dataBase);
});
