import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/GlobalState";

import User from './User';

const UserList = () => {
  const { users, getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  },[]);

  return (
    <>
      <h3>List of Users</h3>
      <ul className="list">
          {users.map(user => (
              <User key={user.id}
               user={ user } />
          ))}

      </ul>
      
      </>
  );
};

export default UserList;


