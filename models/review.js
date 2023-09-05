import { Schema, model, models } from 'mongoose'
import mongoose from 'mongoose'

const reviewSchema = new Schema({
  user: {
    type: String,
  },
  content: {
    type: String,
  },
})

const Review = models.Review || model('Review', reviewSchema)

export default Review
