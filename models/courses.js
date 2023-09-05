import { Schema, model, models } from 'mongoose'
import mongoose from 'mongoose'

const courseSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  author: {
    type: String,
  },
  imageURL: {
    type: String,
  },
  chapter: {
    type: [String],
  },
  chapterDesc: {
    type: [String],
  },
  VideoURL: {
    type: [String],
  },
  registeredUsers: {
    type: Number,
  },
  tags: {
    type: [String],
  },
  Review: {
    type: [mongoose.Types.ObjectId],
    ref: 'review', // Reference to the Review model
  },
})

const Courses = models.Courses || model('Courses', courseSchema)
export default Courses
