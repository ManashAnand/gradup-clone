import { Schema, model, models } from 'mongoose'
import mongoose from 'mongoose'
import '@models/author'

const ContentSchema = new Schema({
  head: { type: String },
  data: { type: [String] },
})

const blogSchema = new Schema({
  topic: {
    type: String,
  },
  intro: {
    type: String,
  },
  img: {
    type: String,
  },
  content: {
    type: [ContentSchema],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
  },
})

const Blog = models.Blog || model('Blog', blogSchema)
export default Blog
