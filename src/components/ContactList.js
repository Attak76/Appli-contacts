import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';
import deleteIcon from '../assets/images/delete-icon.png';

const ContactList = ({ contacts, removeContact }) => {
  const [removingIndex, setRemovingIndex] = useState(null);

  const handleRemove = (index) => {
    setRemovingIndex(index);
    setTimeout(() => {
      removeContact(index);
      setRemovingIndex(null);
    }, 500);
  };

  if (contacts.length === 0) {
    return <p className="empty-message">Votre liste de contacts est vide pour le moment. </p>;
  }

  return (
    <div className="contact-list">
      <label className="list-title">VOS CONTACTS ({contacts.length})</label>
      {contacts.map((contact, index) => (
        <div
          key={index}
          className={`contact-item ${removingIndex === index ? 'contact-item-exit' : 'contact-item-enter'}`}
        >
          <Contact name={contact.name} email={contact.email} />
          <button className="delete-button" onClick={() => handleRemove(index)}>
            <img src={deleteIcon} alt="delete" className="delete-icon" />
          </button>
        </div>
      ))}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default ContactList;
