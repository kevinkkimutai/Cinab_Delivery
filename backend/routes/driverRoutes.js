const express = require("express");
const router = express.Router();
const userController = require("../controllers/driverController");
const upload = require("../middleware/UploadingFiles")
router.get("/drivers", userController.getAllUsers);
router.delete("/driver/:id", userController.deleteUser);
router.put("/driver/:id", userController.updateUser);
router.delete("/driver/logout", userController.logout)
router.post("/driver/register",upload.any(), userController.create)
router.post("/driver/login", userController.authenticate)
module.exports = router;