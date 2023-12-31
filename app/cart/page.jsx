'use client'
import CourseRoutingBtn from '@components/CartItems/CourseRoutingBtn'
import useSWR from 'swr'
import Spinner from '@components/Spinner'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
async function fetcher(url) {
  const res = await fetch(url)
  return await res.json()
}
export default function Cart2() {
  const [subTotal, setSubTotal] = useState(0)
  const [purchasedId, setPurchasedId] = useState([])
  const router = useRouter()
  const { data: session } = useSession()
  const email = session?.user.email
  const { data, error, isLoading } = useSWR(
    `/api/cart?email=${session?.user.email}`,
    fetcher
  )
  if (isLoading) {
    return <Spinner />
  }
  if (data) {
    // const subTotal = data?.course
    //   .reduce((sum, book) => sum + book.price, 0)
    //   .toFixed(2)
    const handleDeleteOneItem = async (id) => {
      try {
        const deleteUrl = `/api/cart?courseId=${id}&email=${email}`

        const response = await fetch(deleteUrl, {
          method: 'DELETE',
        })

        if (response.status === 204) {
          console.log('Item deleted successfully')
          window.reload()
          router.refresh()
          router.push('/cart')
        } else {
          window.reload()
          router.refresh()
          router.push('/cart')
          console.error('Error deleting item:', response.status)
        }
      } catch (error) {
        console.error('Fetch error:', error)
      }
    }

    const handlePayment = async (id, email) => {
      try {
        const type = 'enrollment'
        const amount = subTotal + parseFloat((0.18 * subTotal).toFixed(2))
        const response = await fetch('/api/payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ amount, id, email, type }),
        })
        if (response.ok) {
          const responseData = await response.json()
          console.log(responseData)

          window.location.href = responseData
        } else {
          console.error('Payment initiation failed.')
        }
      } catch (error) {
        console.error('An error occurred:', error.message)
      }
    }

    const handleClick = (e, id, title, price) => {
      const isChecked = e.target.checked
      if (isChecked) {
        setSubTotal(subTotal + price)
        setPurchasedId([...purchasedId, id])
      } else {
        setSubTotal(subTotal - price)
        setPurchasedId(purchasedId.filter((itemId) => itemId !== id))
      }
    }

    return (
      <>
        <h1 className='text-white w-full text-2xl text-left'>Shopping Cart</h1>

        <div className='text-white  h-full w-full xl:flex '>
          <div className='text-white  xl:w-[66%] p-4'>
            <div className=' flex justify-between items-center px-2'>
              <div className='text-yellow-500 text-xl'>
                Item-{data?.course.length}
              </div>
              {/* <div> Delete</div> */}
            </div>

            {/* <CartItems CartData={CartData}/> */}

            {data?.course?.map((cartBook) => {
              return (
                <div key={cartBook?._id}>
                  <div className='text-white min-h-72 mb-4 xl:mb-0  xl:flex  xl:h-[12rem] xl:mt-4 rounded-md bg-slate-800'>
                    <div className='  flex justify-center items-center flex-col xl:w-[20%] '>
                      <img
                        src={cartBook?.imageURL}
                        alt='book cover'
                        className='w-[6rem] h-[6rem] rounded-md '
                      />
                    </div>
                    <div className='  xl:w-[30%] flex justify-center items-center'>
                      {cartBook?.title}
                    </div>
                    <div className='  xl:w-[5%] flex justify-center items-center'>
                      +
                    </div>
                    <div className='  xl:w-[40%] p-2  rounded-md border border-white xl:h-3/5 xl:p-0 xl:mt-8'>
                      <div className=' flex justify-around items-center xl:h-[45%] '>
                        {/*cartBook?.author */}
                        <span>Select now →</span>
                        <div>
                          <label
                            htmlFor='red-checkbox '
                            className='ml- text-sm font-medium text-yellow-300'
                          >
                            <input
                              onClick={(e) =>
                                handleClick(
                                  e,
                                  cartBook?._id,
                                  cartBook?.title,
                                  cartBook?.price
                                )
                              }
                              id={cartBook?._id}
                              type='checkbox'
                              className='w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer'
                            />
                            <span className='ml-2 text-lg'>Select</span>
                          </label>
                        </div>
                      </div>
                      <div className=' flex justify-around items-center xl:h-[45%]'>
                        ₹{cartBook?.price}
                        <span
                          className='text-red-500 cursor-pointer'
                          onClick={() => handleDeleteOneItem(cartBook?._id)}
                        >
                          {/* ,userEmail */}
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-6 h-6'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className=' mb-12 text-white max-h-[25rem] rounded-md bg-slate-800 xl:w-[34%] p-5  xl:translate-x-14 xl:translate-y-8'>
            <div className=' flex  items-center p-2 text-2xl '>
              Bill Details
            </div>
            <div className=' flex justify-between items-center p-2'>
              SubTotal
              <span>₹{subTotal}</span>
            </div>
            <div className=' flex justify-between items-center p-2'>
              Total Discount
              <span>-₹0</span>
            </div>
            <div className=' flex justify-between items-center p-2'>
              GST@18%
              <span>₹{(0.18 * subTotal).toFixed(2)}</span>
            </div>
            <div className=' flex justify-between items-center p-2'>
              Total Amount
              <span>
                ₹{subTotal + parseFloat((0.18 * subTotal).toFixed(2))}
              </span>
            </div>
            <div className=' flex justify-between items-center p-2'>
              <button
                className='bg-yellow-500 hover:bg-yellow-700 w-full text-white font-bold py-2 px-4 rounded'
                onClick={() => handlePayment(purchasedId, email)}
              >
                Make Payment
              </button>
            </div>

            <div className=' flex justify-between items-center p-2 '>
              <input
                type='text'
                className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[58%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Coupon Code'
              />
              <button class='bg-transparent hover:bg-blue-500 w-[40%] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded hidden xl:block '>
                Apply
              </button>
            </div>
            <CourseRoutingBtn />
          </div>
        </div>

        <div className='  text-white w-full text-2xl text-left mt-4'>
          Previous Order
        </div>
        <div className='  text-white w-full text-2xl text-left mt-2 '>
          <div class='container m-auto sm:grid grid-cols-3 gap-4 py-2 px-6 flex flex-col '>
            {data?.enrollment?.map((course) => {
              return (
                <>
                  <div
                    key={course.id}
                    className='flex max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-slate-700'
                  >
                    <div className='relative overflow-hidden bg-cover bg-no-repeat'>
                      <img
                        className='rounded-t-lg h-full'
                        src={course?.courseId?.imageURL}
                        alt=''
                      />
                    </div>
                    <div className='p-6 flex flex-col flex-start items-center justify-around '>
                      <p className='text-base text-neutral-600 dark:text-neutral-200 flex justify-center items-center'>
                        {course?.courseId?.title}
                      </p>
                      <p className='text-base text-neutral-600 dark:text-neutral-200 flex justify-center items-center'>
                        ₹{course?.courseId?.price}
                      </p>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </>
    )
  }
}
