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
    if (darkTheme) {
      document.body.classList.add('darkTheme');
      document.body.classList.remove('header');
    } else {
      document.body.classList.remove('darkTheme');
      document.body.classList.add('header');
    }
  }, [darkTheme]);

  return (
    <div>
      <button className={css.btnTheme} onClick={() => dispatch(toggleTheme())}>
        {darkTheme === 'light' ? (
          <BsMoon className={css.iconTheme} />
        ) : (
          <IoSunnyOutline className={css.iconTheme} />
        )}
      </button>
      <div
        style={{
          backgroundColor: darkTheme === 'light' ? '#fff' : '#333',
          color: darkTheme === 'light' ? '#000' : '#fff',
          padding: '10px',
        }}
      >
        Current Theme: {darkTheme}
      </div>
    </div>
  );
}

export default ThemeToggle;
