const express = require("express");
const viewsController = require("./../controllers/viewsController");
const authController = require("./../controllers/authController");

const router = express.Router();

router.get("/", authController.isLoggedIn, viewsController.overview);
router.get(
  "/product/:slug",
  authController.isLoggedIn,
  viewsController.product
);
router.get("/login", authController.isLoggedIn, viewsController.login);
router.get("/signup", viewsController.signup);
router.get("/profile", authController.protect, viewsController.getme);
router.get("/cart", authController.isLoggedIn, viewsController.cart);

module.exports = router;
