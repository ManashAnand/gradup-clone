

import ChatProfileUI from '@components/ChatProfileUI'
import ExpertProfile from '@components/chat/ExpertProfile'
import React from 'react'
import mentor1 from '../../public/assets/mentors/Abhinabacompress.jpg'
import mentor2 from '../../public/assets/mentors/mentor3compress.webp'
import mentor3 from '../../public/assets/mentors/Mohitcompress.jpg'
import mentor4 from '../../public/assets/mentors/Dharmendracompress.jpg'
// import mentor6 from '../../public/assets/mentors/mentornew1.jpg'
// import mentor7 from '../../public/assets/mentors/Saurabh Kumar.jpg'


const chat = () => {

  const experts = [
    {
      "name": "Abhinaba Chakraborty",
      "expertise": "Web Development",
      "imageUrl":mentor1
    },
    {
      "name": "Luv Saxena",
      "expertise": "Data Science",
      "imageUrl":mentor2
    },
    {
      "name": "Mohit Agarwal",
      "expertise": "Artificial Intelligence",
      "imageUrl":mentor3
    },
    {
      "name": "Dharmendra Kumar",
      "expertise": "Cybersecurity",
      "imageUrl":mentor4
    }
  ]
  

  return (
    <>
      <div className="w-screen  flex items-center justify-center sm:flex-col pb-4 bg-white flex-row">

      <div className="  my-4 flex justify-between items-center text-black  flex-col sm:flex-row w-[90%]  overflow-hidden">
          <div className="sm:w-[40%] w-full   flex justify-between items-center flex-row ">


        {/* model changes here */}

          <button  type="button" class="text-white bg-[#1C4980]  hover:bg-[#1C4980] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none h-full">Chat with Expert</button> 

         

         {/* model changes end */}

          <button type="button" className=" bg-white border  border-gray-300 focus:outline-none hover:bg-gray-100   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#EBF2FF]  dark:border-gray-600  dark:hover:border-gray-600 text-blue-500">Available balance</button>
          
           <button type="button" className=" bg-white border  border-gray-300 focus:outline-none hover:bg-gray-100   font-medium rounded-lg  px-5 sm:py-2.5 me-2 mb-2 dark:bg-[#EBF2FF]  dark:border-gray-600  dark:hover:border-gray-600 text-blue-500 text-xs sm:text-sm py-5">Recharge</button>
          
          </div>
          <div className="sm:w-[40%] w-full   flex justify-end items-center flex-row ">

<button type="button" class="text-white bg-[#1C4980]  hover:bg-[#1C4980] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none h-full">Filter</button> 

<button type="button" className=" bg-white border  border-gray-300 focus:outline-none hover:bg-gray-100   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#EBF2FF]  dark:border-gray-600  dark:hover:border-gray-600 text-blue-500">Sort By</button>

<input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5   dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 -translate-y-1" placeholder="Search  here..." />

  

</div>
        </div>


      </div>
   



      <div className="w-screen  flex items-center justify-center sm:flex-col pb-4 bg-white flex-row">
       
        <div className="w-[90%] flex flex-col xl:grid grid-cols-3 2xl:grid-cols-4 gap-4 rounded-xl">
            <ChatProfileUI/>
            <ChatProfileUI/>
            <ChatProfileUI/>
            <ChatProfileUI/>
            <ChatProfileUI/>
            <ChatProfileUI/>
            <ChatProfileUI/>
            <ChatProfileUI/>
            <ChatProfileUI/>
            <ChatProfileUI/>
            <ChatProfileUI/>
            <ChatProfileUI/>
        </div>
      </div>

      <div className="w-screen bg-white flex flex-col justify-center items-center pt-5">
        <div className=" w-[90%] text-3xl font-bold text-[#1C4980]">
            GradUp Experts 
        </div>

        <div className=" flex flex-col sm:flex-row max-w-[90%] gap-4 pb-4">
          {
            experts?.map((item) => {
              return(
                <>
                <ExpertProfile imageUrl={item?.imageUrl} name={item?.name} expert={item?.expertise}/>
                </>
              )
            })
          }

        </div>


        <div className=" sm:w-[90%] w-screen  text-3xl font-bold text-black my-4">
        How Chatting with an { }
        <span className='font-semibold text-[#1C4980]'>
          Experts
        </span>
        
        { } can help you?
        </div>
        <div className="text-md sm:w-[90%] w-[80%] text-left pb-8">
        
        Chatting with a corporate expert can provide invaluable insights and guidance across various facets of business. These professionals typically possess extensive knowledge and experience in their respective fields, offering practical advice and solutions tailored to your specific challenges. Interacting with a corporate expert allows you to tap into a wealth of industry-specific information, staying abreast of current trends, best practices, and potential pitfalls.
<br/>
Through conversations with a corporate expert, you can gain clarity on complex business issues, enabling better decision-making. They can share lessons learned from their own experiences, helping you navigate obstacles and optimize strategies. Furthermore, discussing your concerns with a corporate expert fosters networking opportunities, potentially connecting you with other industry professionals, partners, or resources.
<br/>
In today's dynamic business landscape, where adaptability is key, chatting with a corporate expert facilitates continuous learning and professional development. Their insights can enhance your problem-solving skills, broaden your perspective, and empower you to make informed choices that contribute to the overall success and sustainability of your business. Overall, engaging with a corporate expert is a valuable investment in your growth and effectiveness as a business leader.
        </div>

        <div className=" w-[90%] text-3xl font-bold text-black my-4">
        Chat With { } 
        <span className='font-semibold text-[#1C4980]'>
          Experts
        </span>
        
        { } - FAQs
        </div>  

        <div className="text-md sm:w-[90%] w-[80%] text-left pb-8">
        <span className='font-semibold'>
  How can I enroll in courses on GradUp?<br/>
</span>
To enroll in courses on GradUp, you can start by creating an account and then browse through our course catalog. Once you find a course you're interested in, click on it to view the details. You can then proceed to enroll by selecting the desired payment option and completing the checkout process. After successful enrollment, you'll have access to the course materials and can begin your learning journey.<br/><br/>

<span className='font-semibold'>
  Why do all the courses on GradUp have high ratings?<br/>
</span>
All courses on GradUp undergo a rigorous evaluation process. We categorize our courses into different tiers. Tier 1 includes courses that have received exceptional ratings from our students due to their high-quality content and effective teaching methods. Courses in Tier 2 may fall below certain rating criteria, leading to their temporary removal. However, we provide additional support and training to instructors in Tier 2, and if they meet our standards, their courses are reintroduced. Courses in Tier 3 are those that do not meet the criteria even after additional training and are permanently removed.<br/><br/>

<span className='font-semibold'>
  Can I access the same courses I enrolled in at a later time?<br/>
</span>
Certainly! You can access your enrolled courses at any time on GradUp. Simply log in to your account and navigate to the 'My Courses' section. Here, you'll find a list of all the courses you've enrolled in, along with easy access to the course materials and resources.<br/><br/>

<span className='font-semibold'>
  Is my personal information secure with GradUp?<br/>
</span>
Absolutely. GradUp takes the security and privacy of your personal information seriously. We implement robust measures to ensure the confidentiality of your data. You can trust us to safeguard your information and prevent any unauthorized use.<br/><br/>

<span className='font-semibold'>
  How can I choose the best course for my learning needs?<br/>
</span>
To find the best course for your learning needs on GradUp, you can check the course ratings and reviews provided by other learners. Additionally, we thoroughly vet all instructors and their course content to ensure high quality. You can rely on the feedback from your peers and our rigorous selection process to make informed decisions.<br/><br/>

<span className='font-semibold'>
  Why are some courses on GradUp priced higher than others?<br/>
</span>
GradUp is committed to offering top-notch courses taught by experienced instructors. The pricing of courses reflects the expertise and quality of content provided. Our instructors often have extensive industry experience, ensuring that you receive valuable insights and knowledge. We believe in maintaining high standards and delivering premium educational experiences to our users.<br/><br/>

<span className='font-semibold'>
  Why should I choose GradUp for online learning?<br/>
</span>
GradUp has consistently focused on delivering excellence in online education. Our platform boasts positive reviews and ratings on various platforms, showcasing the success stories of our learners. We prioritize quality, accessibility, and user satisfaction, making GradUp a trusted choice for individuals seeking top-notch courses to enhance their skills and knowledge.<br/><br/>

<span className='font-semibold'>
  Does enrolling in an online course on GradUp cost more than traditional classroom learning?<br/>
</span>
The cost of enrolling in an online course on GradUp is often more affordable than traditional classroom learning. We aim to provide accessible and cost-effective education without compromising on quality. Online learning allows you to save on commuting and accommodation expenses, making it a convenient and economical choice for learners.<br/><br/>

<span className='font-semibold'>
  How reliable is GradUp as an online learning platform?<br/>
</span>
Reliability is a key aspect of GradUp's commitment to our users. We ensure the authenticity of courses and instructors through a stringent vetting process. Instructors are interviewed, trained, and continuously monitored to maintain the platform's integrity. User feedback and ratings play a crucial role in ensuring the reliability of GradUp as a trusted online learning platform. Your educational journey is in safe hands with GradUp.
</div>


      </div>
    </>
  )
}

export default chat
