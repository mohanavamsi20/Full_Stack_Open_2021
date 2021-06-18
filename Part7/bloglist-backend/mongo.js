const mongoose = require('mongoose')

const url =
  `mongodb+srv://mohanavamsi20:${password}@cluster0.pttje.mongodb.net/bloglist?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true })

const blogSchema = mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})


const Blog = mongoose.model('Blog', blogSchema)