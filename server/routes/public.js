const express = require("express");
const routes = express.Router();
const { check } = require("express-validator");

const publicController = require("../controller/public");

routes.get("/api/v1/", publicController.getApi);
routes.post(
  "/api/v1/",
  check("urls").isURL().withMessage("Invalid Url"),
  publicController.postApi
);

module.exports = routes;
