import { useState } from 'react';
import photoDataChalet from 'data/photoDataChalet';
import FsLightbox from 'fslightbox-react';
import cssCommonPhoto from '../PhotoCommon/PhotoCommon.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/scrollbar';
// eslint-disable-next-line
import { EffectCards, Scrollbar } from 'swiper/modules';
// import useSlideMob from 'components/hooks/useSlide/useSlideMob';

function PhotoChalet() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  // const isMobileSlide = useSlideMob();

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
        {/* <Swiper
          className={`${cssCommonPhoto.swiperCardMob} mySwiper`}
          // className="mySwiper"
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
        >
          {photoDataChalet.map((photo, index) => (
            <SwiperSlide key={photo.id}>
              <div
                className={cssCommonPhoto.photoCommonSlide}
                onClick={() => openLightboxOnSlide(index)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className={cssCommonPhoto.photoImg}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}

        <Swiper
          className={`${cssCommonPhoto.swiperSlideMob} mySwiper`}
          // className="mySwiper"
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
                  src={photo.src}
                  alt={photo.alt}
                  className={cssCommonPhoto.photoImg}
                />
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
