const mongooes = require('mongoose');
const Schema = mongooes.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    snippet: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    }
}, { timestamps: true });

const Blog = mongooes.model('Blog', blogSchema);
module.exports = Blog;