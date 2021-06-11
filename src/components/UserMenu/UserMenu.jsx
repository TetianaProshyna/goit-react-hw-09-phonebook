import { useSelector, useDispatch } from "react-redux";
import authSelectors from "../../redux/auth/authSelectors";
import authOperations from "../../redux/auth/authOperations";

import avatarDefault from "../UserMenu/avatarDefault.jpg";

export default function UserMenu() {
  const email = useSelector(authSelectors.getUserEmail);
  const dispatch = useDispatch();
  return (
    <div className="userMenu">
      <img className="avatar" width="35" src={avatarDefault} alt="avatar" />
      <span className="userEmail">{email}</span>
      <button
        className="logoutBtn"
        type="button"
        onClick={() => dispatch(authOperations.logout())}
      >
        <i className="material-icons"> logout </i>
      </button>
    </div>
  );
}
