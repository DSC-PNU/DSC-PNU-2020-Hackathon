var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    contents: String,
    author: String,
    comment_date: {type: Date, default: Date.now()}
});
 
module.exports = mongoose.model('Comment', CommentSchema);