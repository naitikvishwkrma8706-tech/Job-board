const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,

  location: String,
});

module.exports = mongoose.model("Job", jobSchema);
