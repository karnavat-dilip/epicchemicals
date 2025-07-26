import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import round1 from '../../Assets/round.png'
import 'animate.css'

import profile_img from '../../Assets/Epic-chemical/factory_img.png'
import stardelta from '../../Assets/Epic-chemical/dolomite_powder.jpg'
import atspanel from '../../Assets/Epic-chemical/ccp.jpg'
import dolmccb from '../../Assets/Epic-chemical/coated.jpg'
import dolgold from '../../Assets/Epic-chemical/calcite.jpg'

import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './Home.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { v4 as uuidv4 } from 'uuid';

import { Chart } from "react-google-charts";
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div>
      <p>Epic Chemicals produces Ground Calcium Carbonates (CaCO3) with series of different brightness and particle sizes as per the requirement...
        <a href='/about' style={{ color: '#01a875' }}> Read more</a></p>
    </div>
  );
}

function OurStrength() {
  return (
    <div>
      <p>Calcite powder and calcium carbonate (CaCO₃) offer a wide range of strengths that make them indispensable in various industrial applications. One of their primary advantages is their excellent whiteness and purity, which enhances the brightness and opacity of products such as paints, plastics, and paper... <a href='/about' style={{ color: '#01a875' }}> Read more</a></p>
    </div>
  );
}

