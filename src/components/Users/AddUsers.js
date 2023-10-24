import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import styles from './AddUsers.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUsers = (props) => {
  
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('0');
  const [error, setError] = useState();

  const submitChangeHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a Valid Username and Age"
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please Enter a valid age"
      })
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  }

  const nameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }
  const errorHandler = ()=>{
    setError(null);
  }
  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={styles.input}>
        <form onSubmit={submitChangeHandler}>
          <label htmlFor="username">Enter Username</label>
          <input type="text" id='username' onChange={nameChangeHandler} value={enteredUsername} />
          <label htmlFor="age">Enter Age</label>
          <input type="number" id='age' onChange={ageChangeHandler} value={enteredAge} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </Wrapper>
  )
}

export default AddUsers
