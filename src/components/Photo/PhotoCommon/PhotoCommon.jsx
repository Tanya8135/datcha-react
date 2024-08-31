import { useState } from 'react';
import photoDataCommon from 'data/photoDataCommon';
import FsLightbox from 'fslightbox-react';
import css from './PhotoCommon.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { EffectCards, Scrollbar } from 'swiper/modules';
import useSlideMob from 'components/hooks/useSlide/useSlideMob';

function PhotoCommon() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const isMobileSlide = useSlideMob();

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
          {isMobileSlide ? (
            <Swiper
              className="mySwiper"
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
            >
              {photoDataCommon.map((photo, index) => (
                <SwiperSlide key={photo.id}>
                  <div
                    className={css.photoCommonSlide}
                    onClick={() => openLightboxOnSlide(index)}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className={css.photoImg}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Swiper
              className="mySwiper"
              grabCursor={true}
              modules={[Scrollbar]}
              scrollbar={{ draggable: true }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
              }}
            >
              {photoDataCommon.map((photo, index) => (
                <SwiperSlide key={photo.id}>
                  <div
                    className={css.photoCommonSlide}
                    onClick={() => openLightboxOnSlide(index)}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className={css.photoImg}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

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
