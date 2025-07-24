import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Breadcrumbs from './Components/Breadcrumbs';
import AllProduct from './Components/AllProducts/AllProduct';
import Qualitypolicy from './Components/Qualitypolicy/Qualitypolicy';
import ProductById from './Components/ProductPage/ProductById';
import Contact from './Components/ContactUs/Contact';
import Gallery from './Components/Gallery/Gallery';
import Videos from './Components/Videos/Videos';
import AboutUs from './Components/AboutUs/AboutUs';
import { useEffect, useState } from 'react';
import Popup from './Components/Popup/Popup';
import Cookies from 'js-cookie';
import $ from 'jquery';
import axios from 'axios';

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [ip, setIp] = useState(null);
  const texts = [
    "Superior...",
    "Qualitative...",
    "Creative..."
  ];
  const typingSpeed = 50; // Speed in milliseconds
  const pauseTime = 1500; // Pause time before deleting in milliseconds

  const shownIp = localStorage.getItem('shownIp');

  useEffect(() => {
    // Get the user's IP address
    const fetchIpAddress = async () => {
      try {
        const response = await axios.get('https://api.ipify.org?format=json');
        const userIp = response.data.ip;
        setIp(userIp);

        // Check if popup has been shown for this IP

        if (shownIp !== userIp) {
          setShowPopup(true);
        }
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };

    fetchIpAddress();
  }, []);

  const handleClosePopup = () => {
    if (ip) {
      localStorage.setItem('shownIp', ip);
    }
    setShowPopup(false);
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
  };


  return (
    <div onContextMenu={handleContextMenu}>
      {showPopup && !shownIp ? <Popup texts={texts} speed={typingSpeed} pause={pauseTime} closePopup={handleClosePopup} /> :
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Allproduct" element={<AllProduct />} />
            <Route path="/qualitypolicy" element={<Qualitypolicy />} />
            <Route path="/Allproduct/:id" element={<ProductById />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/photos" element={<Gallery />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
          <Footer />
        </Router>
      }
    </div>
  )


}

export default App;
