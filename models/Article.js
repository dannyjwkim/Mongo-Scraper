var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type:String,
    unique:true,
    required:true
  },
  link: {
    type:String,
    required:true
  },
  // This only saves one note's ObjectId. ref refers to the Note model.
  note: {
    type: Schema.Types.ObjectId,
    ref: 'Note'
  },
  saved: {
    type: Boolean,
    default: false
  }
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model('Article', ArticleSchema);

// export the model
module.exports = Article;