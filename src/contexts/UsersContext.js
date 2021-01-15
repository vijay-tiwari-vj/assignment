import React, { createContext, useState, useEffect } from 'react';

export const UsersContext = createContext();

export const UsersContextProvider = (props) => {
  const [users, setUsers] = useState([]);

  const BASE_URL = 'https://panorbit.in/api/users.json';
  const fetchUsers = async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    setUsers(data.users);
  }

  useEffect(() => {
    fetchUsers();
  }, [])

  return (
    <UsersContext.Provider value={{ users }}>
      {props.children}
    </UsersContext.Provider>
  )
}

export default UsersContextProvider;
