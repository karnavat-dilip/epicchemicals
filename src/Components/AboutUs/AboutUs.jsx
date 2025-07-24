import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../Breadcrumbs'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { v4 as uuidv4 } from 'uuid';
import { IoBarChartSharp } from "react-icons/io5";
import { PiCheckSquareOffsetFill } from "react-icons/pi";
import { IoFlaskSharp } from "react-icons/io5";
import Value from '../../Assets/values.jpg'
import OurMission from '../../Assets/mission.jpg'
import OurVision from '../../Assets/vision.jpg'
import about from '../../Assets/Assets/slider2.jpg'
import certificate1 from '../../Assets/Epic-chemical/certificate1.jpg'
import certificate2 from '../../Assets/Epic-chemical/certificate2.jpg'

import AOS from 'aos'
import 'aos/dist/aos.css'
import './About.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

function About() {
    return (
        <div>
            <p>"Epic Chemical" produces Ground Calcium Carbonates (CaCO3) with series of different brightness and particle sizes as per the requirement of the industry and the customers.

                CaCO3 is manufactured by grinding Limestone or white marble. Because of their high brightness and purity, our product is a Super White, Highly Pure, Micronized, closely controlled particle size. CaCO3 produced from the finest quality resources procured from selective mines.

            </p>
        </div>
    );
}

function OurStrength() {
    return (
        <div>
            <p>Calcite powder and calcium carbonate (CaCO₃) offer a wide range of strengths that make them indispensable in various industrial applications. One of their primary advantages is their excellent whiteness and purity, which enhances the brightness and opacity of products such as paints, plastics, and paper. They also possess high thermal stability and chemical inertness, making them suitable for use in high-temperature environments and chemically sensitive applications. Their low oil absorption and consistent particle size distribution improve processing efficiency in polymers and coatings. Additionally, calcium carbonate has reinforcing properties in rubber and plastic, contributing to improved mechanical strength, surface finish, and dimensional stability. </p>
        </div>
    );
}

