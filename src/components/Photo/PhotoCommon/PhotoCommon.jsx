import css from './PhotoCommon.module.scss';

function PhotoCommon() {
  return (
    <div>
      <h4 className={css.subtitlePhoto}>Загальні</h4>

      <img
        src={process.env.PUBLIC_URL + '/images/1180/altanka1_700.jpg'}
        alt="Альтанка"
      />
    </div>
  );
}

export default PhotoCommon;