function OurService() {
  return (
    <div>
      <p>It is one of the most widely used Industrial Minerals for a variety of applications and we produce it in a broad range of particle sizes ranging from coarser to finer and ultra-fine sizes depending on the nature of your application it needs to be used in... <a href='/about' style={{ color: '#01a875' }}>Read more</a></p>
    </div>
  );
}

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
function Home() {
  const [counteron, setcounteron] = useState(false)
  const [content, setContent] = useState(AboutUs);
  const [activeLink, setActiveLink] = useState('about');
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);


  const handleNavigation = (contentComponent, linkName) => {
    setContent(contentComponent);
    setActiveLink(linkName)
  };

  useEffect(() => {
    AOS.init()
  }, [])

  const data = [
    ["West Bangal", "Hours per Day"],
    ["Jammu & Kashmir", 9],
    ["Maharashtra", 6],
    ["Kerala", 5],
    ["Rajasthan", 7],
    ["Tamilnadu", 8],
    ["Bihar", 9],
    ["Andaman & Nicabar", 6],
    ["Andhra-Pradesh", 8],
    ["Uttar Pradesh", 11],
    ["Jharkhand", 13],
    ["Panjab", 12],
    ["Delhi", 14],
    ["Hariyana", 9],
  ];

  const options = {
    title: "",
  };



  return (
    <>
      <div className='swiper-container'>
        {/* <img src={liquifyvector} id='img1' /> */}
        {/* <section className='slide'>
          <div> */}

        <div className='child_slider'>
          <h1 className='animate__animated animate__backInLeft' >{products[currentLogoIndex].title}</h1>
          <div className='inner-img'>
            <img src={round1} className='product-img1 animate__animated animate__backInRight' style={{ position: 'relative' }} />
            <img src={products[currentLogoIndex].img} className='product-img animate__animated animate__backInUp' />
          </div>
        </div>

        {/* </div>
        </section> */}
        <section data-aos="fade-up">
          <div className='container'>
            <div className='h1-container'>
              <h1>Welcome to our <span style={{ color: '#263078', fontSize: 'larger' }}>Epic Chemicals</span></h1>
            </div>
            <div className='intro'>
              <div className='d-flex'>
                <div>
                  <h4>Introduction</h4>
                  <p>Founded in 2002, Epic Chemicals has been a trusted name in the manufacturing of high-quality calcium carbonate powder for over 23 years. Based in Palanpur, Gujarat, a renowned hub for mineral processing, we specialize in producing natural, and coated calcium carbonate powders that cater to a wide range of industries, including paints and coatings, plastics, rubber, paper, pharmaceuticals, and construction.
                  </p>
                  <h4>Production & Manufacturing Capacity
                  </h4>
                  <p>With a focus on sustainability and environmental responsibility, we strive to minimize our ecological footprint while maintaining a reliable supply chain. Our dedicated team of experts works closely with clients to understand their unique needs, providing tailored calcium carbonate solutions for applications ranging from industrial fillers to pharmaceutical-grade supplements.
                    Over the past two decades, Epic Chemicals has built a strong reputation for reliability, excellence, and innovation, serving both domestic and international markets. We are committed to fostering long-term partnerships and driving progress in the industries we serve.</p>
                </div>
                <div>
                  <img src={profile_img} id='profile-img' />
                </div>
              </div>
              <div>
                <h4>Technology Innovations
                </h4>
                <p>At Epic Chemicals, we pride ourselves on our commitment to quality, innovation, and customer satisfaction. Our state-of-the-art manufacturing facilities and stringent quality control processes ensure that our products meet the highest industry standards, offering exceptional whiteness, purity, and consistency. We source premium raw materials and leverage advanced technology to deliver customized solutions that enhance the performance and cost-efficiency of our clients’ products.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section data-aos="fade-up">
          <div className='container'>
            <div className='h1-container'><h1>Product Category</h1></div>
            <div className='product-container'>
              <Swiper

                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                loop={true}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}

              >
                {
                  products?.map((product, index) => {
                    return (
                      <SwiperSlide key={product.id} className='swiper-child'>
                        {/* <div key={product.id} className='swiper-child'> */}
                        <Link to={`/Allproduct/${index + 1}`}>
                          <img src={product.img} width='200px' /><br />
                          <h3>{product.title}</h3>
                        </Link>
                        {/* </div> */}
                      </SwiperSlide>

                    )
                  })
                }
              </Swiper>
            </div>

          </div>
        </section >
        <section data-aos="fade-up">
          <div className='container'>
            <div className='count-container'>
              <div className='totalno'>

                {<CountUp start={0} end={60000} duration={2} delay={0} />}+

                <h4>SQ. FT Manufacturing Unit</h4>
              </div>
              <div className='totalno'>

                {<CountUp start={0} end={2200} duration={5} delay={0} />}+

                <h4>Metric ton Production Capacity</h4>
              </div>
              <div className='totalno'>

                {<CountUp start={0} end={60} duration={5} delay={0} />}+

                <h4>Valuable Clients</h4>
              </div>

            </div>
          </div>
        </section>
        <section data-aos="fade-up">
          <div className='container'>
            <div className='nav-container'>
              <div className='b-btm'>
                <h1>Who we are?</h1>
              </div>
              <div>
                <nav>
                  <ul>
                    <li className={activeLink === 'about' ? 'activelink' : ''} onClick={() => handleNavigation(AboutUs, 'about')}>About Us</li>
                    <li className={activeLink === 'strength' ? 'activelink' : ''} onClick={() => handleNavigation(OurStrength, 'strength')}>OurStrength</li>
                    <li className={activeLink === 'service' ? 'activelink' : ''} onClick={() => handleNavigation(OurService, 'service')}>Our Service</li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className='text-indent'>

              {content && content}

            </div>
            {/* <div>
              <img src={img31} style={{
                width: "50%",
                position: 'relative',
                left: "25%"
              }} />
            </div> */}
          </div>
        </section>
        {/* <section data-aos="fade-up">
          <div className='container'>
            <div className='h1-container'>
              <h1>Product Application
              </h1>
            </div>
            <div className='grid-container'>
              {productapplication?.map((product, index) => {
                return (
                  <div className='grid-item'>
                    <img src={product.img} />
                    <h1>{product.Appname}</h1>
                    <Accordion style={{ background: 'aliceblue', boxShadow: 'none' }}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}

                      >
                        More Info
                      </AccordionSummary>
                      <AccordionDetails>
                        {product.moreinfo}
                      </AccordionDetails>
                    </Accordion>
                  </div>
                )
              })}
            </div>
          </div>
        </section> */}
        {/* <section data-aos="fade-up">
          <div className='container'>
            <div className='h1-container'>
              <h1>Our Service
              </h1>
            </div>
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              loader={<div>Loading Chart...</div>}
              height={"400px"}
            />

          </div>
        </section > */}
        <section>
          <br></br>
          <br></br>
        </section>
      </div >
    </>
  )
}

export default Home
