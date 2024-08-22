// import { useState } from 'react';
import css from './Photo.module.scss';

import PhotoCommon from './PhotoCommon';
import PhotoChalet from './PhotoChalet';

function Photo() {
  // const [taggler, setToggler] = useState(false);
  return (
    <div>
      <section className={css.photo} id="foto">
        <h3 className={css.titlePhoto}>Фото</h3>

        <PhotoCommon />
        <PhotoChalet />
      </section>
    </div>
  );
}

export default Photo;
