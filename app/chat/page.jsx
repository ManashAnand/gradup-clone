

import ChatProfileUI from '@components/ChatProfileUI'
import ExpertProfile from '@components/chat/ExpertProfile'
import React from 'react'



const chat = () => {

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
       
        <div className=" w-[90%] flex flex-col xl:grid grid-cols-4 gap-4 rounded-xl">
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
          <ExpertProfile/>
          <ExpertProfile/>
          <ExpertProfile/>
          <ExpertProfile/>
        </div>


        <div className=" sm:w-[90%] w-screen  text-3xl font-bold text-black my-4">
        How Chatting with an { }
        <span className='font-semibold text-[#1C4980]'>
          Experts
        </span>
        
        { } can help you?
        </div>
        <div className="text-md sm:w-[90%] w-[80%] text-left pb-8">
        
        There's literally no point in overthinking about your concerns when the solution to them is just a call away. Astrotalk brings to you a pool of over 500+ astrologers with whom you can contact on chat and share with them your problems across all aspects of life including love, finance, Vastu, career, luck, marriage and so on. Simply put, life is a cocktail of highs and lows, and while we enjoy the good times, the bad times, though they teach us a lot, can also leave us worried, depressed and sad. Such times can also hamper the relationship we share with other people in our lives, and we are sure that you wouldn’t want that to happen for yourself.<br/>
Astrotalk, with its exceptional astrology consultant services, caters to you the solutions to problems that you might be facing in the aforementioned aspects of life. Some problems in life are simply the consequence of astronomical factors that make it to our fate since the time we are born. To specify, there are some predefined dashas that each one of us has to go through in life. These dashas, like for example, Shani Dasha, or Rahu Dasha, bring all sorts of problems in your life. These problems can lead to loss of confidence, wealth, relationship and other such woes. Thus it is in the best interest to take necessary actions through which such problems can be averted. And astrologers have such solutions for you.<br/>
At Astrotalk, we have a pool of learned astrologers with vast experience across various astrology domains like Vedic astrology, Numerology, Tarot reading, Reiki healing, Nandi astrology, Vastu and so on. You can connect with these astrologers and chat with them and ask for solutions to your problems. Astrologers use their experience and astrological knowledge to guide you and help you with the best solutions.<br/>
Meanwhile, astrology is not only about solving problems. It also works in many other areas, like if you are planning a wedding and want to find the shubh muhurat for marriage, simply, chat with an astrologer and you will have your answer. Wondering what to name your baby or when to host the mundan ceremony for him/her? Expert astrologers consultation can help here too. Or simply if you are planning to buy a gemstone and wondering what gemstone is made for your rashi? In such circumstances too, chatting with the astrologer can help you find what gemstone would suit your current situation. AstroTalk provides you with the facility to chat with astrologer online free and paid in both ways. To find us online, you just need to search online chat with astrologer or free astro chat or chat with astrologer online free, talk to astrologer online, and chat with astrologer near me. The aim of our services is to give 100% satisfaction to the users. We offer you many free services as well like free kundali and match making.
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
                  How can I connect with an astrologer on chat?<br/>
        </span>
          To chat with astrologer online, you simply need to recharge your wallet and find the 'Chat with Astrologer' section on our app or website. Once you click on it, you can choose from hundreds of astrologers you can chat with at your convenience.<br/><br/>
        
          <span className='font-semibold '>
            Why do all the astrologers have such good ratings?<br/>

          </span>
              All the astrologers who make it to the Astrotalk platform are categorised across 3 stages. Stage 1 includes astrologers that are highly rated by our customers because of their excellent work. The Stage 2 astrologers are the ones whose ratings fall below fixed criteria. And when that happens, we intentionally remove their profile from the platform so that our customers only get to consult from the top-rated astrologers (Stage 1 astrologers). These Stage 2 astrologers are then trained by our expert astrologers, and if they do well during the training, they are brought back on the platform, and if not, they are moved to Stage 3 i.e. they are unrecruited.<br/><br/>

              <span className='font-semibold'>

                Can I chat with the same astrologers I had connected with earlier?<br/>
              </span>
              Yes, you can chat with the same astrologers multiple times on our platform. If you wish to chat to the same astrologer, simply find the ‘Order History’ section on the app or the website. Here you will find the list of all the purchases you have made on AstroTalk including your previous chats.
              <br/><br/>

              <span className='font-semibold'>
              Will my phone number be kept confidential?<br/>

              </span>
              You really don’t need to use your phone number to chat with astrologer. Also, Astrotalk respects your privacy and as a firm is obliged to keep your information well guarded so no one could ever misuse it whatsoever. You can count on us.<br/><br/>

              <span className='font-semibold'>
                How can I choose the best astrologer to get astrology consultation?<br/>
              </span>
              To get astrology consultation through the best astrologer, simply watch out for the rating the other customers may have given to the astrologers. Though we scrutinize all the astrologers ourself and bring onboard only the best ones for you, but as they say, the customer is always right.
<br/><br/>
            <span className='font-semibold'>
              Why some astrologers on the app are so expensive?<br/>
              
            </span>
              Astrotalk promises the best services to its customers and thus recruits well-experienced astrologers after thorough scrutiny. Most of the astrologers we have onboard entertain an experience of over 10+ years. This is to ensure the predictions or any other information they share with you is based on their broad knowledge, so you always receive accurate information. Also, AstroTalk saves your precious time by helping you consult expert astrologers from the comfort of your home, thus saving your time and money. We maintain strict standards and offer optimum quality. So in a nutshell, our service is qualitative and not expensive.<br/><br/>

              <span className='font-semibold'>
                Why should I choose Astrotalk for astrology consultation?<br/>
              </span>
                Astrotalk has always worked to offer the best service to its customers, and the result of the same is exceptional ratings and reviews that Astrotalk has garnered on Google, PlayStore, Facebook and other such platforms. It is the successful predictions that have inspired people to leave a good word for us and we continue to live upon that thrust of them.<br/><br/>
                Does chatting with an astrologer cost more than talking to an astrologer?<br/>
                It simply depends on your and the astrologer’s typing speed. However, if you are not a great talker over a call, then chatting with an astrologer is the best option for you.<br/><br/>

                <span className='font-semibold'>
                  How genuine is Astrotalk?<br/>
                </span>
                          
          Genuity can be ensured in two ways. Firstly, from the Astrotalk side, and secondly, from the astrologers' side. And we have got both the areas covered. Astrotalk's prime motive is to give the user the most genuine astrology experience. And to do the same, Astrotalk ensures only the best astrologers make it to the platform. How do we do so? Firstly, before recruiting any new astrologer on Astrotalk, s/he has to go through an interview round conducted by the most experienced astrologers on Astrotalk. This way, we test his/her knowledge of astrology before they are able to interact with the users. Secondly, a team of astrologers is always present to train the astrologers from time to time and help them in learning new skills. And thirdly, users are motivated to rate the astrologers after every session, so that they can be judged accordingly. If the astrologer's rating falls below 4-star, he or she is taken down. This is one of the ways we adopt to ensure Astrotalk is the most genuine platform for you to talk to astrologers. It is these steps due to which we are able to secure a good rating across all major rating platforms such as Google, Play Store, etc.<br/>

        </div>




      </div>
    </>
  )
}

export default chat
