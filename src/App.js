import { useEffect, Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import AppBar from "./components/AppBar/AppBar";
import authOperations from "./redux/auth/authOperations";

const HomeView = lazy(() => import("./views/HomeView/HomeView"));
const RegistrationView = lazy(() =>
  import("./views/RegistrationView/RegistrationView")
);
const LoginView = lazy(() => import("./views/LoginView/LoginView"));
const PhonebookView = lazy(() => import("./views/PhonebookView/PhonebookView"));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense fallback={<p className="loading">Loading...</p>}>
        <Switch>
          <PublicRoute path="/" exact>
            <HomeView />
          </PublicRoute>
          <PrivateRoute redirectTo="/login" path="/phonebook" exact>
            <PhonebookView />
          </PrivateRoute>
          <PublicRoute
            path="/registration"
            redirectTo="/phonebook"
            exact
            restricted
            component={RegistrationView}
          >
            <RegistrationView />
          </PublicRoute>
          <PublicRoute redirectTo="/phonebook" path="/login" exact restricted>
            <LoginView />
          </PublicRoute>
        </Switch>
      </Suspense>
    </>
  );
}
