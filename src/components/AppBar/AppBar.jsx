import React from "react";
import { useSelector } from "react-redux";

import styles from "./AppBar.module.scss";

import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import authSelectors from "../../redux/auth/authSelectors";
import Container from "../Container/Container";

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.menuWrapper}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </Container>
    </header>
  );
};

export default AppBar;
