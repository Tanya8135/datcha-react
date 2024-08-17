// import { useState } from 'react';
import css from './Photo.module.scss';

import PhotoCommon from './PhotoCommon';

function Photo() {
  // const [taggler, setToggler] = useState(false);
  return (
    <div>
      <section className={css.photo} id="foto">
        <h3 className={css.titlePhoto}>Фото</h3>

        <PhotoCommon />
      </section>
    </div>
  );
}

export default Photo;
