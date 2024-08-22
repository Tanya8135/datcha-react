import { useState } from 'react';

import FsLightbox from 'fslightbox-react';
// import css from './PhotoChalet.module.scss';
import cssCommonPhoto from '../PhotoCommon/PhotoCommon.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function PhotoChalet() {
  const [toggler, setToggler] = useState(false);
  const [slide, setSlide] = useState(1);

  const openLightboxOnSlide = slideNumber => {
    setSlide(slideNumber);
    setToggler(!toggler);
  };

  return (
    <div>
      <h4 className={cssCommonPhoto.subtitlePhoto}>Шале</h4>

      <div className={cssCommonPhoto.PhotoCommonBox}>
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
          <SwiperSlide className={cssCommonPhoto.photoCommonSlide}>
            <img
              src={process.env.PUBLIC_URL + '/images/chaletPhoto/chalet.jpg'}
              alt="Шале"
              onClick={() => openLightboxOnSlide(1)}
            />
          </SwiperSlide>
          <SwiperSlide className={cssCommonPhoto.photoCommonSlide}>
            <img
              src={process.env.PUBLIC_URL + '/images/chaletPhoto/chalet1.jpg'}
              alt="Шале"
              onClick={() => openLightboxOnSlide(2)}
            />
          </SwiperSlide>
          <SwiperSlide className={cssCommonPhoto.photoCommonSlide}>
            <img
              src={
                process.env.PUBLIC_URL + '/images/chaletPhoto/lodder_chalet1.jpg'
              }
              alt="Сходи в шале"
              onClick={() => openLightboxOnSlide(3)}
            />
          </SwiperSlide>
          <SwiperSlide className={cssCommonPhoto.photoCommonSlide}>
            <img
              src={
                process.env.PUBLIC_URL + '/images/chaletPhoto/first_floor.jpg'
              }
              alt="Перший поверх шале"
              onClick={() => openLightboxOnSlide(4)}
            />
          </SwiperSlide>
          <SwiperSlide className={cssCommonPhoto.photoCommonSlide}>
            <img
              src={
                process.env.PUBLIC_URL +
                '/images/chaletPhoto/kitchen_chalet.jpg'
              }
              alt="Кухня в шале"
              onClick={() => openLightboxOnSlide(5)}
            />
          </SwiperSlide>
          <SwiperSlide className={cssCommonPhoto.photoCommonSlide}>
            <img
              src={
                process.env.PUBLIC_URL + '/images/chaletPhoto/second_floor.jpg'
              }
              alt="Другий поверх в шале"
              onClick={() => openLightboxOnSlide(6)}
            />
          </SwiperSlide>
          <SwiperSlide className={cssCommonPhoto.photoCommonSlide}>
            <img
              src={
                process.env.PUBLIC_URL +
                '/images/chaletPhoto/second_floor_bed.jpg'
              }
              alt="Відпочивальня в шале"
              onClick={() => openLightboxOnSlide(7)}
            />
          </SwiperSlide>
        </Swiper>

        <FsLightbox
          toggler={toggler}
          sources={[
            `${process.env.PUBLIC_URL}/images/chaletPhoto/chalet.jpg`,
            `${process.env.PUBLIC_URL}/images/chaletPhoto/chalet1.jpg`,
            `${process.env.PUBLIC_URL}/images/chaletPhoto/lodder_chalet.jpg`,
            `${process.env.PUBLIC_URL}/images/chaletPhoto/first_floor.jpg`,
            `${process.env.PUBLIC_URL}/images/chaletPhoto/kitchen_chalet.jpg`,
            `${process.env.PUBLIC_URL}/images/chaletPhoto/second_floor.jpg`,
            `${process.env.PUBLIC_URL}/images/chaletPhoto/second_floor_bed.jpg`,
          ]}
          slide={slide}
        />
      </div>
    </div>
  );
}

export default PhotoChalet;
