import '@styles/globals.css';
import Navbar from '@components/Navbar';
import Head from 'next/head';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import Footer from '@components/Footer';
import Watsapp from '@components/Watsapp';
export const metadata = {
    title:"GradUp - Transforming Dreams into Careers",
    description:"Transforming Dreams Into Careers"
    
}
const Layout = ({children}) => {
    return (
        <html lang='en'>
          <head><link rel="icon" href="/assets/icons/favicon.ico"></link></head>
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