var router = require("express").Router();
const { add, getAll } = require("./../controllers/interestsController");

router.post("/add", add);
router.get("/interest", getAll);

module.exports = router;
