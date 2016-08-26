var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Post = new Schema({
  body              : String, // contents of the post
  author            : String, // name of the author
  date              : { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', Post);
