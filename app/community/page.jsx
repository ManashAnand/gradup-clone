import React from 'react'
import styles from './styles.module.css'

export default function Community() {
  return (
    <div className={`w-screen text-left p-10 ${styles['headingbox2']}`}>
      <p
        className={`text-center ${styles['textnew']} text-white mb-2 text-5xl font-semibold ${styles['animate-charcter']}`}
      >
        GradUp Club
      </p>
      <p className='text-2xl text-white mb-8 text-center underline underline-offset-8 decoration-white'>
        {' '}
        A club to support you.{' '}
      </p>
      <p className={`text-left text-xl mb-4 text-white ${styles['textform']}`}>
        Join GradUp club of over 15k college students. We invite you to join our
        vibrant WhatsApp club, where like-minded individuals gather to share
        knowledge, exchange ideas, and foster engaging discussions.
      </p>
      <p className={`text-left text-xl mb-4 text-white ${styles['textform']}`}>
        In our club, you will have the opportunity to connect with individuals
        who share your enthusiasm for Entrepreneurship. Whether you're a
        beginner seeking guidance or an expert looking to share your expertise,
        our club provides a supportive and inclusive space for everyone.
      </p>
      <p className={`text-left text-xl mb-2 text-white ${styles['textform']}`}>
        Here's what you can expect by joining us:
      </p>
      <ul className='text-xl'>
        <li className={`text-left text-white ${styles['textform']}`}>
          1) Engaging Discussions
        </li>
        <li className={`text-left text-white ${styles['textform']}`}>
          2) Knowledge Sharing
        </li>
        <li className={`text-left text-white ${styles['textform']}`}>
          3) Networking Opportunities
        </li>
        <li className={`text-left text-white ${styles['textform']}`}>
          4) Resource Exchange
        </li>
        <li className={`text-left text-white ${styles['textform']}`}>
          5) Entrepreneurship support and Encouragement
        </li>
      </ul>
      <div className=' my-20 flex flex-wrap gap-6 justify-evenly'>
        <a
          className='my-auto'
          href='https://chat.whatsapp.com/CvRIkXx9Xw0LYxgltYU1l4'
          target='_blank'
        >
          <span
            style={{ backgroundColor: '#25d366' }}
            className='p-5 rounded-md flex'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              fill='white'
              class='bi bi-whatsapp'
              viewBox='0 0 16 16'
            >
              <path d='M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z' />
            </svg>
            <p className='ml-3 text-white text-lg'>Join our GradUp Club</p>
          </span>
        </a>
        <div
          className='block'
          style={{ height: '60vh', borderLeft: '2px solid grey' }}
        ></div>
        <img width='350' src='/assets/images/groupchat.jpg'></img>
      </div>
    </div>
  )
}
