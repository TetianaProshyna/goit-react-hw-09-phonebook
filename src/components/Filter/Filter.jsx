import { useSelector, useDispatch } from "react-redux";
import styles from "./Filter.module.scss";

import action from "../../redux/phonebook/actions";
import selectors from "../../redux/phonebook/selectors";

export default function Filter() {
  const value = useSelector(selectors.getFilter);
  const dispatch = useDispatch();
  return (
    <label className={styles.filterLabel}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={(e) => dispatch(action.changeFilter(e.target.value))}
      />
    </label>
  );
}
