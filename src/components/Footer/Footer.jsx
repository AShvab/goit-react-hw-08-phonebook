import css from './Footer.module.css';

const Footer = () => (

  <footer className={css.footer}>
    <p>PhoneBook &copy; 2023 by </p>{' '}
    <a
    className={css.highlight}
      href="https://github.com/AShvab"
      target="_blank"
      rel="noreferrer noopener"
    >
      Anna Shvabovska
    </a>
  </footer>
);
export default Footer;
