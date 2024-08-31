import { useState } from 'react';

import FsLightbox from 'fslightbox-react';
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
        </Swiper>

        <FsLightbox
          toggler={toggler}
          sources={[
            `${process.env.PUBLIC_URL}/images/chaletPhoto/chalet.jpg`,
            `${process.env.PUBLIC_URL}/images/chaletPhoto/chalet1.jpg`,
            `${process.env.PUBLIC_URL}/images/chaletPhoto/ladder_chalet.jpg`,
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


// import { useState } from 'react';

// import photoDataChalet from 'data/photoDataChalet';
// import FsLightbox from 'fslightbox-react';
// import cssCommonPhoto from '../PhotoCommon/PhotoCommon.module.scss';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

// function PhotoChalet() {
//   const [lightboxController, setLightboxController] = useState({
//     toggler: false,
//     slide: 1,
//   });

//   const openLightboxOnSlide = slideIndex => {
//     setLightboxController({
//       toggler: !lightboxController.toggler,
//       slide: slideIndex + 1,
//     });
//   };

//   return (
//     <div>
//       <h4 className={cssCommonPhoto.subtitlePhoto}>Шале</h4>

//       <div className={cssCommonPhoto.PhotoCommonBox}>
//         <Swiper
//           className="mySwiper"
//           slidesPerView={1}
//           spaceBetween={10}
//           breakpoints={{
//             768: {
//               slidesPerView: 2,
//               spaceBetween: 40,
//             },
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: 30,
//             },
//           }}
//         >
//           {photoDataChalet.map((photo, index) => (
//             <SwiperSlide key={photo.id}>
//               <div
//                 className={cssCommonPhoto.photoCommonSlide}
//                 onClick={() => openLightboxOnSlide(index)}
//               >
//                 <img src={photo.src} alt={photo.alt} />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         <FsLightbox
//           toggler={lightboxController.toggler}
//           sources={photoDataChalet.map(photo => photo.src)}
//           slide={lightboxController.slide}
//         />
//       </div>
//     </div>
//   );
// }

// export default PhotoChalet;
