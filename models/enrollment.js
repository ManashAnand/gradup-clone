import { Schema, model, models } from 'mongoose'
import mongoose from 'mongoose'
import '@models/user'
import '@models/courses'

const enrollmentSchema = new Schema({
  userId: {
    type: String,
    ref: 'User', //reference to user model
    required: true,
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Courses', //reference to courses model
    required: true,
  },
  progressBar: {
    type: [[Boolean]],
  },
  progress: {
    type: Number,
    min: 0,
    max: 100,
    default: 0,
  },
})

const Enrollment = models.Enrollment || model('Enrollment', enrollmentSchema)
export default Enrollment
