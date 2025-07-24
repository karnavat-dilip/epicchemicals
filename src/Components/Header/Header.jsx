import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import './Header.css'
import glogo from '../../Assets/Epic-chemical/logo.png'


import { MdDownload } from "react-icons/md";
import { TfiAngleDown } from "react-icons/tfi";
import { stack as Menu } from 'react-burger-menu'
import { Accordion, styled } from '@mui/material';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaHome } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaCircleInfo } from "react-icons/fa6";
import { MdEqualizer } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";
import { PiArrowUpBold } from "react-icons/pi";
import { FaSquareWhatsapp } from "react-icons/fa6";

import stardelta from '../../Assets/Epic-chemical/dolomite_powder.jpg'
import atspanel from '../../Assets/Epic-chemical/ccp.jpg'
import dolmccb from '../../Assets/Epic-chemical/coated.jpg'
import dolgold from '../../Assets/Epic-chemical/calcite.jpg'

import { v4 as uuidv4 } from 'uuid';
import AOS from 'aos'
import 'aos/dist/aos.css'
import broucher from '../../Assets/Assets/fusion-micron.pdf'
import { Checkmark } from 'react-checkmark'
import TranslateComponent from '../TranslateComponent';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Link, NavLink } from 'react-router-dom';


const CustomAccordion = styled(Accordion)(({ theme }) => ({
    textTransform: 'uppercase',
    left: '-15px',
    boxShadow: 'none',
}));

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [expanded, setExpanded] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [open, setOpen] = useState(false);
    const [opencheckcircle, setopencheckcircle] = useState(false);
    const [loading, setloading] = useState(false)
    const [menu, setmenu] = useState(false)
    const [emailData, setEmailData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    });
    var stone
    useEffect(() => {
        const setupListeners = () => {
            const dropdown = document.getElementById("dropdownid");
             stone = document.getElementById("stoneid");

      if (!dropdown || !stone) {
        requestAnimationFrame(setupListeners); // Wait until DOM is painted
        return;
      }

      const handleMouseOver = () => {
        stone.style.transform = 'rotateX(0deg)';
      };

      const handleMouseOut = () => {
        stone.style.transform = 'rotateX(90deg)';
      };

      dropdown.addEventListener("mouseover", handleMouseOver);
      dropdown.addEventListener("mouseout", handleMouseOut);

      // Clean up on unmount
      return () => {
        dropdown.removeEventListener("mouseover", handleMouseOver);
        dropdown.removeEventListener("mouseout", handleMouseOut);
      };
    };

    setupListeners(); // Initial call
  }, []);

    function disablepopup() {
       stone.style.transform = 'rotateX(90deg)';
    }
    const Changevalue = (e) => {
        const { name, value } = e.target;

        setEmailData({
            ...emailData,
            [name]: value,
        });
    };
    axios.defaults.withCredentials = true;
    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true)
        try {
            const response = await axios.post(`${process.env.REACT_APP_URL}/send-email`, emailData);
            console.log(response);

            console.log('Email sent successfully');
            setOpen(false);
            setopencheckcircle(true);
            setEmailData({
                name: '',
                email: '',
                number: '',
                message: ''
            })
        } catch (error) {
            alert('Error sending email');
        } finally {
            setloading(false)
        }
    };



    useEffect(() => {
        AOS.init()
    }, [])


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const Closecheckcircle = () => {
        setopencheckcircle(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 200) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Show the scroll button when the page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling
        });
    };



    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };
    const currentLocation = window.location.href;

    // useEffect(() => {

    //     const links = document.querySelectorAll('.nav-links > ul > li > a');
    //     links.forEach(link => {
    //         if (link.href === currentLocation) {
    //             link.classList.add('active');
    //         }
    //     });

    // },[])
    // useEffect(() => {

    //     const links = document.querySelectorAll('.offcanvas-menu > ul > li > a');
    //     links.forEach(link => {
    //         if (link.href === currentLocation) {
    //             link.classList.add('active');
    //         }
    //     });

    // }, [])
    // useEffect(() => {

    //     const links = document.querySelectorAll('.mobile-sub-menu > li > a');
    //     links.forEach(link => {
    //         if (link.href === currentLocation) {
    //             link.classList.add('active1');
    //         }
    //     });

    // }, [])
    // useEffect(() => {

    //     const links = document.querySelectorAll('.dropdown-content a');
    //     links.forEach(link => {
    //         if (link.href === currentLocation) {
    //             link.classList.add('active-sub-menu');
    //         }
    //     });

    // }, [])


    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const products = [
        {
            id: uuidv4(),
            img: stardelta,
            title: 'Dolomite Powder'
        },
        {
            id: uuidv4(),
            img: atspanel,
            title: 'Calcium Carbonate Powder'
        },
        {
            id: uuidv4(),
            img: dolmccb,
            title: 'Coated Calcium Carbonate Powder'
        },
        {
            id: uuidv4(),
            img: dolgold,
            title: 'Calcite Powder'
        }
    ]
 

    return (
        <>
            <header className='header-section'>
                <div className='header-tops'>
                    <div className='container'>
                        <div className='container-child'>
                            <div>
                                <h4>Welcome to our Epic Chemicals</h4>
                            </div>
                            <div>
                                <ul className='header-user-menu'>
                                    <li>
                                        <IoIosCall /><Link to='tel:+91 9426567365'>+91 9426567365</Link>
                                        <Link to='tel:+91 9978444810'>+91 9978444810</Link>
                                    </li>
                                    <li>
                                        <IoMdMail />
                                        <Link to='mailto:epicchemicals2002@gmail.com'>epicchemicals2002@gmail.com</Link>
                                    </li>


                                </ul>
                            </div>
                            <TranslateComponent />
                        </div>
                    </div>

                </div>
                <div className='header-center'>
                    <div className='container'>
                        {/* <div className='header-logo-menu'>
                            <img src={gemlogo} width='200px' height='100px' alt='logo not available'></img>
                            <img src={glogo} width='200px' height='100px' alt='logo not available'></img>
                            <img src={Iso_90012015} width='100px' height='100px' alt='logo not available'></img>
                        </div> */}
                    </div>
                </div>
                <div className='header-bottom'>
                    <nav className={isSticky ? 'sticky' : 'navbar'} style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={glogo} width='200px' height='100px' style={{
                            objectFit: 'contain', position: 'relative',
                            left: '140px',top:'-9px'
                        }} alt='logo not available'></img>
                        <div className='container'>

                            <div className={`nav-links ${isOpen ? 'open' : ''}`}>

                                <ul>
                                    <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                                    <li className="dropdown" id="dropdownid">
                                        <NavLink to='/Allproduct' activeClassName="active">product <TfiAngleDown />
                                        </NavLink>
                                        <div className="stone" id="stoneid">
                                            <div className='container'>
                                                <div className='p-list-container'>
                                                    {
                                                        products?.map((product, index) => {
                                                            return (
                                                                <div key={product.id} onClick={disablepopup}>
                                                                    <Link to={`/Allproduct/${index + 1}`}>
                                                                        <img src={product.img} width='200' style={{ alignSelf: 'center' }} />
                                                                        <h3>{product.title}</h3>
                                                                    </Link>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* <li><NavLink to="/qualitypolicy" activeClassName="active">quality policy</NavLink></li> */}
                                    <li className="dropdown">
                                        <Link>gallery <TfiAngleDown />
                                        </Link>
                                        <div className="dropdown-content">
                                            <NavLink to="/photos" activeClassName="active">Photos</NavLink>
                                            {/* <NavLink to="/videos" activeClassName="active">Videos</NavLink> */}
                                        </div>
                                    </li>
                                    <li><NavLink to="/about" activeClassName="active">About Us</NavLink></li>
                                    <li><NavLink to="/contact" activeClassName="active">Contact Us</NavLink></li>
                                </ul>


                                {/* <ul className='download'>
                                    <li>
                                        <a href={broucher} download>BROUCHER <MdDownload />
                                        </a>
                                    </li>
                                </ul> */}


                            </div>

                        </div>
                    </nav>
                </div>
            </header>
            <Dialog
                open={opencheckcircle}
                keepMounted
                onClose={Closecheckcircle}
                aria-describedby="alert-dialog-slide-description"
            >

                <DialogContent>
                    <div>
                        <Checkmark size='xxLarge' color='#01a875' />
                        <h1 style={{
                            textAlign: 'center',
                            padding: '14px'
                        }}>
                            Sent!
                        </h1>
                        <div>
                            <p>Kindly check your mail to view or download this document.</p>
                        </div>
                    </div>
                </DialogContent>

            </Dialog >
            <Dialog
                open={open}

                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >

                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <div style={{ padding: '0px 88px 0px 0px' }}>
                            <div>
                                <img src={glogo} width='100' style={{
                                    position: 'relative',
                                    left: '50%'
                                }} />
                            </div>
                            <div className='sentmail'>
                                <input type='text' placeholder='Enter your Name' name='name' onChange={Changevalue}
                                    required />
                            </div>
                            <div className='sentmail'>
                                <input type='tel' placeholder='Enter your mobile number' name='number' onChange={Changevalue}
                                    required />
                            </div>
                            <div className='sentmail'>
                                <input type='email' placeholder='Enter your Email' name='email' onChange={Changevalue}
                                    required />
                            </div>
                            <div className='sentmail'>
                                <textarea placeholder='Message...' name='message' onChange={Changevalue}
                                    required />
                            </div>
                            <div className='sentmail'>
                                <div>
                                    <button type='submit'>Submit</button>
                                </div>
                                <div>
                                    {
                                        loading ?
                                            <Box sx={{ display: 'flex' }}>
                                                <CircularProgress style={{ color: '#01a875' }} />
                                            </Box> : ''
                                    }
                                </div>
                            </div>
                        </div>
                    </form>
                </DialogContent>

            </Dialog>
            <div className="scroll-to-top" data-aos="fade-up">
                {isVisible && (
                    <button onClick={scrollToTop}>
                        <PiArrowUpBold />
                    </button>
                )}
            </div>
            <div className='Whatsapp'>
                <ul>
                    <li>
                        <Link to='https://api.whatsapp.com/send/?phone=919426567365&text&type=phone_number&app_absent=0' target='_blank'><FaSquareWhatsapp style={{
                            width: '47px',
                            height: '48px',
                            color: '#25d366'
                        }} />
                        </Link>
                    </li>
                </ul>

            </div>
            <div className="mobile-header-section d-block d-lg-none">
                {/* Start Mobile Header Wrapper */}
                <div className="mobile-header-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-between align-items-center">
                                <div className="mobile-header--left">
                                    <Link to="/" className="mobile-logo-link">
                                        <img
                                            src={glogo}
                                            alt="logo not available"
                                            width='100'
                                            className="mobile-logo-img"
                                        />
                                    </Link>
                                </div>
                                <Menu isOpen={menu} onStateChange={(state) => setmenu(state.isOpen)}
                                >
                                    <div className="offcanvas-mobile-menu-wrapper">
                                        {/* Start Mobile Menu User Top */}
                                        <div className="mobile-menu-top">
                                            <span>
                                                <b>Welcome to our Epic Chemicals</b>
                                            </span>
                                            {/* Start Header Top Menu */}
                                            <ul className="mobile-menu-user-menu">
                                                <li className="header-user-menu-link">
                                                    <IoMdMail />
                                                    <Link to="mailto:epicchemicals2002@gmail.com" target="_blank">
                                                        &nbsp;
                                                    </Link>
                                                    <b> epicchemicals2002@gmail.com</b>
                                                </li>
                                                <li className="header-user-menu-link">
                                                    <IoIosCall />
                                                    <Link to="tel:+91 9426567365" target="_blank">
                                                        <b> +91 9426567365</b>
                                                    </Link>
                                                    <Link to="tel:+91 9978444810" target="_blank">
                                                        <b>+91 9978444810</b>
                                                    </Link>
                                                </li>
                                                {/* <Link to="tel:+91 9825015702"></Link> */}
                                                {/*                <li class="header-user-menu-link"><div id="google_translate_element" class="google_translate_element"></div></li>*/}
                                            </ul>
                                            {/* End Header Top Menu */}
                                        </div>{" "}
                                        {/* End Mobile Menu User Top */}
                                        {/* Start Mobile Menu User Center */}
                                        <div className="mobile-menu-center mt-5">
                                            <form action="#" method="post">
                                                <div className="header-search-box default-search-style d-flex">
                                                    <div className="footer-subscribe-box default-search-style d-flex justify-content-center mobile-homeTitle d-flex">
                                                        {/*                        <h2>Goodluck</h2>*/}
                                                        {/*                        <h2 style="color: #ea1c26">&nbsp;Pump</h2>*/}
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        {/* End Mobile Menu User Center */}
                                        {/* Start Mobile Menu User Center */}
                                        <div className="mobile-menu-center">
                                            <form action="#" method="post">
                                                <div className="header-search-box default-search-style d-flex">
                                                    <div className="footer-subscribe-box default-search-style d-flex">
                                                        <img
                                                            className="mobile-isoImg"
                                                            src={glogo}
                                                            alt="Image not available"
                                                            width='150'
                                                        />
                                                        {/* <img
                                                            className="mobile-isoImg"
                                                            src={gemlogo}
                                                            alt="Image not available"
                                                            width='100'
                                                        /> */}
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        {/* End Mobile Menu User Center */}
                                        {/* Start Mobile Menu Bottom */}
                                        <div className="mobile-menu-bottom">
                                            {/* Start Mobile Menu Nav */}
                                            <div className="offcanvas-menu">
                                                <ul>
                                                    <li className="mobileli">

                                                        <NavLink onClick={() => setmenu(false)} to="/" activeClassName="active"><FaHome className='fa-icon' />Home</NavLink>
                                                    </li>

                                                    <li className="mobileli">

                                                        <CustomAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                                            <AccordionSummary
                                                                expandIcon={<ExpandMoreIcon />}
                                                            >
                                                                <div style={{
                                                                    height: '16px',
                                                                    display: 'flex',
                                                                    alignItems: 'center'
                                                                }}>
                                                                    <AiOutlineAppstore className='fa-icon' />
                                                                    <Link onClick={() => setmenu(false)} to='/Allproduct'>
                                                                        Products
                                                                    </Link>
                                                                </div>
                                                            </AccordionSummary>
                                                            <AccordionDetails>
                                                                <ul className="mobile-sub-menu">
                                                                    <li>
                                                                        <NavLink onClick={() => setmenu(false)} activeClassName="active" to="/Allproduct/1">Dolomite Powder</NavLink>
                                                                    </li>
                                                                    <li>
                                                                        <NavLink onClick={() => setmenu(false)} activeClassName="active" to="/Allproduct/2">Calcium Carbonate Powder</NavLink>
                                                                    </li>
                                                                    <li>
                                                                        <NavLink onClick={() => setmenu(false)} activeClassName="active" to="/Allproduct/3">Coated Calcium Carbonate Powder</NavLink>
                                                                    </li>
                                                                    <li>
                                                                        <NavLink onClick={() => setmenu(false)} activeClassName="active" to="/Allproduct/4">Calcite Powder</NavLink>
                                                                    </li>
                                                                </ul>
                                                            </AccordionDetails>
                                                        </CustomAccordion>
                                                    </li>

                                                    {/* <li className="mobileli">
                                                        <NavLink onClick={()=>setmenu(false)} activeClassName="active" to="/qualitypolicy" className="menuBtn">
                                                            <MdEqualizer className='fa-icon' />
                                                            <span>Quality Policy</span>
                                                        </NavLink>
                                                    </li> */}
                                                    <li className="mobileli">

                                                        <NavLink onClick={() => setmenu(false)} activeClassName="active" to="/about" className="menuBtn">
                                                            <FaCircleInfo className='fa-icon' />
                                                            About Us
                                                        </NavLink>
                                                    </li>
                                                    {/* <li className="mobileli">

                                                        <a
                                                            href={broucher}
                                                            download
                                                            className="downalodMenu"
                                                        >
                                                            <FaCloudDownloadAlt className='fa-icon' />
                                                            Broucher
                                                        </a>
                                                    </li> */}
                                                    <li className="mobileli">
                                                        <div>
                                                            <CustomAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                                                <AccordionSummary
                                                                    expandIcon={<ExpandMoreIcon />}

                                                                >
                                                                    <GrGallery className='fa-icon' />
                                                                    Gallery
                                                                </AccordionSummary>
                                                                <AccordionDetails>
                                                                    <ul className="mobile-sub-menu">
                                                                        <li>
                                                                            <NavLink onClick={() => setmenu(false)} activeClassName="active" to="/photos">Photos</NavLink>
                                                                        </li>
                                                                        {/* <li>
                                                                            <NavLink onClick={()=>setmenu(false)} activeClassName="active" to="/videos">Videos</NavLink>
                                                                        </li> */}

                                                                    </ul>
                                                                </AccordionDetails>
                                                            </CustomAccordion>
                                                        </div>
                                                    </li>
                                                    <li className="mobileli">

                                                        <NavLink onClick={() => setmenu(false)} activeClassName="active" to="/contact"><MdContactPhone className='fa-icon' />Contact Us</NavLink>
                                                    </li>
                                                </ul>
                                            </div>{" "}
                                            {/* End Mobile Menu Nav */}
                                        </div>{" "}
                                        {/* End Mobile Menu Bottom */}
                                    </div>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div > {" "}
                {/* End Mobile Header Wrapper */}
            </div >
        </>
    )
}

export default Header
