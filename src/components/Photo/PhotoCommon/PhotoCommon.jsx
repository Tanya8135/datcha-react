import FsLightbox from 'fslightbox-react';
import css from './PhotoCommon.module.scss';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// import './styles.css';

function PhotoCommon() {
  const [toggler, setToggler] = useState(false);
  const [slide, setSlide] = useState(1);

  const openLightboxOnSlide = slideNumber => {
    setSlide(slideNumber);
    setToggler(!toggler);
  };
  return (
    <div>
      <h4 className={css.subtitlePhoto}>Загальні</h4>

      <div className={css.testCommon}>
        <Swiper className="mySwiper">
          <SwiperSlide className={css.test1}>
            <img
              src={process.env.PUBLIC_URL + '/images/1180/altanka1@2_700.jpg'}
              alt="Альтанка"
              onClick={() => openLightboxOnSlide(1)}
            />
          </SwiperSlide>
          <SwiperSlide className={css.test1}>
            <img
              src={process.env.PUBLIC_URL + '/images/1180/altanka2@2_700.jpg'}
              alt="Альтанка"
              onClick={() => openLightboxOnSlide(2)}
            />
          </SwiperSlide>
          <SwiperSlide className={css.test1}>
            <img
              src={process.env.PUBLIC_URL + '/images/1180/altanka3@2_700.jpg'}
              alt="Альтанка"
              onClick={() => openLightboxOnSlide(3)}
            />
          </SwiperSlide>
        </Swiper>
        {/* <div className={css.test1}>
          <img
            srcSet={`${process.env.PUBLIC_URL}/images/1180/altanka1@2_700.jpg 1400w,
      ${process.env.PUBLIC_URL}/images/1180/altanka1_700.jpg 700w`}
            sizes="(min-width: 1180px) 700px, 100vw"
            src={process.env.PUBLIC_URL + '/images/1180/altanka1_700.jpg'}
            alt="Альтанка"
            onClick={() => openLightboxOnSlide(1)}
          />
        </div>
        <div className={css.test1}>
          <img
            srcSet={`${process.env.PUBLIC_URL}/images/1180/altanka2@2_700.jpg 1400w,
      ${process.env.PUBLIC_URL}/images/1180/altanka2_700.jpg 700w`}
            sizes="(min-width: 1180px) 700px, 100vw"
            src={process.env.PUBLIC_URL + '/images/1180/altanka2_700.jpg'}
            alt="Альтанка"
            onClick={() => openLightboxOnSlide(2)}
          />
        </div>
        <div className={css.test1}>
          <img
            srcSet={`${process.env.PUBLIC_URL}/images/1180/altanka3@2_700.jpg 1400w,
      ${process.env.PUBLIC_URL}/images/1180/altanka3_700.jpg 700w`}
            sizes="(min-width: 1180px) 700px, 100vw"
            src={process.env.PUBLIC_URL + '/images/1180/altanka3_700.jpg'}
            alt="Альтанка"
            onClick={() => openLightboxOnSlide(3)}
          />
        </div> */}
        <FsLightbox
          toggler={toggler}
          sources={[
            `${process.env.PUBLIC_URL}/images/1180/altanka1@2_700.jpg`,
            `${process.env.PUBLIC_URL}/images/1180/altanka2@2_700.jpg`,
            `${process.env.PUBLIC_URL}/images/1180/altanka3@2_700.jpg`,
          ]}
          slide={slide}
        />
      </div>
    </div>
  );
}

export default PhotoCommon;
