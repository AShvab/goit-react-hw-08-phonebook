import { NavLink } from "react-router-dom";
import css from './AuthNav.module.css';
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  &.active {
    color: orange;
  }
`;

const AuthNav = () => {
  return (
    <div>
      <StyledLink className={css.link} to="/register">
        Register
      </StyledLink>
      <StyledLink className={css.link} to="/login">
        Log In
      </StyledLink>
    </div>
  );
};
 export default AuthNav;