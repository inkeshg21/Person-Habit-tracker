const mongoose = require('mongoose');

/* 
This is a Schema for the User Collection in mongodb
This defines the structure of the document, 
default values, validators, etc.
*/
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    date: {
       type: Date,
       default: Date.now
    },

    habits: {
        type: Array
    },
    completeDay: {
        type: Array
    }
})

/* 
This creates a Model which provides an interface to the
database for creating, querying, updating, deleting records, etc. 
It's a wrapper for the Schema
*/
module.exports = mongoose.model('User', userSchema);