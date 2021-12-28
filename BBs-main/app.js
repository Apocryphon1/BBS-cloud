var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;


MongoClient.connect("mongodb+srv://emem:1234@cluster0.iarne.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", function (err, db){


    
}); 



app.use(express.static("home"));
app.get('/', function (req, res) {
    
});


app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    
    res.send(name + ' Submitted Successfully!');
});




var server = app.listen(5000, function () {
    console.log('Node server is running..');
});