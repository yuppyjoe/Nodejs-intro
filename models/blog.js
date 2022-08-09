const mysql = require('mysql');
const Schema = mysql.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    body: {
        type: String,
        required: true
    }, 
    timestamps : true
})

const Blog = mysql.model('Blog', blogSchema);

module.exports = Blog;