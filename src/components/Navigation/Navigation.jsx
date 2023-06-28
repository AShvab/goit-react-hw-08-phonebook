import useAuth from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './Navigation.module.css';

const StyledLink = styled(NavLink)`
  &.active {
    color: orange;
  }
`;

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <ul className={css.headerList}>
        <li className={css.headerItem}>
          <StyledLink className={css.headerLink} to="/">
            Home
          </StyledLink>
        </li>
        <li className={css.headerItem}>
          {isLoggedIn && (
            <StyledLink className={css.headerLink} to="/contacts">
              Contacts
            </StyledLink>
          )}
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
