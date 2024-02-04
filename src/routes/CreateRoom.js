const express = require("express");
const router = express.Router();
const CreateRoomController = require("../controller/Createroom");
router.post("/", CreateRoomController.createRoom);
module.exports = router;
