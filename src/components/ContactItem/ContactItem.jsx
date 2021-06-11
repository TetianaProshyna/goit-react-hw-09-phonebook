import { useDispatch } from "react-redux";
import styles from "./ContactItem.module.scss";
import operations from "../../redux/phonebook/operations";
import PropTypes from "prop-types";

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={styles.item}>
      {name}: {number}
      <button
        className={styles.button}
        type="button"
        onClick={() => dispatch(operations.deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default ContactItem;
