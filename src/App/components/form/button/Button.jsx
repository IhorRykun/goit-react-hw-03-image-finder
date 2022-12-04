import css from '../button/Button.module.css';

export const Button = ({ children }) => {
  return <button className={css.button}>{children}</button>;
};
