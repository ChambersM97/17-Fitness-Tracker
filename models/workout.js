const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                    required: "Choose a exercise."
                },
                name: {
                    type: String,
                    required: "You must input a name."
                },
                duration: {
                    type: Number,
                    required: "Enter an amount"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    }
)

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;


