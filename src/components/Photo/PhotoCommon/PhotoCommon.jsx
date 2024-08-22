import { useState } from 'react';

import FsLightbox from 'fslightbox-react';
import css from './PhotoCommon.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function PhotoCommon() {
  const [toggler, setToggler] = useState(false);
  const [slide, setSlide] = useState(1);

  const openLightboxOnSlide = slideNumber => {
    setSlide(slideNumber);
    setToggler(!toggler);
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
            <SwiperSlide className={css.photoCommonSlide}>
              <img
                src={
                  process.env.PUBLIC_URL + '/images/commonPhoto/altanka1.jpg'
                }
                alt="Альтанка, Алея"
                onClick={() => openLightboxOnSlide(1)}
              />
            </SwiperSlide>

            <SwiperSlide className={css.photoCommonSlide}>
              <img
                src={
                  process.env.PUBLIC_URL + '/images/commonPhoto/altanka2.jpg'
                }
                alt="Альтанка"
                onClick={() => openLightboxOnSlide(2)}
              />
            </SwiperSlide>
            <SwiperSlide className={css.photoCommonSlide}>
              <img
                src={
                  process.env.PUBLIC_URL + '/images/commonPhoto/altanka3.jpg'
                }
                alt="Альтанка"
                onClick={() => openLightboxOnSlide(3)}
              />
            </SwiperSlide>
            <SwiperSlide className={css.photoCommonSlide}>
              <img
                src={
                  process.env.PUBLIC_URL + '/images/commonPhoto/altanka4.jpg'
                }
                alt="Альтанка"
                onClick={() => openLightboxOnSlide(4)}
              />
            </SwiperSlide>
            <SwiperSlide className={css.photoCommonSlide}>
              <img
                src={
                  process.env.PUBLIC_URL + '/images/commonPhoto/altanka2_5.jpg'
                }
                alt="Альтанка"
                onClick={() => openLightboxOnSlide(5)}
              />
            </SwiperSlide>
            <SwiperSlide className={css.photoCommonSlide}>
              <img
                src={process.env.PUBLIC_URL + '/images/commonPhoto/alley3.jpg'}
                alt="Алея"
                onClick={() => openLightboxOnSlide(6)}
              />
            </SwiperSlide>
            <SwiperSlide className={css.photoCommonSlide}>
              <img
                src={process.env.PUBLIC_URL + '/images/commonPhoto/alley4.jpg'}
                alt="Алея"
                onClick={() => openLightboxOnSlide(7)}
              />
            </SwiperSlide>
            <SwiperSlide className={css.photoCommonSlide}>
              <img
                src={process.env.PUBLIC_URL + '/images/commonPhoto/alley5.jpg'}
                alt="Алея"
                onClick={() => openLightboxOnSlide(8)}
              />
            </SwiperSlide>
            <SwiperSlide className={css.photoCommonSlide}>
              <img
                src={process.env.PUBLIC_URL + '/images/commonPhoto/alley6.jpg'}
                alt="Алея"
                onClick={() => openLightboxOnSlide(9)}
              />
            </SwiperSlide>
            <SwiperSlide className={css.photoCommonSlide}>
              <img
                src={process.env.PUBLIC_URL + '/images/commonPhoto/alley7.jpg'}
                alt="Алея"
                onClick={() => openLightboxOnSlide(10)}
              />
            </SwiperSlide>
            <SwiperSlide className={css.photoCommonSlide}>
              <img
                src={process.env.PUBLIC_URL + '/images/commonPhoto/cottage.jpg'}
                alt="Будиночек"
                onClick={() => openLightboxOnSlide(11)}
              />
            </SwiperSlide>
            {/* <SwiperSlide className={css.photoCommonSlide}>
            <img
              src={
                process.env.PUBLIC_URL +
                '/images/commonPhoto/cottage_terrace.jpg'
              }
              alt="Алея"
              onClick={() => openLightboxOnSlide(12)}
            />
          </SwiperSlide> */}
            <SwiperSlide className={css.photoCommonSlide}>
              <img
                src={
                  process.env.PUBLIC_URL + '/images/commonPhoto/cottage2_1.jpg'
                }
                alt="Алея"
                onClick={() => openLightboxOnSlide(13)}
              />
            </SwiperSlide>
            <SwiperSlide className={css.photoCommonSlide}>
              <img
                src={
                  process.env.PUBLIC_URL + '/images/commonPhoto/cottage3_1.jpg'
                }
                alt="Будиночек"
                onClick={() => openLightboxOnSlide(14)}
              />
            </SwiperSlide>
            <SwiperSlide className={css.photoCommonSlide}>
              <img
                src={
                  process.env.PUBLIC_URL + '/images/commonPhoto/cottage4_1.jpg'
                }
                alt="Будиночек"
                onClick={() => openLightboxOnSlide(15)}
              />
            </SwiperSlide>
            <SwiperSlide className={css.photoCommonSlide}>
              <img
                src={process.env.PUBLIC_URL + '/images/commonPhoto/fishing.jpg'}
                alt="Риболовля"
                onClick={() => openLightboxOnSlide(16)}
              />
            </SwiperSlide>
            <SwiperSlide className={css.photoCommonSlide}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  '/images/commonPhoto/fishing_gear.jpg'
                }
                alt="Риболовля, снасті"
                onClick={() => openLightboxOnSlide(17)}
              />
            </SwiperSlide>
            <SwiperSlide className={css.photoCommonSlide}>
              <img
                src={process.env.PUBLIC_URL + '/images/commonPhoto/grill.jpg'}
                alt="Мангал"
                onClick={() => openLightboxOnSlide(18)}
              />
            </SwiperSlide>
            <SwiperSlide className={css.photoCommonSlide}>
              <img
                src={process.env.PUBLIC_URL + '/images/commonPhoto/kitchen.jpg'}
                alt="Кухня"
                onClick={() => openLightboxOnSlide(19)}
              />
            </SwiperSlide>
            <SwiperSlide className={css.photoCommonSlide}>
              <img
                src={process.env.PUBLIC_URL + '/images/commonPhoto/pier.jpg'}
                alt="Пірс"
                onClick={() => openLightboxOnSlide(20)}
              />
            </SwiperSlide>
            <SwiperSlide className={css.photoCommonSlide}>
              <img
                src={
                  process.env.PUBLIC_URL + '/images/commonPhoto/pier_sunset.jpg'
                }
                alt="Пірс, схід сонця"
                onClick={() => openLightboxOnSlide(21)}
              />
            </SwiperSlide>
            <SwiperSlide className={css.photoCommonSlide}>
              <img
                src={process.env.PUBLIC_URL + '/images/commonPhoto/room.jpg'}
                alt="Кімната"
                onClick={() => openLightboxOnSlide(22)}
              />
            </SwiperSlide>
            <SwiperSlide className={css.photoCommonSlide}>
              <img
                src={process.env.PUBLIC_URL + '/images/commonPhoto/view.jpg'}
                alt="Вид з будиночку"
                onClick={() => openLightboxOnSlide(23)}
              />
            </SwiperSlide>
          </Swiper>

          <FsLightbox
            toggler={toggler}
            sources={[
              `${process.env.PUBLIC_URL}/images/commonPhoto/altanka1.jpg`,
              `${process.env.PUBLIC_URL}/images/commonPhoto/altanka2.jpg`,
              `${process.env.PUBLIC_URL}/images/commonPhoto/altanka3.jpg`,
              `${process.env.PUBLIC_URL}/images/commonPhoto/altanka4.jpg`,
              `${process.env.PUBLIC_URL}/images/commonPhoto/altanka2_5.jpg`,
              `${process.env.PUBLIC_URL}/images/commonPhoto/alley3.jpg`,
              `${process.env.PUBLIC_URL}/images/commonPhoto/alley4.jpg`,
              `${process.env.PUBLIC_URL}/images/commonPhoto/alley5.jpg`,
              `${process.env.PUBLIC_URL}/images/commonPhoto/alley6.jpg`,
              `${process.env.PUBLIC_URL}/images/commonPhoto/alley7.jpg`,
              `${process.env.PUBLIC_URL}/images/commonPhoto/cottage.jpg`,
              `${process.env.PUBLIC_URL}/images/commonPhoto/cottage_terrace.jpg`,
              `${process.env.PUBLIC_URL}/images/commonPhoto/cottage2.jpg`,
              `${process.env.PUBLIC_URL}/images/commonPhoto/cottage3.jpg`,
              `${process.env.PUBLIC_URL}/images/commonPhoto/cottage4.jpg`,
              `${process.env.PUBLIC_URL}/images/commonPhoto/fishing.jpg`,
              `${process.env.PUBLIC_URL}/images/commonPhoto/fishing_gear.jpg`,
              `${process.env.PUBLIC_URL}/images/commonPhoto/grill.jpg`,
              `${process.env.PUBLIC_URL}/images/commonPhoto/kitchen.jpg`,
              `${process.env.PUBLIC_URL}/images/commonPhoto/pier.jpg`,
              `${process.env.PUBLIC_URL}/images/commonPhoto/pier_sunset.jpg`,
              `${process.env.PUBLIC_URL}/images/commonPhoto/room.jpg`,
              `${process.env.PUBLIC_URL}/images/commonPhoto/view.jpg`,
            ]}
            slide={slide}
          />
        </div>
      </div>
    </div>
  );
}

export default PhotoCommon;