function OurService() {
    return (
        <div>
            <p>It is one of the most widely used Industrial Minerals for a variety of applications and we produce it in a broad range of particle sizes ranging from coarser to finer and ultra-fine sizes depending on the nature of your application it needs to be used in.

                We also offer customized grades for your requirements available in various packing sizes.</p>
        </div>
    );
}
function AboutUs() {
    const [content, setContent] = useState(About);
    const [activeLink, setActiveLink] = useState('about');
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const openLightbox = (index) => {
        console.log(index);
        setPhotoIndex(index);
        setIsOpen(true);
    };

    const handleNavigation = (contentComponent, linkName) => {
        setContent(contentComponent);
        setActiveLink(linkName)
    };
    useEffect(() => {
        AOS.init()
    }, [])
    const images = [
        certificate1,
        certificate2,
    ]
    return (
        <div>
            <Breadcrumbs title='About Us' />
            <section className='m-top53px'>
                <div className='container'>
                    <div className='about-container'>
                        <div data-aos="fade-up">
                            <img src={about} />
                        </div>
                        <div className='second-child' data-aos="fade-up">
                            <h1>Welcome To Epic Chemical</h1>
                            <p>Epic Chemical produces Ground Calcium Carbonates (CaCO3) with series of different brightness and particle sizes as per the requirement of the industry and the customers.</p>
                        </div>
                        <div data-aos="fade-up">
                            <h1>Our Certificates</h1>
                            <div className='product-container'>
                                <Swiper

                                    loop={true}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={true}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}

                                >
                                    {
                                        images?.map((src, index) => {
                                            return (
                                                <SwiperSlide key={index} className='swiper-child'>
                                                    <LazyLoadImage
                                                        className='lazy'
                                                        onClick={() => openLightbox(index)}
                                                        effect="blur"
                                                        src={src}
                                                        width='50%'
                                                        alt={`Gallery ${index}`}
                                                    />
                                                </SwiperSlide>

                                            )
                                        })
                                    }
                                </Swiper>
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={images[photoIndex]}
                                        nextSrc={images[(photoIndex + 1) % images.length]}
                                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                        onCloseRequest={() => setIsOpen(false)}
                                        onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                                        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                                    />
                                )}
                            </div>
                        </div>
                        <div className='second-child' data-aos="fade-up">
                            <h1>Why Epic Chemical?</h1>
                            <div>
                                <div className='bd-highlight'>
                                    <IoBarChartSharp />

                                    <h2>Performence</h2>
                                    <p>
                                        Enhances mechanical strength in end products

                                        Improves surface finish and gloss



                                    </p>
                                </div>
                                <div className='bd-highlight'>
                                    <PiCheckSquareOffsetFill />


                                    <h2>High Quality
                                    </h2>
                                    <p>
                                        Low oil absorption for better processing

                                        Uniform particle shape and distribution



                                    </p>
                                </div>
                                <div className='bd-highlight'>
                                    <IoFlaskSharp />

                                    <h2>Testing</h2>
                                    <p>
                                        Tested for purity, brightness, and chemical composition
                                        Regular analysis of particle size distribution
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up">
                            <div className='nav-container'>
                                <div className='b-btm'>
                                    <h1>Who we are?</h1>
                                </div>
                                <div>
                                    <nav>
                                        <ul>
                                            <li className={activeLink === 'about' ? 'activelink' : ''} onClick={() => handleNavigation(About, 'about')}>About Us</li>
                                            <li className={activeLink === 'strength' ? 'activelink' : ''} onClick={() => handleNavigation(OurStrength, 'strength')}>OurStrength</li>
                                            <li className={activeLink === 'service' ? 'activelink' : ''} onClick={() => handleNavigation(OurService, 'service')}>Our Service</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className='text-indent'>

                                {content && content}

                            </div>
                        </div>
                        <div className='ourmission' data-aos="fade-up">
                            <div>
                                <img src={Value} width='100' />

                                <h2>Value</h2>
                                <p>
                                    We have earned clients’ trust with reliable service and quality products. We accept the consequences of our actions as a sign of responsibility. Our professionalism can be viewed through flawless service and high-end products.
                                </p>
                            </div>
                            <div>
                                <img src={OurMission} width='100' />


                                <h2>Our Mission
                                </h2>
                                <p>
                                    • The importance is treating it personnel
                                    • Human Resource enhancement
                                    • Innovation
                                    • Environmental Protection
                                </p>
                            </div>
                            <div>
                                <img src={OurVision} width='100' />

                                <h2>Our Vision</h2>
                                <p>
                                    Our vision is to be a global leader in delivering high-quality Calcite Powder and Calcium Carbonate solutions that drive innovation, sustainability, and excellence across industries.


                                </p>
                            </div>
                        </div>
                        {/* <div className='ourcustomer' data-aos="fade-up">
                            <div>
                                <h1>What Our Customers Say ?</h1>
                            </div>

                            <div style={{ height: '295px' }}>
                                <Swiper

                                    loop={true}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Pagination]}

                                >

                                    <SwiperSlide className='swiper-child'>
                                        <div>
                                            <p>
                                                "A wide range of varity available with reasonable price."

                                            </p>
                                            <img src={TaTa} width='100' />
                                            <h3>
                                                Project Manager
                                            </h3>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-child'>
                                        <div>
                                            <p>
                                                "One of the biggest submarsible pump manufacturers.
                                                for this company quality is priority.
                                                they have invented so many different types of panel
                                                "
                                            </p>
                                            <img src={reliance} width='100' />
                                            <h3>
                                                Project Manager
                                            </h3>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-child'>
                                        <div>
                                            <p>
                                                "You find all types of solutions related to Panels. A wide range of varity available with reasonable price.
                                                "
                                            </p>
                                            <img src={wasmo} width='100' />
                                            <h3>
                                                Project Manager
                                            </h3>
                                        </div>
                                    </SwiperSlide>


                                </Swiper>
                            </div>

                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
