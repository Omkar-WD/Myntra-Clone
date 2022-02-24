const express = require("express");
const cors = require("cors");
const connect = require("./configs/db");
require("dotenv").config();

const suggestionCartDataController = require("./controllers/suggetionCartData.controller");
const registerController = require("./controllers/register.controller");
const loginController = require("./controllers/login.controller");
const productController = require("./controllers/product.controller");
const cartController = require("./controllers/cart.controller");
const wishListController = require("./controllers/wishList.controller");
const userController = require("./controllers/user.controller");
const addressController = require("./controllers/address.controller");
const orderHistoryController = require("./controllers/orderHistory.controller");

const authenticate = require("./middlewares/authenticate");

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/suggestionCartData", suggestionCartDataController);
app.use("/register", registerController);
app.use("/login", loginController);
app.use("/products", productController);
app.use("/cart", authenticate, cartController);
app.use("/wishList", authenticate, wishListController);
app.use("/user", authenticate, userController);
app.use("/address", authenticate, addressController);
app.use("/orderHistory", authenticate, orderHistoryController);

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`listening on port ${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});
