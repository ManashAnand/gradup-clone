"use client"
import '@styles/globals.css';
import Navbar from '@components/Navbar';
import Head from 'next/head';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import Footer from '@components/Footer';
import Watsapp from '@components/Watsapp';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Spinner from "@components/Spinner"
import { useState } from 'react';
// import Spinner2 from '@components/Spinner2';
export const metadata = {
    title:"GradUp - Transforming Dreams into Careers",
    description:"Transforming Dreams Into Careers"
    
}
const Layout = ({children}) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setLoading(false);
    };

    import('next/router').then((router) => {
      if (router?.events) {
        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);
      }
    });

    return () => {
      import('next/router').then((router) => {
        if (router?.events) {
          router.events.off('routeChangeStart', handleStart);
          router.events.off('routeChangeComplete', handleComplete);
          router.events.off('routeChangeError', handleComplete);
        }
      });
    };
  }, [router]);

  useEffect(() => {
    const func=()=>{
      window.scrollTo(0,0)
    }
    import('next/router').then((router) => {
      if (router?.events) {
        router.events.on('routeChangeComplete',func)
      }
    });
    return()=>{
      import('next/router').then((router) => {
        if (router?.events) {
          router.events.off('routeChangeComplete',func)
        }
      });
    }
  },[router.events])
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
            {loading && <GlobalSpinner />}
            </body>
        </html>
      );
}

export default Layout