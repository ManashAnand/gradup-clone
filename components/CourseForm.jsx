import React, { useState } from 'react'

function CourseForm({ price }) {
  const [email, setEmail] = useState('')
  const [couponCode, setCouponCode] = useState('')
  const [basePrice, setBasePrice] = useState(price)
  const [finalPrice, setFinalPrice] = useState(basePrice)

  const handleSubmit = (e) => {
    e.preventDefault()
    // You can add form validation and submission logic here.
    console.log('Form submitted with:')
    console.log('Email:', email)
    console.log('Coupon Code:', couponCode)
    console.log('Final Price:', finalPrice)
  }

  const applyCoupon = () => {
    // Add logic here to apply the coupon and update the final price.
    // For example, let's assume the coupon code 'SUT5510' gives a discount of 150.
    if (couponCode === 'SUT5510') {
      const discountAmount = 150
      const newFinalPrice = basePrice - discountAmount
      setFinalPrice(newFinalPrice)
    }
  }

  return (
    <div className='flex flex-col justify-start bg-white w-[50%] rounded-lg p-4 min-h-[350px]'>
      <form onSubmit={handleSubmit} className='w-50'>
        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-sm font-semibold text-gray-700 mt-2 text-left'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='couponCode'
            className='block text-sm font-semibold text-gray-700 mt-2 text-left'
          >
            Coupon Code
          </label>
          <input
            type='text'
            id='couponCode'
            placeholder='Enter your coupon code (if any)'
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className='mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
          />
        </div>
        <button
          type='button'
          onClick={applyCoupon}
          className='bg-blue-500 text-white rounded-full px-3 py-1 text-sm hover:bg-blue-600'
        >
          Apply Coupon
        </button>
        <div className='mb-4 mt-2'>
          <div className='mt-1 p-2 w-full rounded-md border border-gray-300'>
            <p className='text-lg font-semibold'>Final Price:</p>
            <p className='text-2xl font-bold text-blue-500'>
              &#8377;{finalPrice}
            </p>
            <p className='text-gray-500'>Base Price: &#8377;{basePrice}</p>
          </div>
        </div>
        <button
          type='submit'
          className='bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600'
        >
          Buy Now
        </button>
      </form>
    </div>
  )
}

export default CourseForm
