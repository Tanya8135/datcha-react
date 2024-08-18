import css from './PhotoCommon.module.scss';

function PhotoCommon() {
  return (
    <div>
      <h4 className={css.subtitlePhoto}>Загальні</h4>

      <div className={css.testCommon}>
        <div className={css.test1}>
          <img
            srcSet={`${process.env.PUBLIC_URL}/images/1180/altanka1@2_700.jpg 1400w,
      ${process.env.PUBLIC_URL}/images/1180/altanka1_700.jpg 700w`}
            sizes="(min-width: 1180px) 700px, 100vw"
            src={process.env.PUBLIC_URL + '/images/1180/altanka1_700.jpg'}
            alt="Альтанка"
          />
        </div>
        <div className={css.test1}>
          <img
            srcSet={`${process.env.PUBLIC_URL}/images/1180/altanka2@2_700.jpg 1400w,
      ${process.env.PUBLIC_URL}/images/1180/altanka2_700.jpg 700w`}
            sizes="(min-width: 1180px) 700px, 100vw"
            src={process.env.PUBLIC_URL + '/images/1180/altanka2_700.jpg'}
            alt="Альтанка"
          />
        </div>
        <div className={css.test1}>
          <img
            srcSet={`${process.env.PUBLIC_URL}/images/1180/altanka3@2_700.jpg 1400w,
      ${process.env.PUBLIC_URL}/images/1180/altanka3_700.jpg 700w`}
            sizes="(min-width: 1180px) 700px, 100vw"
            src={process.env.PUBLIC_URL + '/images/1180/altanka3_700.jpg'}
            alt="Альтанка"
          />
        </div>
      </div>
    </div>
  );
}

export default PhotoCommon;
