import React, { useState } from 'react';
import Card from '../UI/Card';
import styles from './UsersList.module.css';

const UsersList = (props) => {
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedAge, setEditedAge] = useState('');

  const editHandler = (userId) => {
    setEditingUserId(userId);
    const userToEdit = props.users.find((user) => user.id === userId);
    setEditedName(userToEdit.name);
    setEditedAge(userToEdit.age);
  };

  const cancelEditHandler = () => {
    setEditingUserId(null);
    setEditedName('');
    setEditedAge('');
  };

  const saveEditHandler = () => {
    // Call the update user function passed from the parent component
    props.updateUser({
      id: editingUserId,
      name: editedName,
      age: editedAge,
    });
    setEditingUserId(null);
    setEditedName('');
    setEditedAge('');
  };

  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {editingUserId === user.id ? (
              <div>
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
                <input
                  type="number"
                  value={editedAge}
                  onChange={(e) => setEditedAge(e.target.value)}
                />
                <button onClick={saveEditHandler}>Save</button>
                <button onClick={cancelEditHandler}>Cancel</button>
              </div>
            ) : (
              <div>
                {user.name} ({user.age} years old){' '}
                <div style={{ display: 'flex' }}>
                  <button
                    style={{ marginRight: '10px', marginTop: '10px' }}
                    onClick={() => editHandler(user.id)}
                  >
                    Edit
                  </button>
                  <button
                    style={{ marginTop: '10px' }}
                    onClick={() => props.removeUser(user.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
