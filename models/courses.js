import { Schema, model, models } from 'mongoose'
import mongoose from 'mongoose'

const ChapterSchema = new Schema({
  lecture: String,
  lectureDescription: String,
  lectureURL: String,
  likes: Number,
  dislikes: Number,
  outerLinks: String,
})

const ModuleSchema = new Schema({
  moduleName: String,
  lectures: [ChapterSchema],
})

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
  demoVideoURL: {
    type: String,
  },
  moduleData: {
    type: [ModuleSchema],
  },
  registeredUsers: {
    type: Number,
  },
  totalModules: {
    type: Number,
  },
  totalLectures: {
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
