var mongoose = require('mongoose');

var EmployeeSchema = new mongoose.Schema({
  name: String,
  type: String,
  position: String,
  hashrate: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Employee', EmployeeSchema);
