var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var Schema = mongoose.Schema;
//Calls function(), which will do the following
var EventSchema = mongoose.Schema({
    title  : String,
    date   : String,
    time: String,
    dscrpt : String,
    people : String
});

EventSchema.methods.tell = function () {
    var mstr = this.title +", " +this.date + ", " +this.time
    ", "+ this.dscrpt +", "+this.people
  console.log(mstr);
}

//Export model
module.exports = mongoose.model('Event', EventSchema);
