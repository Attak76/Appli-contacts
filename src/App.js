import React, { useState } from 'react';
import './styles/App.css';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import ToggleButton from './components/ToggleButton';
import PropTypes from 'prop-types';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isDay, setIsDay] = useState(true);

  const addContact = (contact) => {
    setTimeout(() => {
      setContacts([...contacts, contact]);
    }, 50);
  };

  const removeContact = (index) => {
    const newContacts = contacts.filter((_, i) => i !== index);
    setContacts(newContacts);
  };

  const toggleTheme = () => {
    setIsDay(!isDay);
    document.body.classList.toggle('night-mode');
  };

  return (
    <div className={`app ${isDay ? 'day' : 'night'}`}>
      <ToggleButton toggleTheme={toggleTheme} />
      <div className="contacts-container">
        <ContactForm addContact={addContact} />
        <ContactList contacts={contacts} removeContact={removeContact} />
      </div>
    </div>
  );
};

App.propTypes = {
  contacts: PropTypes.array,
  setContacts: PropTypes.func
};

export default App;
