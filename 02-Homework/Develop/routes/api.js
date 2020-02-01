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

/* put route /api/workouts/:id */
router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    // "runValidators" will ensure new exercises meet our schema requirements
    { new: true, runValidators: true }
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

/* get all workouts */
/* /api/workouts */
router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
});

/* get last 7 workout */
/*  /api/workouts/range */
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .limit(7)
    .then(dbWorkouts => {
      console.log(dbWorkouts);
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
});

/* delete workout */
/* /api/workouts */
router.delete("/api/workouts", ({ body }, res) => {
  Workout.findByIdAndDelete(body.id)
    .then(() => {
      res.json(true);
    })
    .catch(err => {
      res.json(err);
    });
});
module.exports = router;
