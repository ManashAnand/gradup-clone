import '@styles/globals.css';
import Navbar from '@components/Navbar';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import Footer from '@components/Footer';
import Watsapp from '@components/Watsapp';
export const metadata = {
    title:"GradUp",
    description:"Connecting talent to opportunities"
    
}
const Layout = ({children}) => {
    return (
        <html lang='en'>
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