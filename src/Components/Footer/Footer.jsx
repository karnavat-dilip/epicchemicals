import React, { useEffect } from 'react'
import { FaFacebook, FaInstagramSquare, FaYoutube, FaLinkedin } from 'react-icons/fa'
import './Footer.css'
import glogo from '../../Assets/Epic-chemical/logo.png'
import { RiCustomerService2Line } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { TbWorldWww } from "react-icons/tb";
import AOS from 'aos'
import 'aos/dist/aos.css'

function Footer() {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <footer className='Footer'>
                <div className='container'>
                    <div className='Footer-child' data-aos="fade-down">
                        <div className='section-child' >
                            <div>
                                <img src={glogo} width='150' />
                                <p>Epic Chemicals produces Ground Calcium Carbonates (CaCO3) with series of different brightness and particle sizes as per the requirement of the industry and the customers.</p>
                                <div className='customer-service'>
                                    <RiCustomerService2Line style={{
                                        width: '45px',
                                        height: '59px'
                                    }} />
                                    <ul>
                                        <li>Customer Support</li>
                                        <li>
                                            <a href="tel:+91 9426567365">+91 94265 67365</a>
                                        </li>
                                        <li>
                                            <a href="tel:+91 9978444810">+91 99784 44810</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='section-child'>
                            <div>
                                <p>Our vision is to be a global leader in delivering high-quality Calcite Powder and Calcium Carbonate solutions that drive innovation, sustainability, and excellence across industries.
                                </p>
                                <div className='social-icon-child' style={{
                                    height: 'fitContent',
                                    display: 'contents'
                                }}>
                                    <ul>
                                        <li>

                                            <a href='https://www.facebook.com/'>
                                                <FaFacebook />
                                            </a>

                                        </li>
                                        <li>

                                            <a href='https://www.instagram.com/'>
                                                <FaInstagramSquare />
                                            </a>

                                        </li>
                                        <li>

                                            <a href='https://www.youtube.com/'>
                                                <FaYoutube />

                                            </a>

                                        </li>
                                        <li>

                                            <a href='https://www.linkedin.com/company/epicchemicals/?originalSubdomain=my'>
                                                <FaLinkedin />

                                            </a>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='section-child'>
                            <h3>Sitemap</h3>
                            <ul className='sitemap'>
                                <li>
                                    <a href='/Allproduct'>Our Product</a>
                                </li>
                                <li>
                                    <a href='/about'>About Us</a>
                                </li>
                                <li>
                                    <a href='/about'>Our Mission</a>
                                </li>
                                <li>
                                    <a href='/about'>Our Vision</a>
                                </li>
                                <li>
                                    <a href='/contact'>Contact Us</a>
                                </li>
                                {/* <li>
                                    <a href='/qualitypolicy'>Quality Policy</a>
                                </li> */}
                            </ul>
                        </div>
                        <div className='section-child'>
                            <a href='/contact'>Contact Us</a>
                            <ul className='contactus'>
                                <li>
                                    <b>Epic Chemical Industries</b>
                                </li>
                                <li>
                                    Factory address - 19/2, Hebatpur, abu road highway , opp.indian oil pump
                                    Post-chitrasani, Ta.-palanpur ,Gujarat.
                                </li>
                                <li>
                                    Gujarat(INDIA)385010
                                </li>
                                <li className='contact-link'>
                                    <IoIosCall className='contact-support' /><a href='tel:+91 9426567365'>+91 9426567365</a>&nbsp;
                                    {/* <a href='tel:+91 9978444810'>9978444810</a>&nbsp; */}
                                </li>
                                <li className='contact-link'>
                                    <IoMdMail className='contact-support' />
                                    Email Us:
                                </li>
                                <li>
                                    <a style={{
                                        left: '24px',
                                        position: 'relative'
                                    }} href='mailto:epicchemicals2002@gmail.com'>epicchemicals2002@gmail.com</a>
                                </li>

                                <li className='contact-link'>
                                    <TbWorldWww className='contact-support' />
                                    <a href='https://www.epicchem.in'>www.epicchem.in</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className='copyright'>
                    <p>Copyright © 2025 Epic Chemicals | All Rights reserved Designed & Developed By <a href='tel:+91 9913448958'>Er Karnavat Dilip</a></p>
                </div>
            </footer >
        </>
    )
}

export default Footer
