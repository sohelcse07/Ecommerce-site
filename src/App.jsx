import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import TopProducts from './components/TopProducts/TopProducts'
import Banner from './components/Banner/Banner'
import Subscribe from './components/Subscribe/Subscribe'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
// import AOS from "aos";
// import "aos/dist/aos.css";  

function App() {
  const [count, setCount] = useState(0)

  // React.useEffect(() => {
  //   AOS.init({
  //     offset: 100,
  //     duration: 800,
  //     easing: "ease-in-sine",
  //     delay: 100,
  //   });
  //   AOS.refresh();
  // }, []);

  return (
    <>
   <Navbar/>
   <Hero/>
   <Products/>
   <TopProducts/>
   <Banner/>
   <Subscribe/>
   <Products/>
   <Testimonials/>
   <Footer/>
    </>
  )
}

export default App
