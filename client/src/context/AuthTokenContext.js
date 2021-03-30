import React, { useState, createContext } from 'react';
import axios from 'axios';

export const AuthTokenContext = createContext();

export const AuthTokenContextProvider = function (props) {
  const [authData, setAuthData] = useState({
    user: {},
    token: '',
  });

  const login = async (loginData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axios.post(
        'http://localhost:3000/users/login',
        loginData,
        config
      );
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      setAuthData({
        user,
        token,
      });
    } catch (error) {
      console.log('Unable to Login ...');
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.setAuthData({
      user: {},
      token: '',
    });
  };

  return (
    <AuthTokenContext.Provider value={[login, logout]}>
      {props.children}
    </AuthTokenContext.Provider>
  );
};
