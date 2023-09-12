import { Schema, model, models } from 'mongoose'
import mongoose from 'mongoose'

const paymentSchema = new Schema({
  merchantId: {
    type: String,
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
  },
  merchantTransactionId: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
})
const Payment = models.Payment || model('Payment', paymentSchema)
export default Payment
