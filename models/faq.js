import { Schema, model, models } from 'mongoose'

const faqSchema = new Schema({
  faq: [
    {
      question: {
        type: String,
      },
      answer: {
        type: String,
      },
    },
  ],
})

const FAQ = models.FAQ || model('FAQ', faqSchema)
export default FAQ
