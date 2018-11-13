var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

var ScheduleSchema = new Schema(
  {
    session: [{type: Schema.Types.ObjectId, ref: 'session'}],
	room: [{type: Schema.Types.ObjectId, ref: 'room'}],
	topic: [{type: Schema.Types.ObjectId, ref: 'topic'}]
	presenter: [{type: Schema.Types.ObjectId, ref: 'presenter'}]
);

// Virtual for schedule's URL
ScheduleSchema
.virtual('url')
.get(function () {
  return '/catalog/schedule/' + this._id;
});

//Export model
module.exports = mongoose.model('Schedule', ScheduleSchema);