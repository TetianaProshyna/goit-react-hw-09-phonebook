import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../redux/auth/authSelectors";

export default function PublicRoute({ redirectTo, children, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <Route {...routeProps}>
      {isLoggedIn && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
}
