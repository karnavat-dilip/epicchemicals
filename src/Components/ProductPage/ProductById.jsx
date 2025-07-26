import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Breadcrumbs from '../Breadcrumbs'
import stardelta from '../../Assets/Epic-chemical/dolomite_powder.jpg'
import atspanel from '../../Assets/Epic-chemical/ccp.jpg'
import dolmccb from '../../Assets/Epic-chemical/coated.jpg'
import dolgold from '../../Assets/Epic-chemical/calcite.jpg'
import { Link, useParams } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { v4 as uuidv4 } from 'uuid';
import './ProductById.css'
function ProductById() {
  const { id } = useParams();
  const productId = parseInt(id);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    AOS.init()
  }, [])
  const productsData = {
    panels: [
      {
        id: 1,
        img: stardelta,
        title: 'Dolomite Powder',
        description: 'Epic Chemicals Dolomite Powder – High-Quality Calcium Magnesium Carbonate for Industry Excellence .Product Overview Epic Chemicals introduces premium-grade Dolomite Powder, a naturally occurring double carbonate mineral composed of calcium magnesium carbonate (CaMg(CO₃)₂). Sourced from high-quality dolomite deposits, our powder is processed using advanced grinding and micronization techniques to deliver consistent particle sizes ranging from coarse (100-500mesh) to ultrafine (5-20 microns). With its exceptional purity and whiteness, Epic Chemicals Dolomite Powder is designed to meet the diverse needs of industries worldwide, offering superior performance and sustainability.',
        features: [
          'Chemical Composition: Composed of 54.50% CaCO₃ and 42.65% MgCO₃, with typical oxide content of CaO (31.4%), MgO (20.10%), and CO₂ (46.9%). Impurities such as SiO₂, Al₂O₃, and Fe₂O₃ are kept below 2% for industrial suitability.',
          'Physical Properties: A fine, odorless, white to off-white powder with a crystalline structure (trigonal-rhombohedral system). It has a Mohs hardness of 3.5-4, a specific gravity of 2.6-2.8, and a refractive index of 1.67-1.68.',
          'Particle Size Options: Available in multiple grades, including coarse (10-500 mesh),  and micronized (5-20 microns), tailored for specific applications.',
          'Purity & Whiteness: Achieves up to 96.5% whiteness, ensuring aesthetic appeal in applications like paints, ceramics, and pvc industry.',
          'Applications Epic Chemicals Dolomite Powder is a versatile material with wide-ranging industrial applications:',
          'Iron & Steel Industry',
          'Glass & Ceramics',
          'Acts as a filler in paints, plastics, and rubber, improving weather resistance, crack prevention, and mechanical properties.',
          'Agriculture,Paper Industry,paints and pvc Industries,Environmental Applicatitins',
          'Sustainability: Processed with advanced, eco-friendly technologies to reduce energy consumption and waste, aligning with global sustainability goals.Packaging Options Available in 1 MT jumbo bags for industrial use, ensuring safe handling and transportation.Custom packaging options(25 kg, 50 kg) are also available to meet specific requirements.Contact Us Discover the difference with Epic Chemicals Dolomite Powder.'

        ],
        specifications: [
          'Grades:100mesh UpTo 10Micrones',
          'High whiteness and Brightness: 94% Min',
          'CaCO₃-55%,MgCO3-43%,SiO2-0.60%'
        ],
        other_info: [
          'Application: Paints, Plastics, Ceramics, Rubber',
          'Packaging: 25/50 kg HDPE/PP bags',
          'Customize Packing Available',
          'Origin: India'
        ]
      },
      {
        id: 2,
        img: atspanel,
        title: 'Calcium Carbonate Powder',
        description: 'Ground Calcium Carbonate (GCC) is a fine white powder derived from natural minerals like limestone, calcite, marble, or chalk through mechanical grinding. Its chemical formula, CaCO₃, reflects its composition of calcium, carbon, and oxygen. Known for its high purity, whiteness, and versatility, GCC is a cost-effective filler used across industries.',
        features: [
          'High whiteness and brightness (up to 98% whiteness).',
          'Particle sizes ranging from a 25 microns to 5  microns.',
          'Mohs hardness of –3, making it soft and non-abrasive for many applications.',
          'Construction: GCC is a key ingredient in concrete, enhancing toughness and strength while reducing costs. It’s also used in asphalt, mortar, and fireproof ceilings for improved durability and fire resistance.',
          'Paper Industry: Acts as a filler and coating material, improving paper smoothness, opacity, and ink absorption for high-quality printing.',
          'Plastics and Polymers: Enhances mechanical properties, rigidity, and thermal stability in plastics like PVC and polypropylene, reducing production costs.',
          'Paints and Coatings: Improves opacity, gloss, and durability while lowering costs by reducing the need for expensive pigments like titanium dioxide.',
          'Agriculture: Used as agricultural lime to neutralize acidic soils, improve nutrient availability, and promote plant growth. Also mitigates heavy metal uptake in plants.',
          'Food and Pharmaceuticals: Food-grade GCC serves as a calcium supplement, antacid, or stabilizer in products like toothpaste, baked goods, and medicines.',
          'Personal Care: Acts as an abrasive in toothpaste, a bulking agent in cosmetics, and an opacifier for enhanced texture.'
        ],
        specifications: [
          'Cost-Effective: Reduces production costs by acting as a filler, replacing more expensive materials.',
          'High Purity:  ensuring consistent quality for industrial and food-grade applications.',
          'Versatility: Available in various particle sizes (e.g., 5–25 microns) for tailored applications.',
          'Eco-Friendly: Sourced from abundant natural deposits with sustainable mining practices.',
          'Enhanced Properties: Improves strength, durability, whiteness, and stability in products like    concrete, plastics, and paints, pvc pie, profiles.',
        ],
        other_info: [
          'APPLICATIONS:',
          'used for PVC Pipes,Profiles,Paints,Rubbers,Fillermaster batch,Ceramics,And others...',
          'Coated GCC Option: Steric acid-coated GCC enhances moisture resistance for moisture-sensitive applications like rubber and plastics.',
          'GCC is produced by mining limestone, calcite, or chalk, followed by crushing, grinding, and classifying into fine powders.',
          'using equipment like ultrafine  classifying mills and hammer mills .',
          'The process ensures high purity and consistent particle size, critical for specific applications.Packaging Options Available in 1 MT jumbo bags for industrial use, ensuring safe handling and transportation. Custom packaging options (25 kg, 50 kg) are also available to meet specific requirements.'
        ]
      },
      {
        id: 3,
        img: dolmccb,
        title: 'Coated Calcium Carbonate Powder',
        description: 'Coated calcium carbonate powder is a specialized form of calcium carbonate that has been treated with a surface coating, typically stearic acid -  Derived from high-purity limestone or marble, ground into fine particles. Coating: Commonly coated with stearic acid(fatty acid) or resins, which modify the surface to improve compatibility with organic materials. Particle Size: Available in a range of fineness, from ultrafine(sub - micron) to coarse grades, depending on the application. Process: The coating is applied during or after grinding, using techniques like wet or dry coating, followed by drying and classification.Physical and Chemical Properties Appearance: White, odorless powder with a smooth texture. Density: Approximately 2.7 g / cm³, depending on the coating and particle size.pH: Neutral to slightly alkaline(around 9 - 10 in water suspension). Moisture Content: Low, typically less than 0.5 %, due to the coating process.',
  features: [
    'High purity and brightness',
    'Improves impact resistance',
    'Enhances processing performance'
  ],
    specifications: [
      'CaCO₃: 94% Min',
      'Brightness: 94% Min',
      'Micron Size: 20 To 5 Micrones',
      'Moisture: < 0.3%'
    ],
      other_info: [
        'Applications : PVC Pipes and Profiles,Plastics and Rubber',
        'Packaging: 25/50 kg HDPE/PP bags',
        'Origin: India'
      ]
},
{
  id: 4,
    img: dolgold,
      title: 'Calcite Powder',
        description: 'Calcite powder can indeed be derived from marble  lumps, as marble is primarily composed of calcite (calcium carbonate, CaCO₃). Marble waste, generated during quarrying, cutting, or processing of marble, is often repurposed to produce calcite powder.',
          features: [
            'Chemical Composition: Primarily calcium carbonate (CaCO₃), with minor impurities like magnesium, iron, or silica.',
            'Appearance: White or gray-white powder.',
            'Physical Characteristics: High brightness, good dispersibility, and fine particle size (ranging from microns to millimeters, depending on the application).',
            'Hardness: 3 on the Mohs scale, making it relatively soft.',
            'Solubility: Low solubility in water, but reacts with acids to release carbon dioxide.'
          ],
            specifications: [
              'Calcite powder is produced by crushing, grinding, and micronizing .',
              '1.  Mining: Extracting  stone lumps from deposits.',
              '2.  Crushing: Breaking down large marble rocks into smaller pieces.',
              '3.  Grinding: Using raymond mills to achieve desired mesh sizes (e.g., 100-500mesh).',
              '4.  Purification: Removing impurities through processes like washing and  magnetic separation.'
            ],
              other_info: [
                'Applications:',
                '1.  Detergent and soaps.',
                '2.  Paints and Coatings.',
                '3.  Paper Industry.',
                '4.  Construction materials.',
                '5.  Pharmaceuticals and Food.',
                '6.  Agriculture and animal feed .',
                '7.  Rubber and Adhesives.',
                'Benefits:',
                'Cost-effective filler material.',
                'Enhances product properties like brightness, opacity, and strength.',
                'Environmentally friendly and non-toxic .',
                'Grades: Available in various grades.',
                'Packaging Options Available in 1 MT jumbo bags for industrial use, ensuring safe handling and transportation.  Custom packaging options (25 kg, 50 kg) are also available to meet specific requirements.'
              ]
}
    ]
  };




