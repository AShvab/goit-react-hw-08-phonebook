import css from './Footer.module.css';

const Footer = () => (

  <footer className={css.footer}>
    <p>PhoneBook &copy; 2023 by </p>{' '}
    <a
      href="https://github.com/AShvab"
      target="_blank"
      rel="noreferrer noopener"
    >
      <span className={css.highlight}>Anna Shvabovska</span>
    </a>
  </footer>
);
export default Footer;
