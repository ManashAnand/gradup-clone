import React from 'react'

const page = () => {
  let logos=["/assets/images/nitkuruk.png","/assets/images/christ.png","/assets/images/nithamir.png","/assets/images/nmims.png","/assets/images/Ramjas.png","/assets/images/xlrijamshedpur.png","/assets/images/dypatil.png","/assets/images/bitmesra.png","/assets/images/bitsnew.png","/assets/images/hansraj.png","/assets/images/iimindore.png","/assets/images/iimkashi.png","/assets/images/iimrohtak.png","/assets/images/iimsirmaur.png","/assets/images/iimudaipur.png","/assets/images/iitdelhinew.png","/assets/images/iitkanpurnew.png","/assets/images/iitkharagnew.png","/assets/images/nitkarnataka.png","/assets/images/nitsikkim.png","/assets/images/pgdav.png","/assets/images/SGGSCC.png","/assets/images/src.png","/assets/images/symbiosis.png"]
  return (
    <div className='text-white my-20'>
      <p className="mb-14 text-center text-5xl animate-charcter text-white underline decoration-white underline-offset-8">Presence in Academia</p>
      <div className='flex justify-center items-center flex-wrap gap-12 collegeslogo'>
         {logos.map((ele,i)=>{
          return(
            <div>
              <img width="150" src={ele} alt={ele}></img>
            </div>
          )
         })}
      </div>
      <p className='text-center text-white animate-charcter text-5xl textnew mt-16 mb-6'>And many more ....</p>
      {/* IIM Bodhgaya
      Hansraj college, DU
      Shaheed Rajguru college, DU
      Sri Guru Gobind Singh College, DU 
      PG DAV College, DU
      NIT Jamshedpur
      IIT Kharagpur 
      IIM Kafhipur 
      IIM Sirmaur 
      IIM Indore 
      Dr. DY Patil Pune 
      BITS Pilani (Hyderabad campus)
      Bundelkhand University Jhansi 
      Rajdhani College, DU 
      KL University, Hyderabad 
      Ramjas College, DU 
      GNIOT Greater Noida 
      AIESEC ,DU
      NIT Sikkim
      Shaheed Sukhdev College of Business Studies 
      XLRI Jamshedpur 
      BIT Mesra 
      Aatma Ram Sanatam college, DU 
      Xt Xavier College, Kolkata 
      IIM Rohtak 
      IIM Trichy 
      LBSIM Delhi 
      SIDTM Pune 
      NMIMS Mumbai 
      IIT Kanpur 
      SOIL Gurgaon 
      IIT Jodhpur 
      BIIB Pune 
      Delhi School of Economics 
      PUMBA 
      Jamia Milia Islamia 
      IIT Dhanbad 
      Christ University Banglore 
      IIT Delhi 
      NIT Agartala 
      IIIT Una 
      IIIT Gwalior 
      MNIT Allahabad 
      Faculty of Social Sciences BHU 
      IMI Bhubneswar 
      Symbiosis Noida 
      Motilal Nehru College ,DU 
      Kirorimal College, DU 
      NMIMS Hyderabad 
      Delhi Technical University 
      IIM Ranchi 
      IIM Udaipur 
      IIM Vishakhapatnam 
      NIT Hamirpur 
      NIT Karnataka 
      Ponducherry University  */}
    </div>
  )
}

export default page