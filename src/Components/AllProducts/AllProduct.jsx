import React, { useEffect } from 'react'
import Breadcrumbs from '../Breadcrumbs'
import stardelta from '../../Assets/Epic-chemical/dolomite_powder.jpg'
import atspanel from '../../Assets/Epic-chemical/ccp.jpg'
import dolmccb from '../../Assets/Epic-chemical/coated.jpg'
import dolgold from '../../Assets/Epic-chemical/calcite.jpg'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { v4 as uuidv4 } from 'uuid';
import './AllProducts.css'
import { Link } from 'react-router-dom'
function AllProduct() {

  useEffect(() => {
    AOS.init()
  }, [])

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


  return (
    <div>
      <Breadcrumbs title='All Product'/>
      <section className='m-top53px' data-aos="fade-up">
        <div className='container'>
          <div className='grid-container'>
                {
                  products?.map((product,index)=>{
                        return(
                          <Link key={product.id} className='product-child' to={`/Allproduct/${index+1}`}>
                            <h4>{product.title}</h4>
                            <img src={product.img} width='200'/>
                            <h3>Description</h3>
                            <p>{`${product.description.slice(0,58)}...`}</p>
                            <ul>
                              <li><a >Read More</a></li>
                            </ul>
                          </Link>
                        )
                  })
                }
          </div>
        </div>
      </section>
      <section className='m-top53px'>

      </section>
    </div>
  )
}

export default AllProduct