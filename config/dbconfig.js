const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config();
const app = express();

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

mongoose.connect(
    "mongodb://localhost:27017/Movie_Ticket_Booking"
).then(() => 
    app.listen(5000, () =>
        console.log("Connected to Database and Server is Running Successfully!")
    )    
)
.catch((error) => console.log(error));