// Iteration #1

require('../db');
const Drone = require('../models/Drone.model.js')
const mongoose = require("mongoose");

// Iteration #1
const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
]


Drone.insertMany(drones)
.then(() =>{
    console.log('Drones created');
    mongoose.connection.close()
})
.catch((err)=>{
    console.log(err);
})