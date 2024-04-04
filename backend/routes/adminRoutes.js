const express = require("express");
const router = express.Router();
const adminController = require("../controllers/AdminController");
const upload = require("../middleware/UploadingFiles")
router.get("/admins", adminController.getAllAdmins);
router.delete("/admins/:id", adminController.deleteAdmin);
router.put("/admins/:id", adminController.updateAdmin);
router.delete("/admin/logout", adminController.logout)
router.post("/admin/register", upload.any(), adminController.create)
router.post("/admin/login", adminController.authenticate)

module.exports = router;