import React, { useContext } from "react";
import { UserContext } from "../context/GlobalState";

const User = ({ user }) => {
    const { deleteUser } = useContext(UserContext);

    const sign = user.balance < 0 ? '-' : '';


    return (
        <li className={user.balance < 0 ? 'minus' : 'plus'}>
            User:{user.name}  Email:{user.email}  Password:{user.password}  
      <span>Balance:{sign}${user.balance}</span>
      <button 
      onClick={() => deleteUser(user._id)}
      className="delete-btn">delete</button>
    </li>
    )
}

export default User

//if you need to get rid of a double negative
//${Math.abs(user.balance)}
//Math.abs makes the number an absolute number which will always be positive

//this component just tells the UI how to display a user
