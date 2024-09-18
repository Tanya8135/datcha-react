import { useState, useEffect } from 'react';
import FsLightbox from 'fslightbox-react';
import css from './PhotoCommon.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';

import photoDataCommon from 'data/photoDataCommon';
import { getImgForScreenSize } from 'components/utils/imgUtilsFsLght';

function PhotoCommon() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openLightboxOnSlide = slideIndex => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: slideIndex + 1,
    });
  };

  return (
    <>
      <div className={css.PhotoCommonContainer}>
        <h4 className={css.subtitlePhoto}>Загальні</h4>

        {/* <div className={css.PhotoCommonBox}> */}
          <Swiper
            lazy={{ enabled: true }}
            className={`${css.swiperSlideMob} mySwiper`}
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
                spaceBetween: 20,
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
                    loading="lazy"
                    width="376"
                    height="320"
                    srcSet={photo.srcSet}
                    sizes="(min-width: 1024px) 376px,
                      (min-width: 768px) 341px,
                      240px"
                    src={photo.src}
                    alt={photo.alt}
                    className={`swiper-lazy ${css.photoImg}`}
                  />
                  <div className="swiper-lazy-preloader"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <FsLightbox
            toggler={lightboxController.toggler}
            sources={photoDataCommon
              .map(photo => getImgForScreenSize(photo, screenWidth))
              .filter(screenWidth => screenWidth)}
            slide={lightboxController.slide}
          />
        {/* </div> */}
      </div>
    </>
  );
}

export default PhotoCommon;
