const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id : {
        type: String,
        unique : true
    },
    name : String,
    password : String,
    email : String,
    created_at : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);