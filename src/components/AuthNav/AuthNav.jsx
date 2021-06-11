import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div>
      <NavLink
        activeClassName={"active"}
        className="navLink regLink"
        exact
        to="/registration"
      >
        Register
      </NavLink>
      <NavLink activeClassName={"active"} className="navLink" exact to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
