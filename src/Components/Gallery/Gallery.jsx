// src/Gallery.js
import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './Gallery.css';
import Breadcrumbs from '../Breadcrumbs';
import i1 from '../../Assets/Assets/img1.webp'
import i2 from '../../Assets/Assets/img2.webp'
import i3 from '../../Assets/Assets/img3.webp'
import i4 from '../../Assets/Assets/img4.webp'
import i5 from '../../Assets/Assets/Pipes-PVC-Products.webp'
import i6 from '../../Assets/Assets/animal-feed.webp'
import i7 from '../../Assets/Assets/water-treatment.webp'
import i8 from '../../Assets/Assets/paper-printing.webp'
import i9 from '../../Assets/Assets/paints-coating.webp'
import i10 from '../../Assets/Epic-chemical/img1.jpg'
import i11 from '../../Assets/Epic-chemical/img2.jpg'
import i12 from '../../Assets/Epic-chemical/img3.jpg'
import i13 from '../../Assets/Epic-chemical/img4.jpg'
import i14 from '../../Assets/Epic-chemical/img5.jpg'

const images = [
  i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12,i13,i14
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    console.log(index);
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div>
      <Breadcrumbs title='Photos' />
      <section className='m-top53px'>
        <div className='container'>
          <div className="gallery">
            {images.map((src, index) => (
              <div key={index} className="gallery-item" >
                <LazyLoadImage
                className='lazy'
                onClick={() => openLightbox(index)}
                  effect="blur"
                  src={src}
                  alt={`Gallery ${index}`}
                />
              </div>
            ))}

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
      </section>
    </div>
  );
};

export default Gallery;
