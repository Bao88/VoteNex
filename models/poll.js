var mongoose = require("mongoose");
var PollSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  poll: {
    type: Array,
    required: true,
    trim: true
  }
});

var Poll = mongoose.model("Poll", PollSchema);
module.exports = Poll;