const express = require('express'); // importing Express
var cors = require('cors');

const app = express(); // instance of express
var cors = require('cors');
const port = process.env.PORT || 3000; // Defining port by environmental parameter or 3000

const retJson = require('./json/index.json');

app.use(cors());

// Create a routing
app.get('/', function (req, res) {
    res.json(retJson);
})

// App is listening to user-defined port or 300 and printing the information to the console.
app.listen(port, function (req, res) {
    console.log(`Server is listening on port ${ port }!`)
})