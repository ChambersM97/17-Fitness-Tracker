const router = require("express").Router();
const { Workout } = require("../models");
// const { Workout } = require("../models");
var db = require("../models")

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
  


router.put("api/workouts/:id", (req, res) => {
  db.Workout.insertOne({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
      console.log("insert works!")
    }
  });
})

  
  
module.exports = router;