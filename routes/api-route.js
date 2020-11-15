const router = require("express").Router();
const { Workout } = require("../models");
var db = require("../models")

// router.post("/api/workouts", (req, res) => {
//     db.Workout.update(
//       {
//         _id: Workout.ObjectId(req.params.id)
//       },
//       {
//         $set: {
//           title: req.body.title,
//           note: req.body.note,
//           modified: Date.now()
//         }
//       },
//       (error, data) => {
//         if (error) {
//           res.send(error);
//         } else {
//           res.send(data);
//         }
//       }
//     );
//   });

module.exports = router;