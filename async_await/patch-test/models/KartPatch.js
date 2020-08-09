const mongoose = require('mongoose');

const KartPatchSchema = new mongoose.Schema({
    index : {
        type:Number,
        unique:true
    },
    title : String,
    content : String,
    created_at : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('KartPatch', KartPatchSchema);