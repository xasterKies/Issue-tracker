const express = require('express');
//Initialising express app
const app = express();


//Creating a middleware
const fileServerMiddleware = express.static('public');

//Mounting middleware
app.use('/', fileServerMiddleware);

//Running port
app.listen(3000, function () {
    console.log('App started on port 3000');
})