const products = [
  {
    id: uuidv4(),
    img: stardelta,
    title: 'Dolomite Powder',
    description:
      'High-quality Dolomite Powder used in construction, ceramics, glass, and agriculture. Known for its whiteness and purity, it improves soil quality and enhances product durability.',
  },
  {
    id: uuidv4(),
    img: atspanel,
    title: 'Calcium Carbonate Powder',
    description:
      'Premium-grade Calcium Carbonate Powder widely used in paints, plastics, rubber, and paper industries. It offers excellent brightness and fine particle size for smooth application and consistent performance.',
  },
  {
    id: uuidv4(),
    img: dolmccb,
    title: 'Coated Calcium Carbonate Powder',
    description:
      'Surface-treated Coated Calcium Carbonate Powder, ideal for plastic and polymer industries. It improves dispersion, increases processing speed, and enhances mechanical properties of final products.',
  },
  {
    id: uuidv4(),
    img: dolgold,
    title: 'Calcite Powder',
    description:
      'Pure and finely ground Calcite Powder used in paints, adhesives, and PVC pipes. It provides high whiteness, controlled particle size, and excellent chemical properties for various industrial applications.',
  },
];

useEffect(() => {

  const foundProduct = productsData.panels.find(item => item.id === productId);
  setProduct(foundProduct);
}, [productId]);


