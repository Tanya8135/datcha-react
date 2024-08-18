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
              src={process.env.PUBLIC_URL + '/images/commonPhoto/altanka1.jpg'}
              alt="Альтанка"
              onClick={() => openLightboxOnSlide(1)}
            />
          </SwiperSlide>
          <SwiperSlide className={css.test1}>
            <img
              src={process.env.PUBLIC_URL + '/images/commonPhoto/altanka2.jpg'}
              alt="Альтанка"
              onClick={() => openLightboxOnSlide(2)}
            />
          </SwiperSlide>
          <SwiperSlide className={css.test1}>
            <img
              src={process.env.PUBLIC_URL + '/images/commonPhoto/altanka3.jpg'}
              alt="Альтанка"
              onClick={() => openLightboxOnSlide(3)}
            />
          </SwiperSlide>
        </Swiper>

        <FsLightbox
          toggler={toggler}
          sources={[
            `${process.env.PUBLIC_URL}/images/commonPhoto/altanka1.jpg`,
            `${process.env.PUBLIC_URL}/images/commonPhoto/altanka2.jpg`,
            `${process.env.PUBLIC_URL}/images/commonPhoto/altanka3.jpg`,
          ]}
          slide={slide}
        />
      </div>
    </div>
  );
}

export default PhotoCommon;
