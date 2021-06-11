import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "../../components/Container";
import Section from "../../components/Section";
import ContactForm from "../../components/ContactForm";
import Filter from "../../components/Filter";
import ContactList from "../../components/ContactList";
import selectors from "../../redux/phonebook/selectors";
import operations from "../../redux/phonebook/operations";
import styles from "./PhonebookView.module.scss";

export default function PhonebookView() {
  const isLoading = useSelector(selectors.getIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <div className={styles.phonebookWrapper}>
        <Section className={"formSection"} title={"Phonebook"}>
          <ContactForm />
        </Section>

        <Section className={"contactsSection"} title={"Contacts"}>
          <Filter />
          {isLoading && <p>Loading...</p>}
          <ContactList />
        </Section>
      </div>
    </Container>
  );
}
