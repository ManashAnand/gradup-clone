import '@styles/globals.css'
import Navbar from '@components/Navbar'
import Head from 'next/head'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
import Footer from '@components/Footer'
import Watsapp from '@components/Watsapp'
import Script from 'next/script'
export const metadata = {
  title: 'GradUp - Transforming Dreams into Careers',
  description: 'Transforming Dreams Into Careers',
}
const Layout = ({ children }) => {
  return (
    <html lang='en'>  
      <head>
        <link rel='icon' href='/assets/icons/favicon.ico'></link>
        <link href="https://fonts.googleapis.com/css2?family=Helvetica+Neue:wght@300;400;700&display=swap" rel="stylesheet"></link>

        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-85JYL3PDMK'
        ></script>
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
            <Script
              async
              data-id={process.env.DataId}
              id='chatling-embed-script'
              type='text/javascript'
              src='https://chatling.ai/js/embed.js'
            ></Script>
            <Watsapp />
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default Layout
