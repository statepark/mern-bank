import React, { useState, useContext } from "react";
import { UserContext } from "../context/GlobalState";


import Card from "react-bootstrap/Card";

const CreateAccount = () => {

 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 

  const { addUser } = useContext(UserContext);

  const onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name,
      email, 
      password
    }

    addUser(newUser);
  
  }

  return (
    <Card>
      <Card.Body>
      <h3>Create an account here...</h3>
      <form onSubmit={onSubmit}>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name..."
            />
             <label htmlFor="name">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email..."
            />
             <label htmlFor="name">Password</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your secret password..."
            />
            <button type="submit" className="btn btn-light" onClick={addUser}>
              Create my account!
            </button>
          </div>
        </form>

      </Card.Body>
    </Card>
  );
};

export default CreateAccount;
