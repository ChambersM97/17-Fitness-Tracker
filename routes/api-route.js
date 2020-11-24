const router = require("express").Router();
const Workout= require("../models/workout.js");
// const { Workout } = require("../models");
//var db = require("../models")

router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json(err)
    });
});
//shows all workouts from the database
router.post("/api/workouts", (req, res) => {
    Workout.create({})
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        res.json(err)
        console.log("error!.") 
      });
    });
  


router.put("/api/workouts/:id", ({body, params}, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: {exercises: body} },
    { new:true, runValidators: true }
  )
  .then(data => {
    res.json(data)
  })
  .catch(err => {
    res.json(err)
    console.log("error!.") 
  });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find()
  .then(data => {
    res.json(data)
  })
  .catch(err => {
    res.json(err)
  });
})

  
  
module.exports = router;