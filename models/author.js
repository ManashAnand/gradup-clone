import { Schema, model, models } from 'mongoose'

const authorSchema = new Schema({
  name: {
    type: String,
  },
  designation: {
    type: String,
  },
  imageURL: {
    type: String,
  },
  description: {
    type: String,
  },
})

const Author = models.Author || model('Author', authorSchema)
export default Author
