import Navigation from "components/Navigation/Navigation";
import useAuth from "hooks/useAuth";
import css from './AppBar.module.css';
import UserMenu from "components/UserMenu/UserMenu";
import AuthNav from "components/AuthNav/AuthNav";


const AppBar = () => {
    const { isLoggedIn } = useAuth();
  
    return (
      <header className={css.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    );
  };
  export default AppBar;