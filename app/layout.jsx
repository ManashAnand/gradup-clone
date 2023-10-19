import '@styles/globals.css'
import Navbar from '@components/Navbar'
import Head from 'next/head'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
import Footer from '@components/Footer'
import Watsapp from '@components/Watsapp'
import Script from 'next/script'
import styles from './styles.module.css'

export const metadata = {
  title: 'GradUp - Transforming Aspirations into Careers',
  description: 'GradUp gives students the chance to maximize their potential locating upskilling programs, internship, startup, live projects, job opportunities catered to their unique skill sets & interests.',
}
const Layout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/assets/icons/favicon.ico'></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Helvetica+Neue:wght@300;400;700&display=swap'
          rel='stylesheet'
        ></link>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;700&display=swap'
        />

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
        <meta
          name='p:domain_verify'
          content='eaddbbae73971743e1464497eadd174d'
        />
      </head>
      <body>
        <Provider>
          <div className={styles['main']}>
            <div className={styles['gradient']} />
          </div>

          <main className={styles['app']}>
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
