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
  startT : int,
  endT   : int,
	dscrpt : String,
	people : String
});

//Makes functions for the model
eventSchema.methods.Setup = function() {
	//body info
}

var eventInfo = mongoose.model('eventInfo', eventSchema);

var createdEvent = new eventInfo({ "Science Class", "02/10/17", 9, 13, "Class", "friends"});

console.log(createdEvent.title); //Outputs title of event

createdEvent.save(function (err, createdEvent) {
  if (err) return console.error(err);
  consoe.log("Successfully added to database");
});


