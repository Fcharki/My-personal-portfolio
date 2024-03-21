const express = require("express");
const router = express.Router();
const { getTrajet, setTrajet, deleteTrajet, searchTrajet } = require('../controllers/trajetController');

router.route("/").get(getTrajet).post(setTrajet);
router.route("/search").post(searchTrajet);
router.route("/:id").delete(deleteTrajet);

module.exports = router;
