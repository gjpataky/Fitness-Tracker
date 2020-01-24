const router = require("express").Router();
const Workout = require("./../models/workout");
/* add a new workout */
router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});
/* add excercises to a work out */
/* put route /api/workouts/:id */
/* get all workouts */
/* /api/workouts */
/* get last 7 workout */
/*  /api/workouts/range */
/* delete workout */
/* /api/workouts */
module.exports = router;
