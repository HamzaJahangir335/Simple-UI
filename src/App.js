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
  return (
    <Fragment>
      <AddUsers onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
