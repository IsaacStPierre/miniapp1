const express = require("express");
const { request, detailedRequest, add, update, remove } = require("../controllers/movielistController.js");
const router = express.Router();


router.route("/movies").get(request);
router.route("/movies/:id").get(detailedRequest);
router.route("/movies").post(add);
router.route("/movies/:id").patch(update);
router.route("/movies/:id").delete(remove);

module.exports = router