const { title, img, description, features, specifications, other_info } = product || {};

return (
  <>
    <Breadcrumbs title='Product Details Default' />
    <section className='m-top53px'>
      <div>
        <div>
          {product ? (
            <div>
              <div className='img-magnify container'>
                <div className='border1px'>
                  <ReactImageMagnify {...{
                    smallImage: {
                      alt: 'Wristwatch by Ted Baker London',
                      isFluidWidth: true,
                      src: img,

                    },
                    largeImage: {
                      src: img,
                      width: 800,
                      height: 800
                    },
                    enlargedImagePosition: 'over',
                    lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }

                  }} />
                </div>
                <div className='description' data-aos="fade-up">
                  <h2>{title}</h2>
                  <h3>Description</h3>
                  <p>{description}</p>
                  <h3>Features</h3>
                  <ul>
                    {features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className='specification'>
                <div className='otherinfo' data-aos="fade-up">
                  <h3>Specifications</h3>
                  <ul>
                    {specifications.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className='otherinfo' data-aos="fade-up">
                  <h3>Other Info</h3>
                  <ul>
                    {other_info.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <p>Product not found</p>
          )}
        </div>
      </div>
    </section>
    <section className='m-top53px' data-aos="fade-up">
      <div className='container'>
        <div className='h1-container'><h1>Related Products</h1></div>
        <div>
          <Swiper

            breakpoints={{
              640: {
                slidesPerView: 3,
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
            modules={[Autoplay, Navigation]}

          >
            {
              products?.map((product, index) => {
                return (
                  <SwiperSlide key={product.id} className='related-product'>
                    <Link key={product.id} to={`/Allproduct/${index + 1}`}>
                      <img src={product.img} width='200' />
                      <h4>{product.title}</h4>
                      <p>{`${product.description.slice(0, 48)}...`}</p>
                      <ul>
                        <li><a >Read More</a></li>
                      </ul>
                    </Link>
                  </SwiperSlide>
                )
              })

            }
          </Swiper>
        </div>

      </div>
    </section>
    <section className='m-top53px'>

    </section>
  </>
)
}

export default ProductById
