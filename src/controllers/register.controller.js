const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const express = require("express");

const User = require("../models/user.model");

const router = express.Router();

const newToken = (user) => {
  return jwt.sign({ user }, "web14omkar");
};

router.post(
  "",
  body("fullName").isString().isLength({ min: 3, max: 30 }),
  body("mobile").notEmpty().isNumeric(),
  body("email")
    .isEmail()
    .custom(async (value, { req }) => {
      const user = await User.findOne({ email: value });
      if (user) {
        throw new Error("email id already exists!!!");
      }
      return true;
    }),
  body("password").notEmpty(),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        let newErrors;
        newErrors = errors.array().map((err) => {
          return { key: err.param, message: err.msg };
        });
        return res.status(400).send({ errors: newErrors });
      }
      const user = await User.create(req.body);
      const token = newToken(user);
      res.status(201).send({ user, token, message: "success" });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
);
module.exports = router;
