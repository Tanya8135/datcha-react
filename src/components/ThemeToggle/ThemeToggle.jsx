import { useSelector, useDispatch } from 'react-redux';
import { BsMoon } from 'react-icons/bs';
import { IoSunnyOutline } from 'react-icons/io5';
import { toggleTheme } from '../../redux/themeSlice';
import { selectTheme } from '../../redux/selectors';
import { useEffect } from 'react';

import css from './ThemeToggle.module.scss';

function ThemeToggle() {
  const darkTheme = useSelector(selectTheme); // Получите состояние темы
  const dispatch = useDispatch();

  useEffect(() => {
    // Добавляем или удаляем классы на корневом элементе
    if (darkTheme === 'dark') {
      document.body.classList.add('darkTheme');
      document.body.classList.remove('lightTheme');
    } else {
      document.body.classList.add('lightTheme');
      document.body.classList.remove('darkTheme');
    }
  }, [darkTheme]);

  return (
    <>
      <button
        className={css.btnTheme}
        aria-label="Перемикач теми"
        onClick={() => dispatch(toggleTheme())}
      >
        {darkTheme === 'light' ? (
          <BsMoon
            className={css.iconTheme}
            style={{ fill: darkTheme === 'light' ? '#423d1b' : '#cdcab3' }}
          />
        ) : (
          <IoSunnyOutline className={css.iconTheme} />
        )}
      </button>
    </>
  );
}

export default ThemeToggle;
