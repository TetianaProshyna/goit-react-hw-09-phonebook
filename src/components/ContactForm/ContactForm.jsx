import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import operations from "../../redux/phonebook/operations";
import selectors from "../../redux/phonebook/selectors";

import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(selectors.getContactsList);
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    const { value } = e.currentTarget;
    setName(value);
  };
  const handleNumberChange = (e) => {
    const { value } = e.currentTarget;
    setNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contacts.find((el) => el.name === name)) {
      alert("already add");
      reset();
      return;
    }
    dispatch(operations.addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          className={styles.input}
          value={number}
          onChange={handleNumberChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
