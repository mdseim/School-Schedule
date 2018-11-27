var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

var SessionSchema = new Schema(
  {
    sessionnumber: {type: String, required: true, max: 100},
    building: {type: String, required: true, max: 200},
	capacity: {type: String, required: true, max: 200}
  }
);

// Virtual for session's URL
SessionSchema
.virtual('url')
.get(function () {
  return '/catalog/session/' + this._id;
});

//Export model
module.exports = mongoose.model('Session', SessionSchema);