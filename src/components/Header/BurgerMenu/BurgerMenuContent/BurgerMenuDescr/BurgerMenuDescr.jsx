import css from "./BurgerMenuDescr.module.css";

function BurgerMenuDescr() {
  return (
    <div>
      <div className={css.burgerMenuDescr}>
        <ul className={css.burgerMenuDescrList}>
          <h2 className={css.burgerMenuDescrTitle}>Прайс</h2>
          <li className={css.burgerMenuDescrItem}>
            <p className={css.burgerMenuDescrText}>
              Денне перебування без заселення
            </p>
            <p className={css.burgerMenuDescrPrice}>150 грн</p>
          </li>
          <li className={css.burgerMenuDescrItem}>
            <p className={css.burgerMenuDescrText}>
              Перебування у буденний день
            </p>
            <p className={css.burgerMenuDescrPrice}>350 грн</p>
          </li>
          <li className={css.burgerMenuDescrItem}>
            <p className={css.burgerMenuDescrText}>Перебування з заселенням</p>
            <p className={css.burgerMenuDescrPrice}>400 грн</p>
          </li>
        </ul>

        <ul className={css.burgerMenuSpetificList}>
          <h3 className={css.butgerMenuSubtitle}>У вартість входить:</h3>
          <li className={css.burgerMenuItemSpetific}>
            <p className={css.burgerMenuSpetificText}>мангал</p>
          </li>
          <li className={css.burgerMenuItemSpetific}>
            <p className={css.burgerMenuSpetificText}>альтанка</p>
          </li>
          <li className={css.burgerMenuItemSpetific}>
            <p className={css.burgerMenuSpetificText}>стоянка</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BurgerMenuDescr;
