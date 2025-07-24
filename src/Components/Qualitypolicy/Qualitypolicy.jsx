import React, { useEffect } from 'react'
import Breadcrumbs from '../Breadcrumbs'
import { VscGraph } from "react-icons/vsc";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { BiSolidCertification } from "react-icons/bi";
import { RiCustomerServiceLine } from "react-icons/ri";
import './Qualitypolicy.css'
// import qualitydiagram from '../../Assets/ads2.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Qualitypolicy() {
    useEffect(() => {
        AOS.init()
      }, [])
    return (
        <div>
            <Breadcrumbs title='Quality Assurance' />
            <section className='m-top53px'>
                <div className='container'>
                    <div className='divA' data-aos="fade-up">
                        <div>
                            <h3>Provide You The Highest Quality of Submersible</h3>
                        </div>
                        <div>
                            <p>
                                Our company is not only aimed towards generating revenue through our products but our objective is to provide the best quality products that are superior as per the industrial standards. We also aim to provide products that are affordable by every individual for agricultural, industrial, and domestic purposes. Cost effectiveness is what our company endeavors for. We provide best quality products that are ISO 9001 approved, thus GUJARAT PANEL is one of the top professionally managed company which completely focuses on the quality of the products. We are manufacturer and Exporter of Submersible Pumps and Motors along with their spares in India that are up to the mark of international standards for 50 Hz as well as 60 Hz.
                            </p>
                        </div>
                    </div>
                    <div className='border-b' data-aos="fade-up">
                        <div className='SalientFeatures'>
                            <VscGraph className='fa' />

                            <h4>Salient Features
                            </h4>
                        </div>
                        <div className='SalientFeaturesls'>
                            <ul>
                                <li>Hydraulic compact and high efficient design saves electricity by 20% to 40% as compared to old conventionally designed pumps.
                                </li>
                                <li>Hydraulic compact and high efficient design saves electricity by 20% to 40% as compared to old conventionally designed pumps.
                                </li>
                                <li>Hydraulic compact and high efficient design saves electricity by 20% to 40% as compared to old conventionally designed pumps.
                                </li>
                                <li>Hydraulic compact and high efficient design saves electricity by 20% to 40% as compared to old conventionally designed pumps.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='border-b' data-aos="fade-up">
                        <div className='SalientFeatures'>
                            <TbAdjustmentsHorizontal className='fa' />

                            <h4>IS / ISO 9001:2000 Company
                            </h4>
                        </div>
                        <div className='SalientFeaturesls'>
                            <p>Gujarat Panel has privilege to become SSI Unit manufacturing Submersible Pumpsets to obtain International Quality System Certification way back on 01-June-2021 from Bureau of Indian Standards.</p>
                        </div>
                    </div>
                    <div className='border-b' data-aos="fade-up">
                        <div className='SalientFeatures'>
                            <BiSolidCertification className='fa' />

                            <h4>BIS Certification Mark License
                            </h4>
                        </div>
                        <div className='SalientFeaturesls'>
                            <p>The company has been granted BIS Certification Mark Licence covering Numbers Submersible Pumpset models by Bureau of Indian Standards for ISI marking. It will be Goodluck’s endeavor to make continual improvements that focuses on minimizing waste and variability.

                            </p>
                        </div>
                    </div>
                    <div className='border-b' data-aos="fade-up">
                        <div className='SalientFeatures'>
                            <RiCustomerServiceLine className='fa' />

                            <h4>Customer Focus
                            </h4>
                        </div>
                        <div className='SalientFeaturesls'>
                            <p>At every level, Venus Gold and Goodluck Submersible Pumps always considers customers at highest priority for all activities and all the care is taken to see them delighted. All the enquiries prior to sales are promptly responded for techno-commercial details and after sales-services so that they develop confidence for our products and services.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='m-top53px'>
                <div className='container'>
                    <div className='construction'>
                        <div data-aos="fade-up">
                            {/* <h1>Pumps & Motors Construction</h1> */}
                            {/* <img src={qualitydiagram} style={{width: '100%',aspectRatio: '1.3 / 1'}}/> */}
                        </div>
                        <div data-aos="fade-up">
                            <div className='construction-child'>
                                <h3>Our Quality</h3>
                                <p>We use advanced technology and stay updated regarding the latest trends or changes in the field of submersible pumps and motors. We examine the quality of all products through every stage of manufacturing. Thus, we have delivered technologically advanced products to our clients since the start of our journey and have set the benchmark for quality in this industry.</p>
                            </div>
                            <div className='construction-child'>
                                <h3>Performance</h3>
                                <p>In order to maintain the highest quality of our pump sets the company has facility of ultra-modern testing and inspection instruments installed which regularly monitors all the products manufactured.
                                </p>
                            </div>
                            <div className='construction-child'>
                                <h3>Quality Standard
                                </h3>
                                <ul>
                                    <li> As a leading Panel Manufacturing Industry in India We strive to provide quality products and services that consistently meet and exceed our customers’ expectations.</li>
                                    <li> Gujarat Panel is committed to achieving total customer satisfaction by, manufacturing high quality panel with global benchmarks meeting.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='m-top53px'>

            </section>
        </div>
    )
}

export default Qualitypolicy
