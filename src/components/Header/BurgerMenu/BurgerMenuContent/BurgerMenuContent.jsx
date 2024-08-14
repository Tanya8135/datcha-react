import css from "./BurgerMenuContent.module.css";
import BurgerMenuDescr from "./BurgerMenuDescr";
import BurgerMenuContacts from "./BurgerMenuContacts";
import BurgerMenuSocial from "./BurgerMenuSocial";

function BurgerMenuContent() {
  return (
    <div className={css.burgerMenu}>
      <BurgerMenuDescr />
      <BurgerMenuContacts />
      <BurgerMenuSocial />
    </div>
  );
}

export default BurgerMenuContent;
