import { NavLink } from "react-router-dom";
import css from './AuthNav.module.css';
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  &.active {
    color: #590042;
  }
`;

export const AuthNav = () => {
    return (
      <div className={css.container}>
        <StyledLink className={css.link} to="/register">
          Register
        </StyledLink>
        <StyledLink className={css.link} to="/login">
          Log In
        </StyledLink>
      </div>
    );
  };
  