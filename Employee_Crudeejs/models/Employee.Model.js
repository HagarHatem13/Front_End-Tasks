const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    salary: {
      type: Number,
      required: true,
      min: [0, "Salary must be a positive number"],
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },
  },
  {
    timestamps: true, 
  }
);

module.exports = mongoose.model("Employee", employeeSchema);

