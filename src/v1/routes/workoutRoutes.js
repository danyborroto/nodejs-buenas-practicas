const express = require('express');
const router = express.Router();
const { getAll, getOne, insertOne, updateOne, deleteOne } = require('../../controllers/workoutController')

router.get("/", getAll);
router.get("/:workoutId", getOne);
router.post("/:workoutId", insertOne);
router.patch("/:workoutId", updateOne);
router.delete("/:workoutId", deleteOne);

module.exports = router;