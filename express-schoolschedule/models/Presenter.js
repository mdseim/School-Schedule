var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

var PresenterSchema = new Schema(
  {
	first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
	occupation: {type: String},
	mainphone: {type: String},
	mobilephone: {type: String},
	email: {type: String}
  }
);

// Virtual for participant's full name
PresenterSchema
.virtual('name')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});

// Virtual for presenter's URL
PresenterSchema
.virtual('url')
.get(function () {
  return '/catalog/presenter/' + this._id;
});

//Export model
module.exports = mongoose.model('Presenter', PresenterSchema);