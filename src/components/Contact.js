import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ name, email }) => {
  return (
    <div className='contact-info'>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Contact;