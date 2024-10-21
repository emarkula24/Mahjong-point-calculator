// UserHandContext.js
import React, { createContext, useState } from 'react';

export const UserHandContext = createContext();

export const UserHandProvider = ({ children }) => {
  const [userHand, setUserHand] = useState([]);

  return (
    <UserHandContext.Provider value={{ userHand, setUserHand }}>
      {children}
    </UserHandContext.Provider>
  );
};
