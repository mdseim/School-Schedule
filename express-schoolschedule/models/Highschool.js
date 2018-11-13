var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

var HighschoolSchema = new Schema(
  {
    name: {type: String, required: true},
  }
);


// Virtual for highschool's URL
HighschoolSchema
.virtual('url')
.get(function () {
  return '/catalog/highschool/' + this._id;
});

//Export model
module.exports = mongoose.model('Highschool', HighschoolSchema);