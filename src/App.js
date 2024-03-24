import React, { useState } from 'react';
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';
import { Fragment } from 'react';

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toLocaleString() }];
    })
  }

  const removeUser = (id) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList].filter((user) => user.id !== id)
    });
  }

  const updateUserHandler = (updatedUser) => {
    setUsersList((prevUsersList) => {
      return prevUsersList.map((user) =>
        user.id === updatedUser.id ? { name: updatedUser.name, age: updatedUser.age } : user
      );
    });
  };
  return (
    <Fragment>
      <AddUsers onAddUser={addUserHandler} />
      <UsersList removeUser = {removeUser} updateUser={updateUserHandler} users={usersList} />
    </Fragment>
  );
}

export default App;
