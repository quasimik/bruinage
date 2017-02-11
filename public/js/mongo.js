var mongoose = require('mongoose');
var DataTable = require('mongoose-datatable');
var MyModel;
var db = mongoose.connection;
var reservations;
var dates; var reservationsSchema;
var dateSchema;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback ()
{
  console.log('Connection has succesfully opened');
  var Schema = mongoose.Schema;
  reservationsSchema = new Schema(
  {
    reservation :
    {
       name : String,
       startDate : String,
       endDate : String,
       confirmationCode : String
    }
 });
 reservations = mongoose.model('reservations', reservationsSchema);
 MyModel = require('mongoose').model('reservations');
});
reservations = mongoose.model('reservations', reservationsSchema);

MyModel = require('mongoose').model('reservations');
exports.getDataForDataTable = function getData (request, response) {
  //"type.typeName" : "Trolley"
  //console.log("Get Request for Data Table made with data: ", request.query);
  MyModel.dataTable(request.query, function (err, data) {
    response.send(data);
  });
};
$('#reservationTable').dataTable({
  "bProcessing" : true,
  "bServerSide" : true,
  "sAjaxSource" : '/mongo/get/datatable',
  "aoColumns" : [
    { "mData" : "reservation.name" },
    { "mData" : "reservation.startDate" },
    { "mData" : "reservation.endDate" },
    { "mData" : "reservation.confirmationCode" }
  ]
});