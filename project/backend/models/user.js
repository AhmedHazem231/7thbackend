const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  height: { type: Number, default: 0 },
  weight: { type: Number, default: 0 },
  bmi: { type: Number, default: 0 },
  workoutPlan: { type: String, default: "" },
  dietPlan: { type: String, default: "" },
});

module.exports = mongoose.model("User", userSchema);
