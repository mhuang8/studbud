const express = require('express');
const app = express();

//serve static files out of the 'dist' folder
app.use(express.static(__dirname + '/dist'));
app.use(express.static('public'));

//serve the index.html when users access the root directory using res.sendFile()
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html')
   })

   let server = app.listen(8888, function(){
    console.log("App server is running on port 8888");
   });