const mongoose = require('mongoose');

const LolPatchSchema = new mongoose.Schema({
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

module.exports = mongoose.model('LolPatch', LolPatchSchema);
