import ContactList from 'components/ContactList/ContactList';
import SearchContact from 'components/SearchContact/SearchContact';
import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { setFilter } from 'redux/contacts/filtersSlice';
import { addContact, deleteContact, fetchContacts } from 'redux/contacts/operations';
import { Container, Subtitle, Title, Total } from './Contacts.styled';
import Loader from 'components/Loader/Loader';
import Form from 'components/Form/Form';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectFilter, selectIsLoading } from 'redux/contacts/selectors';
import 'react-toastify/dist/ReactToastify.css';


const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = contact => {
    const { name } = contact;
    if (contacts.some(item => item.name.toLowerCase() === name.toLowerCase())) {
      toast.warning(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact(contact));
  };

  const handleRemoveContact = id => {
    dispatch(deleteContact(id));
  };

  const handleSearchContact = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Container>
      <Title>PhoneBook</Title>
      <Form onSubmit={handleAddContact} />
      <Subtitle>Contacts</Subtitle>
      {isLoading && !error && <Loader />}
      <Total>Total contacts: {filteredContacts.length}</Total>
      <SearchContact filter={filter} searchContact={handleSearchContact} />
      <ContactList
        contacts={filteredContacts}
        removeContact={handleRemoveContact}
      />           
      <ToastContainer autoClose={2000} />
    </Container>
  );
};

export default Contacts;