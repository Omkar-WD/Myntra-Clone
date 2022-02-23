const express = require("express");
const cors = require("cors");
const connect = require("./configs/db");

const suggestionCartDataController = require("./controllers/suggetionCartData.controller");
const registerController = require("./controllers/register.controller");
const loginController = require("./controllers/login.controller");
const productController = require("./controllers/product.controller");
const cartController = require("./controllers/cart.controller");
const authenticate = require("./middlewares/authenticate");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/suggestionCartData", suggestionCartDataController);
app.use("/register", registerController);
app.use("/login", loginController);
app.use("/products", productController);
app.use("/cart", authenticate, cartController);

app.listen(2345, async () => {
  try {
    await connect();
    console.log("listening on port 2345");
  } catch (error) {
    console.log(error.message);
  }
});
