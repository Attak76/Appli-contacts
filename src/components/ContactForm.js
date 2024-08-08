import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      addContact({ name, email });
      setName('');
      setEmail('');
    } else {
      alert("Les champs Nom et Email sont obligatoires");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <h1>CONTACTS</h1>
        
        <label className="title" htmlFor="name">NOM <span style={{ color: 'var(--alert-color)',}}>*</span></label>
        <input 
          type="text" 
          id="name"
          placeholder="Saisissez un nom" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          aria-required="true"
        />

        <label className="title" htmlFor="email">ADRESSE MAIL <span style={{ color: 'var(--alert-color)',}}>*</span></label>
        <input  
          type="email" 
          id="email"
          placeholder="Saisissez un E-mail" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          aria-required="true"
        />
      
        <p className="required-message">* Champs requis</p>

        <button type="submit" className="create-button">AJOUTER LE CONTACT</button>
      
      </div>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired
};

export default ContactForm;