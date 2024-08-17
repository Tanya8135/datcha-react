import css from './Photo.module.scss';

function Photo() {
  return (
    <div>
      <section className={css.photo} id="foto">
        <h3 className={css.titlePhoto}>Фото</h3>
        <h4 className={css.subtitlePhoto}>Загальні</h4>
      </section>
    </div>
  );
}

export default Photo;
