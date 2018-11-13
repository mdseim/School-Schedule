var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

var ParticipantSchema = new Schema(
  {
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
	address: {type: String},
	email: {type: String},
	timestamp: {type: String},
	participanttype: {type: String},
	interest: [{type: Schema.Types.ObjectId, ref: 'topic'}]
  }
);

// Virtual for participant's full name
ParticipantSchema
.virtual('name')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});

// Virtual for participant's URL
ParticipantSchema
.virtual('url')
.get(function () {
  return '/catalog/participant/' + this._id;
});

//Export model
module.exports = mongoose.model('Participant', ParticipantSchema);