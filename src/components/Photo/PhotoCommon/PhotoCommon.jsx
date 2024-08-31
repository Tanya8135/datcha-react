import { useState } from 'react';

import photoDataCommon from 'data/photoDataCommon';
import FsLightbox from 'fslightbox-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import css from './PhotoCommon.module.scss';

function PhotoCommon() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const openLightboxOnSlide = slideIndex => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: slideIndex + 1,
    });
  };

  return (
    <div>
      <div className={css.PhotoCommonContainer}>
        <h4 className={css.subtitlePhoto}>Загальні</h4>

        <div className={css.PhotoCommonBox}>
          <Swiper
            className="mySwiper"
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {photoDataCommon.map((photo, index) => (
              <SwiperSlide key={photo.id}>
                <div
                  className={css.photoCommonSlide}
                  onClick={() => openLightboxOnSlide(index)}
                >
                  <img src={photo.src} alt={photo.alt} className={css.photoImg} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <FsLightbox
            toggler={lightboxController.toggler}
            sources={photoDataCommon.map(photo => photo.src)}
            slide={lightboxController.slide}
          />
        </div>
      </div>
    </div>
  );
}

export default PhotoCommon;
