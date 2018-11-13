var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

var SessionSchema = new Schema(
  {
    time: {type: Date, default: Date.now},
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