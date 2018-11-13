var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

var TopicSchema = new Schema(
  {
    name: {type: String, required: true, max: 100},
    description {type: String, required: true, max: 200},
  }
);

// Virtual for topic's URL
TopicSchema
.virtual('url')
.get(function () {
  return '/catalog/topic/' + this._id;
});

//Export model
module.exports = mongoose.model('Topic', TopicSchema);