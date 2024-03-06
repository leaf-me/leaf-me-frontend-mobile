import React, { createContext, useContext, useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import CONFIG from 'react-native-config';


export const ContextD = createContext();
export function useContextProvider() {
    return useContext(ContextD);
  }
  
const Provider = ({ children }) => {
  const [authToken, setAuthToken] = useState('abcdtoken');
  const [userID, setUserID] = useState('1');
  const API = 'localhost:/3003'

  // useEffect for fetching data...

  // Other functions...

  return (
    <ContextD.Provider
      value={{
        authToken,
        userID,
        API,
        // Other state and functions...
      }}
    >
      {children}
    </ContextD.Provider>
  );
};

export default Provider;
