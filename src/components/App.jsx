// import React, { useEffect } from 'react';
// import Form from './Form';
// import ContactList from './ContactList/ContactList';
// import SearchContact from './SearchContact';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Container,  Subtitle, Title, Total } from './App.styled';
// import { useSelector, useDispatch } from 'react-redux';



// import { setFilter } from 'redux/filtersSlice';
// import { addContact, deleteContact, fetchContacts } from 'redux/operations';
// import {
//   selectContacts,
//   selectError,
//   selectFilter,
//   selectIsLoading,
// } from 'redux/selectors';
// import Loader from './Loader/Loader';

// const App = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectContacts);
//   const filter = useSelector(selectFilter);
//   const error = useSelector(selectError);
//   const isLoading = useSelector(selectIsLoading);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   const handleAddContact = contact => {
//     const { name } = contact;
//     if (contacts.some(item => item.name.toLowerCase() === name.toLowerCase())) {
//       toast.warning(`${name} is already in contacts`);
//       return;
//     }
//     dispatch(addContact(contact));
//   };

//   const handleRemoveContact = id => {
//     dispatch(deleteContact(id));
//   };

//   const handleSearchContact = event => {
//     const { value } = event.target;
//     dispatch(setFilter(value));
//   };

//   const getFilteredContacts = () => {
//     if (!filter) {
//       return contacts;
//     }
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   const filteredContacts = getFilteredContacts();

//   return (
//     <Container>
//       <Title>PhoneBook</Title>
//       <Form onSubmit={handleAddContact} />
//       <Subtitle>Contacts</Subtitle>
//       {isLoading && !error && <Loader />}
//       <Total>Total contacts: {filteredContacts.length}</Total>
//       <SearchContact filter={filter} searchContact={handleSearchContact} />
//       <ContactList
//         contacts={filteredContacts}
//         removeContact={handleRemoveContact}
//       />
           
//       <ToastContainer autoClose={2000} />
//     </Container>
//   );
// };

// export default App;

// import { Route, Routes } from 'react-router-dom';
// import Layout from './Layout/Layout';
// import { Suspense , lazy } from 'react';
// import { NotFound } from 'pages/NotFound';
// // import { NotFound } from 'pages/NotFound';

// const HomePage = lazy(() => import('../pages/Home/Home'));
// const RegisterPage = lazy(() => import('../pages/Register/Register'));
// const LoginPage = lazy(() => import('../pages/Login/Login'));
// const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));


// const App = () => {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<HomePage />} />
//         <Route path="register" element={<RegisterPage />} />
//         <Route path="login" element={<LoginPage />} />
//         <Route path="contacts" element={<ContactsPage />} />     
//       </Route>
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//     </Suspense>
//   );
// };

// export default App;

import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import Layout from './Layout/Layout';
import { lazy, useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import useAuth from 'hooks/useAuth';
import { useDispatch } from 'react-redux';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
export default App;