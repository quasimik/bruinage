var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/<databasename>');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	//Connected
});

//Calls function(), which will do the following
var eventSchema = mongoose.Schema({
	title  : String,
	date   : String,
	dscrpt : String,
	people : String
});

//Makes functions for the model
eventSchema.methods.Setup = function() {
	//body info
}

var eventInfo = mongoose.model('eventInfo', eventSchema);

var createdEvent = new eventInfo({ /*Insert info*/ });

	console.log(createdEvent.title); //Outputs title of event


