import { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import cssCommonPhoto from '../PhotoCommon/PhotoCommon.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';

import photoDataChalet from 'data/photoDataChalet';

function PhotoChalet() {
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
      <h4 className={cssCommonPhoto.subtitlePhoto}>Шале</h4>

      <div className={cssCommonPhoto.PhotoCommonBox}>
        <Swiper
          lazy={{ enabled: true }}
          className={`${cssCommonPhoto.swiperSlideMob} mySwiper`}
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
          {photoDataChalet.map((photo, index) => (
            <SwiperSlide key={photo.id}>
              <div
                className={cssCommonPhoto.photoCommonSlide}
                onClick={() => openLightboxOnSlide(index)}
              >
                <img
                  srcSet={photo.srcSet}
                  sizes="(min-width: 1024px) 376px,
                      (min-width: 768px) 341px,
                      240px"
                  src={photo.src}
                  alt={photo.alt}
                  className={`swiper-lazy ${cssCommonPhoto.photoImg}`}
                />
                <div className="swiper-lazy-preloader"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <FsLightbox
          toggler={lightboxController.toggler}
          sources={photoDataChalet.map(photo => photo.src)}
          slide={lightboxController.slide}
        />
      </div>
    </div>
  );
}

export default PhotoChalet;
