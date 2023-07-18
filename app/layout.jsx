"use client"
import '@styles/globals.css';
import Navbar from '@components/Navbar';
import Head from 'next/head';
import Nav from '@components/Nav';
import { useEffect } from 'react';
import Provider from '@components/Provider';
import Footer from '@components/Footer';
import Watsapp from '@components/Watsapp';
export const metadata = {
    title:"GradUp - Transforming Dreams into Careers",
    description:"Transforming Dreams Into Careers"
    
}
const Layout = ({children}) => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
   
    return (
        <html lang='en'>
          <head>
            <link rel="icon" href="/assets/icons/favicon.ico"></link>
            {/* <!-- Google tag (gtag.js) --> */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-85JYL3PDMK"></script>
            <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-85JYL3PDMK');
      `,
    }}
  ></script>
          </head>
            <body>
            <Provider>
            <div className='main'>
              <div className='gradient' />
            </div>

            <main className='app'>
              <Nav />
              {children}
              <Watsapp/>
              <Footer />
            </main>
            </Provider>
            </body>
        </html>
      );
}

export default Layout