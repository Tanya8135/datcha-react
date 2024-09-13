// import { ColorRing } from 'react-loader-spinner';
import { Circles } from 'react-loader-spinner';
import css from './Loader.module.scss';

function Loader() {
  return (
    <div className={css.Loader}>
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      {/* <ColorRing
        visible={true}
        height="100"
        width="100"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      /> */}
    </div>
  );
}

export default Loader;
