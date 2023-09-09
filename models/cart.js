import { Schema, model, models } from 'mongoose'

const cartSchema = new Schema({
  userId: { type: 'String' },
  courseId: { type: 'String' },
})

const Cart = models.Cart || model('Cart', cartSchema)
export default Cart
