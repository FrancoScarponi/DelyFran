import css from "./navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={css.nav}>
      <div className={css.logo}>
        <span className={css.icon}>❤</span>
        <span className={css.title}>Del y Fran</span>
      </div>
    </nav>
  );
};
