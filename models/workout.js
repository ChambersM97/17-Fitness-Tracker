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
                    trim: true,
                    required: "Choose a exercise."
                },
                name: {
                    type: String,
                    trim: true,
                    required: "You must input a name."
                },
                duration: {
                    type: Number,
                    trim: true,
                    required: "Enter an amount"
                },
                weight: {
                    type: Number,
                    trim: true,
                    required: "Enter an amount"
                },
                reps: {
                    type: Number,
                    trim: true,
                    required: "Enter an amount"
                },
                sets: {
                    type: Number,
                    trim: true,
                    required: "Enter an amount"
                },
                distance: {
                    type: Number,
                    trim: true,
                    required: "Enter an amount"
                }
            }
        ]
    }
)

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;


