// Checkbox.js
import React from 'react';

const Checkbox = ({ name, checked, onChange, label }) => {
  return (
    <label>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

export default Checkbox;
