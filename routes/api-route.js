const router = require("express").Router();
// const { Workout } = require("../models");
var db = require("../models")

//shows all workouts from the database
router.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    });
  });

// router.get("/stats", (req, res) => {
//     db.Workout.find
// }

//adds exerises to a previous workout plan
// router.post("/api/workouts", (req, res) => {
//     db.Workout.insertMany(req.body, (error, data) => {
//         console.log(req.body);
//         if (error) {
//             res.send(error);
//         } else {
//             res.send(data);
//         }
//     })
// })


// router.post('/api/workouts', (req, res) => {
//     db.Workout.find({}, ())
// })

module.exports = router;